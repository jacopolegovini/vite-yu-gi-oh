import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    getImagePath(imgPath) {
        return new URL(imgPath, import.meta.url).href;
    },
    loaded: false,
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    // createCards() {
    //     axios.get(this.apiUrl)
    //         .then((response) => {
    //             const cards = []
    //             console.log(response.data.data[0].name)
    //             for (let i = 0; i < 20; i++) {
    //                 this.cards.push(response.data.data[i])
    //             }
    //             console.log(this.cards)
    //             return cards
    //         });
    // }
    changeVariable() {
        console.log(this.loaded)
        this.loaded = true
    }
});