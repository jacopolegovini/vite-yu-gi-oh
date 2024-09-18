import { reactive } from "vue";

export const store = reactive({
    getImagePath(imgPath) {
        return new URL(imgPath, import.meta.url).href;
    },
});