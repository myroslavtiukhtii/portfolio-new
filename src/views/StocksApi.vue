<template>
    <div class="about__stocks">
        <h2 class="about__title">Stocks API mini project</h2>
        <form class="about__search">
            <input v-model="searchTicker" class="about__search__input" type="text" placeholder="search ticker">
        </form>
        <ul v-if="searchTicker" class="about__list">
            <li v-for="(item, index) in filteredItems" :key="index" class="about__list__ticker">
                <h3 class="list__ticker__title"> {{ item.T }} </h3>
                <div class="list__ticker__price">
                    <div class="list__ticker__close">
                        Close 
                        <span> {{ item.c}} </span>
                    </div>
                    <div class="list__ticker__open">
                        Open
                        <span> {{ item.o }} </span>
                    </div>
                </div>
                <div class="list__ticker__date"> {{ date }} </div>
            </li>
        </ul>
        <ul v-else-if="tickersData.length > 0" class="about__list">
            <li v-for="(item, index) in tickersData.slice(0, 10)" :key="index" class="about__list__ticker">
                <h3 class="list__ticker__title"> {{ item.T }} </h3>
                <div class="list__ticker__price">
                    <div class="list__ticker__close">
                        Close 
                        <span> {{ item.c}} </span>
                    </div>
                    <div class="list__ticker__open">
                        Open
                        <span> {{ item.o }} </span>
                    </div>
                </div>
                <div class="list__ticker__date"> {{ date }} </div>
            </li>
        </ul>
        <div v-else class="about__loading">
          <img :src="LoadingIcon" alt="loading icon" title="loading icon"/>
        </div>
        <div v-show="!filteredItems.length && searchTicker" class="search__alert">Oh no 😢, such a ticker does not exist</div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import LoadingIcon from "@/assets/icons/loading.svg";

export default defineComponent({
    name: 'StocksApi',
    setup() {
        return {
            LoadingIcon
        }
    },
    data() {
        return {
            apiKey: 'UsQEnV_Hx1NSWFK6rEW5_wIQttO4I3X8',
            day: '',
            month: '',
            year: 0 as number,
            date: '',
            tickersData: [] as Array<any>,
            searchTicker: ''
        }
    },
    methods: {
        async getStocksData() {
            const API = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${this.year}-${this.month}-${this.day}?adjusted=true&apiKey=${this.apiKey}`;
            fetch(API)
            .then(res => res.json())
            .then(data => (this.tickersData = data.results))
            .catch(error => console.log(error))
        },
        getDate() {
            let newDate = new Date();
            newDate.setDate(newDate.getDate() - 1);
            this.day = String(newDate.getDate()).padStart(2, '0');
            this.month = String(newDate.getMonth() + 1).padStart(2, '0');
            this.year = newDate.getFullYear();
            this.date = `${this.day}-${this.month}-${this.year}`
        },
    },
    mounted() {
        this.getDate()
        this.getStocksData()
    },
    computed: {
        filteredItems() {
            if (this.searchTicker) {
                const lowercaseQuery = this.searchTicker.toLowerCase();
                return this.tickersData.filter(item =>
                item.T.toLowerCase().includes(lowercaseQuery)
                ).slice(0, 10);
            } return this.tickersData;
        }
    }

});
</script>


<style lang="scss" scoped>

.about__stocks {
    display: flex;
    flex-direction: column;
}
.about__title {
    font-size: clamp(0.5rem, 7vw, 1.5rem);
    line-height: 150%;
    margin-bottom: 50px;
    align-self: center;
}

.about__search {
    position: relative;
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 50px;

    .about__search__input {
        width: 100%;
        min-height: 50px;
        border-radius: 5px;
        padding-left: 15px;
        
        &::placeholder {
            font-size: 1rem;
        }
    }
}

.about__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
}

.about__list__ticker {
    min-height: 100px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background: rgb(126,126,126);
    background: linear-gradient(90deg, rgba(126,126,126,0.8267682072829132) 0%, rgba(85,85,85,1) 100%);

    .list__ticker__title {
        font-size: clamp(1rem, 7vw, 2rem);
        color: var(--main-text-color);
        margin-bottom: 45px;
    }

    .list__ticker__price {
        display: flex;
        flex-direction: column;
        gap: 25px;
        margin-bottom: 35px;

        span {
            color: #ff0000;
        }
    }

    .list__ticker__close, .list__ticker__open {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: clamp(0.7rem, 7vw, 1.5rem);
        color: var(--main-text-color);
    }

    .list__ticker__open {
        span {
            color: #91f06f;
        }
    }

    .list__ticker__date {
        font-size: clamp(0.3rem, 7vw, 1rem);
        color: var(--main-black-color);
        margin-bottom: 15px;
    }

}

.about__loading {
    align-self: center;
  img {
    max-width: 150px;
    @media (max-width: 800px) {
      max-width: 100px;
    }
  }
}

.search__alert {
    font-size: clamp(0.5rem, 7vw, 1.5rem);
        width: 100%;
        min-height: 150px;
    }

</style>