import { computed } from "vue";
import { mapState, mapGetters, useStore, createNamespacedHelpers } from "vuex";
const useMapper = (mapper: any, mapFn: any) => {
  const store = useStore();
  const storeStateFns = mapFn(mapper);
  const storeState = {};
  Object.keys(storeStateFns).forEach((keyFn: any) => {
    const fn = storeStateFns[keyFn].bind({ $store: store });
    storeStateFns[keyFn] = computed(fn);
  });
  return storeState;
};

export const useState = (moduleName: string | null, mapper: any) => {
  let mapperFn = mapState;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn);
};

export const useGeeters = (moduleName: string | null, mapper: any) => {
  let mapperFn = mapGetters;
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn);
};
