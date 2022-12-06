<template>
  <div  class="info-pricing my-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title d-flex justify-content-between align-items-center">
            <span
              class="fw-bold"
              :class="i > 1 ? 'text-primary' : i == 0 ? 'y' : ''"
              v-for="(t, i) in state.infoPricing.title"
              :key="t"
              >{{ t }}</span
            >
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          class="col-12"
          v-for="(g, ii) in state.infoPricing.giving"
          :key="g"
        >
          <div class="giving d-flex align-items-center">
            <span class="y text-start"
              >{{ g }}
              <button
                type="button"
                class="btn"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Tooltip on top"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style="color: #b2b6b9"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-question-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                  />
                </svg>
              </button>
            </span>
            <span
              class="ms-auto"
              :class="numChecked(ii, i)"
              v-for="i in 4"
              :key="i"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" class="help">
        <img src="../img/price4.png" alt="" />
        <a href=""> need help ? contact support </a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const state = reactive({
      infoPricing: {
        title: ["feature", "basic", "pro", "business", "interprise"],
        giving: [
          "get a fully designed website",
          "webflow developpement",
          "limited support",
          "get a fully designed website",
          "webflow developpement",
          "limited support",
          "get a fully designed website",
        ],
      },
    });
    return { state };
  },
  methods: {
    numChecked(row, col) {
      return (row >= 3 && col == 0) ||
        (row >= 4 && col == 1) ||
        (row >= 5 && col == 2) ||
        (row >= 6 && col == 3)
        ? "tr"
        : "";
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/utilities/mixins';
.info-pricing {
  .container {
    .row {
      background-color: #f1f5f9;
      padding: 40px;
      .col-12 {
        span {
          font-size: 20px;
        }
        @media (max-width: 550px) {
          span {
            font-size: 15px !important;
          }
        }
        transition: 0, 4s;
        @include borderBottom;
        border-color: #c7d2d6;
        &:hover {
          background-color: #e2eaf1;
        }
        .title {
          span {
            width: 15%;
            &:first-of-type {
              width: 32%;
              text-align: start;
              @media (max-width: 767px) {
                display: block;
                width: 100% !important;
              }
            }
            &:not(:first-of-type) {
              margin-left: auto;
            }
            &.y {
              width: 32%;
              text-align: start;
            }
          }
        }
        .giving {
          span {
            width: 15%;
            &.y {
              width: 32%;
            }
            &.tr {
              opacity: 0;
            }
            svg {
              width: 20px;
              height: 20px;
            }
          }
        }
        @media (max-width: 767px) {
          .title {
            flex-wrap: wrap;
            span {
              width: 10%;
            }
            .y {
              display: block;
              width: 100% !important;
              text-align: center;
              padding: 10px;
            }
          }
          .giving {
            flex-wrap: wrap;

            .y {
              display: block;
              width: 100% !important;
            }
          }
        }
      }
    }
  }
  @media (max-width:400px){
     .container .row .col-12 .giving span {
      width: 35%;
    }
     .container .row .col-12 .title span {
      width: 35%;
  }    
  }
  .help {
    text-align: start;
    padding: 50px 30px;
    display: flex;
    align-items: center;
    a {
      &:hover {
        color: purple !important ;
      }
    }
  }
}
</style>