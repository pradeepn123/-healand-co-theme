"use strict";
(self["webpackChunkshoptrade_Shopify_Development"] = self["webpackChunkshoptrade_Shopify_Development"] || []).push([["shared"],{

/***/ "./js/components/breakpoints.js":
/*!**************************************!*\
  !*** ./js/components/breakpoints.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var JsComponents_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JsComponents/constants */ "./js/components/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  var breakpointsValues = JsComponents_constants__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINTS;
  var breakpoints = Object.values(breakpointsValues);
  var currentBreakpoint = 320;
  breakpoints.forEach((breakpoint, index) => {
    if (window.innerWidth >= breakpoint) {
      if (breakpoints[breakpoint]) {
        currentBreakpoint = breakpointsValues[breakpoint];
      } else {
        currentBreakpoint = breakpoints[index];
      }
    }
  });
  return currentBreakpoint;
});

/***/ }),

/***/ "./js/components/constants.js":
/*!************************************!*\
  !*** ./js/components/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BREAKPOINTS: () => (/* binding */ BREAKPOINTS)
/* harmony export */ });
var BREAKPOINTS = {
  '768': 768,
  '1200': 1200,
  '1920': 1920
};

/***/ }),

/***/ "./js/components/get-data.js":
/*!***********************************!*\
  !*** ./js/components/get-data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customerLocation: () => (/* binding */ customerLocation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");

var customerLocation = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    var data = yield fetch('/browsing_context_suggestions.json');
    var {
      detected_values: {
        country: {
          handle
        } = {}
      } = {}
    } = yield data.json();
    return handle;
  });
  return function customerLocation() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./js/components/svelte-wrapper.js":
/*!*****************************************!*\
  !*** ./js/components/svelte-wrapper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json-6 */ "./node_modules/json-6/dist/index.js");
/* harmony import */ var json_6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_6__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((Component, container, propsEl) => {
  //component is a pre-compiled class
  //container is where you want to inject component
  //propEl pass prop when injecting
  var appContainer = document.querySelectorAll(container);
  return [...appContainer].map(appTarget => {
    var initialized = appTarget.dataset.initialized || false;
    var props = {};
    if (appTarget && !initialized) {
      var _props;
      if (propsEl) {
        var _appTarget$querySelec;
        props = json_6__WEBPACK_IMPORTED_MODULE_0___default().parse((_appTarget$querySelec = appTarget.querySelector(propsEl)) === null || _appTarget$querySelec === void 0 ? void 0 : _appTarget$querySelec.innerHTML) || {}; //get json from the script id 
      }
      //inject component into container
      var instance = new Component({
        target: appTarget,
        props: {
          shopifyData: (_props = props) === null || _props === void 0 ? void 0 : _props.data //pass the prop on data prop as default
        }
      });
      appTarget.dataset.initialized = true;
      return instance;
    }
  });
});

/***/ }),

/***/ "./js/components/svelte/AnnouncementBar.svelte":
/*!*****************************************************!*\
  !*** ./js/components/svelte/AnnouncementBar.svelte ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var JsComponents_get_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! JsComponents/get-data */ "./js/components/get-data.js");
/* js/components/svelte/AnnouncementBar.svelte generated by Svelte v4.2.15 */






function instance($$self, $$props, $$invalidate) {
	let country;
	let { shopifyData } = $$props;
	const blockData = shopifyData;

	const handleLocationBasedAnnouncement = () => {
		for (let countryBlock in blockData) {
			if (blockData[countryBlock]?.handle?.includes(country)) {
				const announcementBar = document.querySelector("[data-announcement-bar]");
				announcementBar.classList.remove("hidden");

				announcementBar?.querySelectorAll("[ data-announcement-text]")?.forEach(text => {
					text.innerHTML = blockData[countryBlock]?.text;
				});

				break;
			}
		}
	};

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(async () => {
		country = await (0,JsComponents_get_data__WEBPACK_IMPORTED_MODULE_3__.customerLocation)();
		handleLocationBasedAnnouncement();
	});

	$$self.$$set = $$props => {
		if ('shopifyData' in $$props) $$invalidate(0, shopifyData = $$props.shopifyData);
	};

	return [shopifyData];
}

class AnnouncementBar extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, null, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { shopifyData: 0 });
	}

	get shopifyData() {
		return this.$$.ctx[0];
	}

	set shopifyData(shopifyData) {
		this.$$set({ shopifyData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(AnnouncementBar, {"shopifyData":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnouncementBar);

/***/ }),

/***/ "./js/components/svelte/BundleTabsSection/content.svelte":
/*!***************************************************************!*\
  !*** ./js/components/svelte/BundleTabsSection/content.svelte ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var SvelteComponents_accordions_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! SvelteComponents/accordions.svelte */ "./js/components/svelte/accordions.svelte");
/* js/components/svelte/BundleTabsSection/content.svelte generated by Svelte v4.2.15 */





function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (8:4) {#each content as accordionTitle, index}
function create_each_block_1(ctx) {
	let div1;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let h6;
	let t1_value = /*accordionTitle*/ ctx[1].heading + "";
	let t1;
	let t2;
	let p;
	let t3_value = /*accordionTitle*/ ctx[1].description + "";
	let t3;
	let t4;

	return {
		c() {
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			h6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h6");
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t3_value);
			t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = /*accordionTitle*/ ctx[1].icon)) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "alt", "");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "content__image-title-wrap");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "content__list-item");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, img);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, h6);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h6, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t2);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, p);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t3);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t4);
		},
		p(ctx, dirty) {
			if (dirty & /*content*/ 1 && !(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = /*accordionTitle*/ ctx[1].icon)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
			}

			if (dirty & /*content*/ 1 && t1_value !== (t1_value = /*accordionTitle*/ ctx[1].heading + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);
			if (dirty & /*content*/ 1 && t3_value !== (t3_value = /*accordionTitle*/ ctx[1].description + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t3, t3_value);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
			}
		}
	};
}

// (22:12) 
function create_head_slot(ctx) {
	let span;
	let html_tag;

	let raw_value = `<div class="">
                        <img src="${/*accordionTitle*/ ctx[1].icon}" alt="">
                        <h6>${/*accordionTitle*/ ctx[1].heading}</h6>
                    </div>` + "";

	let t;

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__.HtmlTag(false);
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			html_tag.a = t;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "head");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
			html_tag.m(raw_value, span);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*content*/ 1 && raw_value !== (raw_value = `<div class="">
                        <img src="${/*accordionTitle*/ ctx[1].icon}" alt="">
                        <h6>${/*accordionTitle*/ ctx[1].heading}</h6>
                    </div>` + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
			}
		}
	};
}

// (28:12) 
function create_details_slot(ctx) {
	let span;
	let html_tag;

	let raw_value = `
                <p>${/*accordionTitle*/ ctx[1].description}</p>
                ` + "";

	let t;

	return {
		c() {
			span = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
			html_tag = new svelte_internal__WEBPACK_IMPORTED_MODULE_0__.HtmlTag(false);
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			html_tag.a = t;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span, "slot", "details");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, span, anchor);
			html_tag.m(raw_value, span);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span, t);
		},
		p(ctx, dirty) {
			if (dirty & /*content*/ 1 && raw_value !== (raw_value = `
                <p>${/*accordionTitle*/ ctx[1].description}</p>
                ` + "")) html_tag.p(raw_value);
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(span);
			}
		}
	};
}

// (20:4) {#each content as accordionTitle, index}
function create_each_block(ctx) {
	let accordions;
	let current;

	accordions = new SvelteComponents_accordions_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
			props: {
				open: /*index*/ ctx[3] == 0,
				$$slots: {
					details: [create_details_slot],
					head: [create_head_slot]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(accordions.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(accordions, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const accordions_changes = {};

			if (dirty & /*$$scope, content*/ 33) {
				accordions_changes.$$scope = { dirty, ctx };
			}

			accordions.$set(accordions_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(accordions.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(accordions.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(accordions, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div0;
	let t;
	let div1;
	let current;
	let each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*content*/ ctx[0]);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*content*/ ctx[0]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "content__list content__list--desktop");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "content__list content__list--mobile");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div0, anchor);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				if (each_blocks_1[i]) {
					each_blocks_1[i].m(div0, null);
				}
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div1, null);
				}
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*content*/ 1) {
				each_value_1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*content*/ ctx[0]);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(div0, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*content*/ 1) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*content*/ ctx[0]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(div1, null);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div0);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_1, detaching);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { content } = $$props;
	console.log(content);

	$$self.$$set = $$props => {
		if ('content' in $$props) $$invalidate(0, content = $$props.content);
	};

	return [content];
}

class Content extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { content: 0 });
	}

	get content() {
		return this.$$.ctx[0];
	}

	set content(content) {
		this.$$set({ content });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Content, {"content":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ "./js/components/svelte/BundleTabsSection/header.svelte":
/*!**************************************************************!*\
  !*** ./js/components/svelte/BundleTabsSection/header.svelte ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* js/components/svelte/BundleTabsSection/header.svelte generated by Svelte v4.2.15 */




function create_fragment(ctx) {
	let div;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			h1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h1");
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*sectionTitle*/ ctx[0]);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
			t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(/*productTitle*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h1, "class", "bundle-header__sectionTitle");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "bundle-header__productTitle");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "bundle-header");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, h1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(h1, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, p);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t2);
		},
		p(ctx, [dirty]) {
			if (dirty & /*sectionTitle*/ 1) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, /*sectionTitle*/ ctx[0]);
			if (dirty & /*productTitle*/ 2) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2, /*productTitle*/ ctx[1]);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { sectionTitle } = $$props;
	let { productTitle } = $$props;
	console.log(sectionTitle, productTitle);

	$$self.$$set = $$props => {
		if ('sectionTitle' in $$props) $$invalidate(0, sectionTitle = $$props.sectionTitle);
		if ('productTitle' in $$props) $$invalidate(1, productTitle = $$props.productTitle);
	};

	return [sectionTitle, productTitle];
}

class Header extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { sectionTitle: 0, productTitle: 1 });
	}

	get sectionTitle() {
		return this.$$.ctx[0];
	}

	set sectionTitle(sectionTitle) {
		this.$$set({ sectionTitle });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get productTitle() {
		return this.$$.ctx[1];
	}

	set productTitle(productTitle) {
		this.$$set({ productTitle });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Header, {"sectionTitle":{},"productTitle":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./js/components/svelte/BundleTabsSection/imager-slider.svelte":
/*!*********************************************************************!*\
  !*** ./js/components/svelte/BundleTabsSection/imager-slider.svelte ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var SvelteComponents_Responsive_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! SvelteComponents/Responsive-Image */ "./js/components/svelte/Responsive-Image.svelte");
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/element/bundle */ "./node_modules/swiper/swiper-element-bundle.mjs");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* js/components/svelte/BundleTabsSection/imager-slider.svelte generated by Svelte v4.2.15 */







function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-1alr8z5", "swiper-container.svelte-1alr8z5 .swiper-slide-active .product-image__item.svelte-1alr8z5{opacity:1;transform:scale(1.1)}swiper-container.svelte-1alr8z5 .swiper-scrollbar-horizontal.svelte-1alr8z5{left:50% !important;right:50% !important;width:80% !important;transform:translateX(-50%) !important}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (60:2) {#each images as imageObj}
function create_each_block(ctx) {
	let swiper_slide;
	let div;
	let responsiveimage;
	let div_class_value;
	let t;
	let current;

	responsiveimage = new SvelteComponents_Responsive_Image__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				image_aspect_ratio: 1,
				image: /*imageObj*/ ctx[2].image
			}
		});

	return {
		c() {
			swiper_slide = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("swiper-slide");
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(responsiveimage.$$.fragment);
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", div_class_value = "" + ((0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.null_to_empty)(`product-image__item`) + " svelte-1alr8z5"));
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, swiper_slide, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(swiper_slide, div);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(responsiveimage, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(swiper_slide, t);
			current = true;
		},
		p(ctx, dirty) {
			const responsiveimage_changes = {};
			if (dirty & /*images*/ 1) responsiveimage_changes.image = /*imageObj*/ ctx[2].image;
			responsiveimage.$set(responsiveimage_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(responsiveimage.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(responsiveimage.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(swiper_slide);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(responsiveimage);
		}
	};
}

function create_fragment(ctx) {
	let swiper_container;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*images*/ ctx[0]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			swiper_container = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("swiper-container");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_custom_element_data)(swiper_container, "init", "false");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_custom_element_data)(swiper_container, "class", "svelte-1alr8z5");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, swiper_container, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(swiper_container, null);
				}
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*images*/ 1) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*images*/ ctx[0]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(swiper_container, null);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(swiper_container);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { currentSelectedProductIndex } = $$props;
	let { images } = $$props;
	(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_2__.register)();

	(0,svelte__WEBPACK_IMPORTED_MODULE_3__.onMount)(() => {
		const swiperEl = document.querySelector("swiper-container");

		const params = {
			effect: "coverflow",
			centeredSlides: true,
			coverflowEffect: {
				rotate: 0,
				stretch: -20,
				depth: 100,
				modifier: 2,
				slideShadows: false
			},
			scrollbar: "true",
			loop: false,
			slidesPerView: 2.8,
			on: {
				afterInit() {
					this.slideTo(1);
				},
				slideChange() {
					$$invalidate(1, currentSelectedProductIndex = this.realIndex);
				}
			}
		};

		Object.assign(swiperEl, params);

		// and now initialize it
		swiperEl.initialize();

		swiperEl.addEventListener('swiperafterinit', () => {
			console.log("swiper init");
		});
	});

	$$self.$$set = $$props => {
		if ('currentSelectedProductIndex' in $$props) $$invalidate(1, currentSelectedProductIndex = $$props.currentSelectedProductIndex);
		if ('images' in $$props) $$invalidate(0, images = $$props.images);
	};

	return [images, currentSelectedProductIndex];
}

class Imager_slider extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				currentSelectedProductIndex: 1,
				images: 0
			},
			add_css
		);
	}

	get currentSelectedProductIndex() {
		return this.$$.ctx[1];
	}

	set currentSelectedProductIndex(currentSelectedProductIndex) {
		this.$$set({ currentSelectedProductIndex });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get images() {
		return this.$$.ctx[0];
	}

	set images(images) {
		this.$$set({ images });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Imager_slider, {"currentSelectedProductIndex":{},"images":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Imager_slider);

/***/ }),

/***/ "./js/components/svelte/BundleTabsSection/images.svelte":
/*!**************************************************************!*\
  !*** ./js/components/svelte/BundleTabsSection/images.svelte ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* harmony import */ var _imager_slider_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imager-slider.svelte */ "./js/components/svelte/BundleTabsSection/imager-slider.svelte");
/* harmony import */ var SvelteComponents_Responsive_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! SvelteComponents/Responsive-Image */ "./js/components/svelte/Responsive-Image.svelte");
/* harmony import */ var JsComponents_breakpoints_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! JsComponents/breakpoints.js */ "./js/components/breakpoints.js");
/* js/components/svelte/BundleTabsSection/images.svelte generated by Svelte v4.2.15 */








function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	child_ctx[8] = i;
	return child_ctx;
}

// (31:0) {:else}
function create_else_block(ctx) {
	let imagerslider;
	let updating_currentSelectedProductIndex;
	let current;

	function imagerslider_currentSelectedProductIndex_binding(value) {
		/*imagerslider_currentSelectedProductIndex_binding*/ ctx[5](value);
	}

	let imagerslider_props = { images: /*images*/ ctx[1] };

	if (/*currentSelectedProductIndex*/ ctx[0] !== void 0) {
		imagerslider_props.currentSelectedProductIndex = /*currentSelectedProductIndex*/ ctx[0];
	}

	imagerslider = new _imager_slider_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({ props: imagerslider_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(imagerslider, 'currentSelectedProductIndex', imagerslider_currentSelectedProductIndex_binding));

	return {
		c() {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(imagerslider.$$.fragment);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(imagerslider, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const imagerslider_changes = {};
			if (dirty & /*images*/ 2) imagerslider_changes.images = /*images*/ ctx[1];

			if (!updating_currentSelectedProductIndex && dirty & /*currentSelectedProductIndex*/ 1) {
				updating_currentSelectedProductIndex = true;
				imagerslider_changes.currentSelectedProductIndex = /*currentSelectedProductIndex*/ ctx[0];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_currentSelectedProductIndex = false);
			}

			imagerslider.$set(imagerslider_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(imagerslider.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(imagerslider.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(imagerslider, detaching);
		}
	};
}

// (21:0) {#if currentBreakpoint >= 1200 }
function create_if_block(ctx) {
	let div;
	let current;
	let each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*images*/ ctx[1]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-image__list");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				if (each_blocks[i]) {
					each_blocks[i].m(div, null);
				}
			}

			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*images, handleProductSelect*/ 10) {
				each_value = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.ensure_array_like)(/*images*/ ctx[1]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
		}
	};
}

// (23:4) {#each images as imageObj, index}
function create_each_block(ctx) {
	let div;
	let responsiveimage;
	let t;
	let current;
	let mounted;
	let dispose;

	responsiveimage = new SvelteComponents_Responsive_Image__WEBPACK_IMPORTED_MODULE_4__["default"]({
			props: {
				image_aspect_ratio: 1,
				image: /*imageObj*/ ctx[6].image
			}
		});

	function click_handler() {
		return /*click_handler*/ ctx[4](/*index*/ ctx[8]);
	}

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(responsiveimage.$$.fragment);
			t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "product-image__item");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.toggle_class)(div, "product-image__item--selected", /*imageObj*/ ctx[6]?.isSelected);
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(responsiveimage, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t);
			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const responsiveimage_changes = {};
			if (dirty & /*images*/ 2) responsiveimage_changes.image = /*imageObj*/ ctx[6].image;
			responsiveimage.$set(responsiveimage_changes);

			if (!current || dirty & /*images*/ 2) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.toggle_class)(div, "product-image__item--selected", /*imageObj*/ ctx[6]?.isSelected);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(responsiveimage.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(responsiveimage.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(responsiveimage);
			mounted = false;
			dispose();
		}
	};
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*currentBreakpoint*/ ctx[2] >= 1200) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
			}

			if_blocks[current_block_type_index].d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { images = [] } = $$props;
	let { currentSelectedProductIndex } = $$props;

	//update the parent state
	const handleProductSelect = index => {
		$$invalidate(0, currentSelectedProductIndex = index);
	};

	let currentBreakpoint;

	(0,svelte__WEBPACK_IMPORTED_MODULE_2__.onMount)(() => {
		$$invalidate(2, currentBreakpoint = (0,JsComponents_breakpoints_js__WEBPACK_IMPORTED_MODULE_5__["default"])());
		console.log(currentBreakpoint);
	});

	const click_handler = index => handleProductSelect(index);

	function imagerslider_currentSelectedProductIndex_binding(value) {
		currentSelectedProductIndex = value;
		$$invalidate(0, currentSelectedProductIndex);
	}

	$$self.$$set = $$props => {
		if ('images' in $$props) $$invalidate(1, images = $$props.images);
		if ('currentSelectedProductIndex' in $$props) $$invalidate(0, currentSelectedProductIndex = $$props.currentSelectedProductIndex);
	};

	return [
		currentSelectedProductIndex,
		images,
		currentBreakpoint,
		handleProductSelect,
		click_handler,
		imagerslider_currentSelectedProductIndex_binding
	];
}

class Images extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
			images: 1,
			currentSelectedProductIndex: 0
		});
	}

	get images() {
		return this.$$.ctx[1];
	}

	set images(images) {
		this.$$set({ images });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get currentSelectedProductIndex() {
		return this.$$.ctx[0];
	}

	set currentSelectedProductIndex(currentSelectedProductIndex) {
		this.$$set({ currentSelectedProductIndex });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Images, {"images":{},"currentSelectedProductIndex":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Images);

/***/ }),

/***/ "./js/components/svelte/BundleTabsSection/index.svelte":
/*!*************************************************************!*\
  !*** ./js/components/svelte/BundleTabsSection/index.svelte ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var _content_svelte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content.svelte */ "./js/components/svelte/BundleTabsSection/content.svelte");
/* harmony import */ var _header_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.svelte */ "./js/components/svelte/BundleTabsSection/header.svelte");
/* harmony import */ var _images_svelte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images.svelte */ "./js/components/svelte/BundleTabsSection/images.svelte");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/src/runtime/index.js");
/* js/components/svelte/BundleTabsSection/index.svelte generated by Svelte v4.2.15 */









function create_fragment(ctx) {
	let div;
	let header;
	let t0;
	let images;
	let updating_currentSelectedProductIndex;
	let t1;
	let content;
	let current;

	header = new _header_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
			props: {
				sectionTitle: /*title*/ ctx[3],
				productTitle: /*selectedProduct*/ ctx[2]?.title
			}
		});

	function images_currentSelectedProductIndex_binding(value) {
		/*images_currentSelectedProductIndex_binding*/ ctx[5](value);
	}

	let images_props = { images: /*productImages*/ ctx[1] };

	if (/*currentSelectedProductIndex*/ ctx[0] !== void 0) {
		images_props.currentSelectedProductIndex = /*currentSelectedProductIndex*/ ctx[0];
	}

	images = new _images_svelte__WEBPACK_IMPORTED_MODULE_4__["default"]({ props: images_props });
	svelte_internal__WEBPACK_IMPORTED_MODULE_0__.binding_callbacks.push(() => (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.bind)(images, 'currentSelectedProductIndex', images_currentSelectedProductIndex_binding));

	content = new _content_svelte__WEBPACK_IMPORTED_MODULE_5__["default"]({
			props: {
				content: /*selectedProduct*/ ctx[2]?.content
			}
		});

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(header.$$.fragment);
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(images.$$.fragment);
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(content.$$.fragment);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "bundleTabsSection");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(header, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t0);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(images, div, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(content, div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const header_changes = {};
			if (dirty & /*selectedProduct*/ 4) header_changes.productTitle = /*selectedProduct*/ ctx[2]?.title;
			header.$set(header_changes);
			const images_changes = {};
			if (dirty & /*productImages*/ 2) images_changes.images = /*productImages*/ ctx[1];

			if (!updating_currentSelectedProductIndex && dirty & /*currentSelectedProductIndex*/ 1) {
				updating_currentSelectedProductIndex = true;
				images_changes.currentSelectedProductIndex = /*currentSelectedProductIndex*/ ctx[0];
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_flush_callback)(() => updating_currentSelectedProductIndex = false);
			}

			images.$set(images_changes);
			const content_changes = {};
			if (dirty & /*selectedProduct*/ 4) content_changes.content = /*selectedProduct*/ ctx[2]?.content;
			content.$set(content_changes);
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(header.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(images.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(content.$$.fragment, local);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(header.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(images.$$.fragment, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(content.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(header);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(images);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(content);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let selectedProduct;
	let productImages;
	let { shopifyData } = $$props;

	//static data from shopify
	const { title, products } = shopifyData;

	let currentSelectedProductIndex = products.length > 1 ? 1 : 0;

	function images_currentSelectedProductIndex_binding(value) {
		currentSelectedProductIndex = value;
		$$invalidate(0, currentSelectedProductIndex);
	}

	$$self.$$set = $$props => {
		if ('shopifyData' in $$props) $$invalidate(4, shopifyData = $$props.shopifyData);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*currentSelectedProductIndex*/ 1) {
			//Computed data which would be re-assigned each time a state changes, 
			// we use $: declarative for declaring computed data
			$: $$invalidate(2, selectedProduct = products[currentSelectedProductIndex]);
		}

		if ($$self.$$.dirty & /*currentSelectedProductIndex*/ 1) {
			$: $$invalidate(1, productImages = products.map(({ image }, index) => {
				return {
					isSelected: index == currentSelectedProductIndex,
					image
				};
			}));
		}
	};

	return [
		currentSelectedProductIndex,
		productImages,
		selectedProduct,
		title,
		shopifyData,
		images_currentSelectedProductIndex_binding
	];
}

class BundleTabsSection extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { shopifyData: 4 });
	}

	get shopifyData() {
		return this.$$.ctx[4];
	}

	set shopifyData(shopifyData) {
		this.$$set({ shopifyData });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(BundleTabsSection, {"shopifyData":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BundleTabsSection);

/***/ }),

/***/ "./js/components/svelte/Responsive-Image.svelte":
/*!******************************************************!*\
  !*** ./js/components/svelte/Responsive-Image.svelte ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* js/components/svelte/Responsive-Image.svelte generated by Svelte v4.2.15 */




function add_css(target) {
	(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-1g66rao", ".responsive-image__wrapper.svelte-1g66rao:before{content:'';width:100%;display:block;padding-top:var(--padding-top)}.responsive-image__wrapper.svelte-1g66rao{max-width:var(--max-width);height:100%;position:relative;max-height:var(--max-height);height:auto}.responsive-image__image.svelte-1g66rao{position:absolute;top:0;height:100%;left:0;width:100%}");
}

function create_fragment(ctx) {
	let div;
	let img;
	let img_id_value;
	let img_src_value;
	let img_style_value;
	let div_id_value;
	let div_style_value;

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			img = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("img");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "id", img_id_value = "Image-" + /*image_id*/ ctx[2] + "-" + /*generated_image_id*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "class", "responsive-image__image svelte-1g66rao");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "loading", "lazy");
			if (!(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = /*displayImage*/ ctx[0].src)) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "style", img_style_value = /*getImageStyle*/ ctx[4]());
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "id", div_id_value = "ImageWrapper-" + /*image_id*/ ctx[2] + "-" + /*generated_image_id*/ ctx[1]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "data-image-id", /*image_id*/ ctx[2]);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "responsive-image__wrapper svelte-1g66rao");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "style", div_style_value = /*getWrapperStyles*/ ctx[3]());
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, img);
		},
		p(ctx, [dirty]) {
			if (dirty & /*displayImage*/ 1 && !(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.src_url_equal)(img.src, img_src_value = /*displayImage*/ ctx[0].src)) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(img, "src", img_src_value);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}
		}
	};
}

let min = 100;
let max = 10000;

function instance($$self, $$props, $$invalidate) {
	let { image_aspect_ratio } = $$props;
	let { image } = $$props;
	let { srcTokens } = $$props;
	let { maxWidth } = $$props;
	let diff = max - min;
	let generated_image_id = Date.now() / diff + min;
	let displayImage = image;

	if (!displayImage) {
		displayImage = {
			width: 1920,
			height: 1080,
			id: Math.random() * 10 * Date.now(),
			src: 'https://cdn.shopify.com/s/files/1/0422/2255/1191/files/placeholderImage.webp?v=1692958737'
		};
	}

	let image_id = displayImage.id || Math.random() * 100000 * Date.now();
	let max_height_image = displayImage.height;
	let max_width_image = displayImage.width;

	if (maxWidth) {
		if (max_width_image >= parseInt(maxWidth)) {
			max_width_image = maxWidth;
		}
	}

	const max_width_image_float = max_width_image * 1.0;

	(aspectRatio => {
		if (aspectRatio <= 1) {
			max_height_image = image_height;
			max_width_image = max_height_image * image_aspect_ratio;
		} else {
			max_height_image = max_width_image / image_aspect_ratio;
		}
	})();

	const getWrapperStyles = () => {
		return `
      --padding-top: ${max_height_image / max_width_image_float * 100}%;
      --max-height: ${max_height_image}px;
      --max-width: ${max_width_image}px;
      `;
	};

	const getImageStyle = () => {
		return `
      max-width: ${max_width_image}px;
      max-height: ${max_height_image}px;
      object-fit: contain;`;
	};

	$$self.$$set = $$props => {
		if ('image_aspect_ratio' in $$props) $$invalidate(5, image_aspect_ratio = $$props.image_aspect_ratio);
		if ('image' in $$props) $$invalidate(6, image = $$props.image);
		if ('srcTokens' in $$props) $$invalidate(7, srcTokens = $$props.srcTokens);
		if ('maxWidth' in $$props) $$invalidate(8, maxWidth = $$props.maxWidth);
	};

	return [
		displayImage,
		generated_image_id,
		image_id,
		getWrapperStyles,
		getImageStyle,
		image_aspect_ratio,
		image,
		srcTokens,
		maxWidth
	];
}

class Responsive_Image extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();

		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(
			this,
			options,
			instance,
			create_fragment,
			svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal,
			{
				image_aspect_ratio: 5,
				image: 6,
				srcTokens: 7,
				maxWidth: 8
			},
			add_css
		);
	}

	get image_aspect_ratio() {
		return this.$$.ctx[5];
	}

	set image_aspect_ratio(image_aspect_ratio) {
		this.$$set({ image_aspect_ratio });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get image() {
		return this.$$.ctx[6];
	}

	set image(image) {
		this.$$set({ image });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get srcTokens() {
		return this.$$.ctx[7];
	}

	set srcTokens(srcTokens) {
		this.$$set({ srcTokens });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}

	get maxWidth() {
		return this.$$.ctx[8];
	}

	set maxWidth(maxWidth) {
		this.$$set({ maxWidth });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Responsive_Image, {"image_aspect_ratio":{},"image":{},"srcTokens":{},"maxWidth":{}}, [], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Responsive_Image);

/***/ }),

/***/ "./js/components/svelte/accordions.svelte":
/*!************************************************!*\
  !*** ./js/components/svelte/accordions.svelte ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/src/runtime/internal/index.js");
/* harmony import */ var svelte_internal_disclose_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte/internal/disclose-version */ "./node_modules/svelte/src/runtime/internal/disclose-version/index.js");
/* harmony import */ var svelte_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte/transition */ "./node_modules/svelte/src/runtime/transition/index.js");
/* js/components/svelte/accordions.svelte generated by Svelte v4.2.15 */




const get_details_slot_changes = dirty => ({});
const get_details_slot_context = ctx => ({});
const get_head_slot_changes = dirty => ({});
const get_head_slot_context = ctx => ({});

// (23:8) {:else}
function create_else_block(ctx) {
	let button;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
			button.innerHTML = /*openIcon*/ ctx[1];
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			}
		}
	};
}

// (19:8) {#if open}
function create_if_block_1(ctx) {
	let button;

	return {
		c() {
			button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
			button.innerHTML = /*closeIcon*/ ctx[2];
		},
		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
			}
		}
	};
}

// (30:4) {#if open}
function create_if_block(ctx) {
	let div;
	let div_transition;
	let current;
	const details_slot_template = /*#slots*/ ctx[5].details;
	const details_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(details_slot_template, ctx, /*$$scope*/ ctx[4], get_details_slot_context);

	return {
		c() {
			div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (details_slot) details_slot.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "details");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);

			if (details_slot) {
				details_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (details_slot) {
				if (details_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						details_slot,
						details_slot_template,
						ctx,
						/*$$scope*/ ctx[4],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[4])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(details_slot_template, /*$$scope*/ ctx[4], dirty, get_details_slot_changes),
						get_details_slot_context
					);
				}
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(details_slot, local);

			if (local) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(() => {
					if (!current) return;
					if (!div_transition) div_transition = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_bidirectional_transition)(div, svelte_transition__WEBPACK_IMPORTED_MODULE_2__.slide, {}, true);
					div_transition.run(1);
				});
			}

			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(details_slot, local);

			if (local) {
				if (!div_transition) div_transition = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_bidirectional_transition)(div, svelte_transition__WEBPACK_IMPORTED_MODULE_2__.slide, {}, false);
				div_transition.run(0);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
			}

			if (details_slot) details_slot.d(detaching);
			if (detaching && div_transition) div_transition.end();
		}
	};
}

function create_fragment(ctx) {
	let div2;
	let div1;
	let div0;
	let t0;
	let t1;
	let current;
	let mounted;
	let dispose;
	const head_slot_template = /*#slots*/ ctx[5].head;
	const head_slot = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_slot)(head_slot_template, ctx, /*$$scope*/ ctx[4], get_head_slot_context);

	function select_block_type(ctx, dirty) {
		if (/*open*/ ctx[0]) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*open*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
			if (head_slot) head_slot.c();
			t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if_block0.c();
			t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
			if (if_block1) if_block1.c();
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "text");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "header");
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "accordion custom_filter_header");
		},
		m(target, anchor) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);

			if (head_slot) {
				head_slot.m(div0, null);
			}

			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t0);
			if_block0.m(div1, null);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
			if (if_block1) if_block1.m(div2, null);
			current = true;

			if (!mounted) {
				dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(div1, "click", /*handleClick*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (head_slot) {
				if (head_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.update_slot_base)(
						head_slot,
						head_slot_template,
						ctx,
						/*$$scope*/ ctx[4],
						!current
						? (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_all_dirty_from_scope)(/*$$scope*/ ctx[4])
						: (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.get_slot_changes)(head_slot_template, /*$$scope*/ ctx[4], dirty, get_head_slot_changes),
						get_head_slot_context
					);
				}
			}

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div1, null);
				}
			}

			if (/*open*/ ctx[0]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*open*/ 1) {
						(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1, 1);
					if_block1.m(div2, null);
				}
			} else if (if_block1) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
			}
		},
		i(local) {
			if (current) return;
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(head_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block1);
			current = true;
		},
		o(local) {
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(head_slot, local);
			(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
			}

			if (head_slot) head_slot.d(detaching);
			if_block0.d();
			if (if_block1) if_block1.d();
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { open = false } = $$props;

	const openIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none"> 
                        <path d="M11 1.5L6 6.5L1 1.5" stroke="#2F4775" stroke-width="2"/>
                    </svg>`;

	const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 6.5L6 1.5L11 6.5" stroke="#2F4775" stroke-width="2"/>
                    </svg>`;

	const handleClick = () => $$invalidate(0, open = !open);

	$$self.$$set = $$props => {
		if ('open' in $$props) $$invalidate(0, open = $$props.open);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [open, openIcon, closeIcon, handleClick, $$scope, slots];
}

class Accordions extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent {
	constructor(options) {
		super();
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, { open: 0 });
	}

	get open() {
		return this.$$.ctx[0];
	}

	set open(open) {
		this.$$set({ open });
		(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.flush)();
	}
}

(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_custom_element)(Accordions, {"open":{"type":"Boolean"}}, ["head","details"], [], true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordions);

/***/ })

}]);