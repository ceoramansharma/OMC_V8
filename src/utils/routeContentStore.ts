import { LOCAL_CITIES_DATA, LocalCityData } from '../data/localSeoData';
import { STATES_DATA, StateInfo, SERVICES_DATA, ServiceItem, QUALIFYING_CONDITIONS, ConditionItem } from '../data/mmjData';
import { BLOG_ARTICLES_DATA, BlogArticle } from '../data/blogArticlesData';

const STORAGE_KEY = 'online_mmj_custom_route_content_v1';

export interface RouteContentOverrides {
  cities: Record<string, Partial<LocalCityData>>;
  states: Record<string, Partial<StateInfo>>;
  services: Record<string, Partial<ServiceItem>>;
  conditions: Record<string, Partial<ConditionItem>>;
  articles: Record<string, Partial<BlogArticle>>;
}

function loadOverrides(): RouteContentOverrides {
  if (typeof window === 'undefined') {
    return { cities: {}, states: {}, services: {}, conditions: {}, articles: {} };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        cities: parsed.cities || {},
        states: parsed.states || {},
        services: parsed.services || {},
        conditions: parsed.conditions || {},
        articles: parsed.articles || {},
      };
    }
  } catch (e) {
    console.error('Failed to load route overrides:', e);
  }
  return { cities: {}, states: {}, services: {}, conditions: {}, articles: {} };
}

function saveOverrides(overrides: RouteContentOverrides) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    window.dispatchEvent(new CustomEvent('route-content-updated', { detail: overrides }));
  } catch (e) {
    console.error('Failed to save route overrides:', e);
  }
}

let cachedOverrides = loadOverrides();

export function getAllCities(): LocalCityData[] {
  return LOCAL_CITIES_DATA.map((city) => {
    const override = cachedOverrides.cities[city.slug];
    return override ? { ...city, ...override } : city;
  });
}

export function getCityBySlug(slug: string): LocalCityData | undefined {
  const base = LOCAL_CITIES_DATA.find((c) => c.slug === slug);
  if (!base) return undefined;
  const override = cachedOverrides.cities[slug];
  return override ? { ...base, ...override } : base;
}

export function getAllStates(): StateInfo[] {
  return STATES_DATA.map((state) => {
    const override = cachedOverrides.states[state.id];
    return override ? { ...state, ...override } : state;
  });
}

export function getStateById(stateId: string): StateInfo | undefined {
  const base = STATES_DATA.find((s) => s.id === stateId);
  if (!base) return undefined;
  const override = cachedOverrides.states[stateId];
  return override ? { ...base, ...override } : base;
}

export function getAllServices(): ServiceItem[] {
  return SERVICES_DATA.map((service) => {
    const override = cachedOverrides.services[service.id];
    return override ? { ...service, ...override } : service;
  });
}

export function getServiceById(serviceId: string): ServiceItem | undefined {
  const base = SERVICES_DATA.find((s) => s.id === serviceId);
  if (!base) return undefined;
  const override = cachedOverrides.services[serviceId];
  return override ? { ...base, ...override } : base;
}

export function getAllConditions(): ConditionItem[] {
  return QUALIFYING_CONDITIONS.map((cond) => {
    const override = cachedOverrides.conditions[cond.id];
    return override ? { ...cond, ...override } : cond;
  });
}

export function getConditionById(conditionId: string): ConditionItem | undefined {
  const base = QUALIFYING_CONDITIONS.find((c) => c.id === conditionId);
  if (!base) return undefined;
  const override = cachedOverrides.conditions[conditionId];
  return override ? { ...base, ...override } : base;
}

export function getAllArticles(): BlogArticle[] {
  return BLOG_ARTICLES_DATA.map((article) => {
    const override = cachedOverrides.articles[article.slug] || cachedOverrides.articles[article.id];
    return override ? { ...article, ...override } : article;
  });
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  const base = BLOG_ARTICLES_DATA.find((a) => a.slug === slug || a.id === slug);
  if (!base) return undefined;
  const override = cachedOverrides.articles[slug] || cachedOverrides.articles[base.id];
  return override ? { ...base, ...override } : base;
}

// Live update mutations that update application state in real-time
export function updateCityContent(slug: string, updates: Partial<LocalCityData>) {
  cachedOverrides.cities[slug] = {
    ...(cachedOverrides.cities[slug] || {}),
    ...updates,
  };
  saveOverrides(cachedOverrides);
}

export function updateStateContent(stateId: string, updates: Partial<StateInfo>) {
  cachedOverrides.states[stateId] = {
    ...(cachedOverrides.states[stateId] || {}),
    ...updates,
  };
  saveOverrides(cachedOverrides);
}

export function updateServiceContent(serviceId: string, updates: Partial<ServiceItem>) {
  cachedOverrides.services[serviceId] = {
    ...(cachedOverrides.services[serviceId] || {}),
    ...updates,
  };
  saveOverrides(cachedOverrides);
}

export function updateConditionContent(conditionId: string, updates: Partial<ConditionItem>) {
  cachedOverrides.conditions[conditionId] = {
    ...(cachedOverrides.conditions[conditionId] || {}),
    ...updates,
  };
  saveOverrides(cachedOverrides);
}

export function updateArticleContent(slug: string, updates: Partial<BlogArticle>) {
  cachedOverrides.articles[slug] = {
    ...(cachedOverrides.articles[slug] || {}),
    ...updates,
  };
  saveOverrides(cachedOverrides);
}

export function resetRouteContent(category: 'city' | 'state' | 'service' | 'condition' | 'article', key: string) {
  if (category === 'city') delete cachedOverrides.cities[key];
  if (category === 'state') delete cachedOverrides.states[key];
  if (category === 'service') delete cachedOverrides.services[key];
  if (category === 'condition') delete cachedOverrides.conditions[key];
  if (category === 'article') delete cachedOverrides.articles[key];
  saveOverrides(cachedOverrides);
}

export function resetAllRouteContents() {
  cachedOverrides = { cities: {}, states: {}, services: {}, conditions: {}, articles: {} };
  saveOverrides(cachedOverrides);
}
