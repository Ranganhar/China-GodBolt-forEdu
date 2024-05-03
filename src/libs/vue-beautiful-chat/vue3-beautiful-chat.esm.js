import { reactive, openBlock, createElementBlock, normalizeStyle, createCommentVNode, renderSlot, createElementVNode, toDisplayString, resolveComponent, createVNode, withCtx, createTextVNode, pushScopeId, popScopeId, resolveDirective, normalizeClass, withDirectives, createBlock, Fragment, renderList, vShow, withModifiers, nextTick, withScopeId, withKeys, mergeProps, ref, createApp, h } from "vue";
const store = {
  state: reactive({
    editMessage: null
  }),
  setState(key, val) {
    this.state[key] = val;
  }
};
function mapState(keys) {
  const map = {};
  keys.forEach((key) => {
    map[key] = function() {
      return store.state[key];
    };
  });
  return map;
}
var CloseIcon$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUxpcf///////////////////////////////////////////////////////3EAnbYAAAAOdFJOUwADZ66SoQjEhnS7/gsNGQL7+wAAAKtJREFUKM+F01sOhCAQRNESFV/I/pc70Og0YJfyJbmHhBAbGGYHstw8IPV4EOGOmERYIhGpxyUAJxHSz/xlC+1FxE64qB1yj1ZID7oXsel+63ovnj2JXUXue+hvrcLugL+EdG+9XBG8X+Kl34J3YM1g/egvIvdx5EK691RIz78YEXdnQrst6m6JqemXmNo+D/WJNAyVePZWWL0WdlfB+l+UAQQReaAc65DB/wGsZgzLN0IQWAAAAABJRU5ErkJggg==";
var Header_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$j = {
  props: {
    icons: {
      type: Object,
      default: function() {
        return {
          close: {
            img: CloseIcon$1,
            name: "default"
          }
        };
      }
    },
    title: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      inUserList: false
    };
  },
  computed: {
    ...mapState(["disableUserListToggle", "titleImageUrl", "showCloseButton"])
  },
  methods: {
    toggleUserList() {
      this.inUserList = !this.inUserList;
      this.$emit("userList", this.inUserList);
    }
  }
};
const _hoisted_1$j = ["src"];
const _hoisted_2$b = {
  key: 2,
  class: "sc-header--title"
};
const _hoisted_3$9 = ["src", "alt"];
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "sc-header",
    style: normalizeStyle({ background: $props.colors.header.bg, color: $props.colors.header.text })
  }, [
    _ctx.titleImageUrl ? (openBlock(), createElementBlock("img", {
      key: 0,
      class: "sc-header--img",
      src: _ctx.titleImageUrl,
      alt: ""
    }, null, 8, _hoisted_1$j)) : createCommentVNode("", true),
    !_ctx.disableUserListToggle ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: "sc-header--title enabled",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleUserList && $options.toggleUserList(...args))
    }, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])) : (openBlock(), createElementBlock("div", _hoisted_2$b, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])),
    _ctx.showCloseButton ? (openBlock(), createElementBlock("div", {
      key: 3,
      class: "sc-header--close-button",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close"))
    }, [
      createElementVNode("img", {
        src: $props.icons.close.img,
        alt: $props.icons.close.name
      }, null, 8, _hoisted_3$9)
    ])) : createCommentVNode("", true)
  ], 4);
}
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j], ["__scopeId", "data-v-5d536fce"]]);
var IconBase_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$i = {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};
const _hoisted_1$i = ["width", "height", "aria-labelledby"];
const _hoisted_2$a = ["id"];
const _hoisted_3$8 = ["fill"];
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: $props.width,
    height: $props.height,
    viewBox: "0 0 18 18",
    "aria-labelledby": $props.iconName,
    role: "presentation"
  }, [
    createElementVNode("title", {
      id: $props.iconName,
      lang: "en"
    }, toDisplayString($props.iconName), 9, _hoisted_2$a),
    createElementVNode("g", { fill: $props.iconColor }, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 8, _hoisted_3$8)
  ], 8, _hoisted_1$i);
}
var IconBase = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i], ["__scopeId", "data-v-e63be5a6"]]);
const _sfc_main$h = {};
const _hoisted_1$h = { d: "M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z" };
function _sfc_render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("path", _hoisted_1$h);
}
var IconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
const _sfc_main$g = {};
const _hoisted_1$g = { d: "M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" };
function _sfc_render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("path", _hoisted_1$g);
}
var IconCross = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var escapeGoat = {};
(function(exports) {
  exports.escape = (input) => input.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  exports.unescape = (input) => input.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
  exports.escapeTag = function(input) {
    let output = input[0];
    for (let i = 1; i < arguments.length; i++) {
      output = output + exports.escape(arguments[i]) + input[i];
    }
    return output;
  };
  exports.unescapeTag = function(input) {
    let output = input[0];
    for (let i = 1; i < arguments.length; i++) {
      output = output + exports.unescape(arguments[i]) + input[i];
    }
    return output;
  };
})(escapeGoat);
var Autolinker$1 = { exports: {} };
/*!
 * Autolinker.js
 * 1.8.3
 *
 * Copyright(c) 2018 Gregory Jacobs <greg@greg-jacobs.com>
 * MIT License
 *
 * https://github.com/gregjacobs/Autolinker.js
 */
(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var Autolinker2 = function(cfg) {
      cfg = cfg || {};
      this.version = Autolinker2.version;
      this.urls = this.normalizeUrlsCfg(cfg.urls);
      this.email = typeof cfg.email === "boolean" ? cfg.email : true;
      this.phone = typeof cfg.phone === "boolean" ? cfg.phone : true;
      this.hashtag = cfg.hashtag || false;
      this.mention = cfg.mention || false;
      this.newWindow = typeof cfg.newWindow === "boolean" ? cfg.newWindow : true;
      this.stripPrefix = this.normalizeStripPrefixCfg(cfg.stripPrefix);
      this.stripTrailingSlash = typeof cfg.stripTrailingSlash === "boolean" ? cfg.stripTrailingSlash : true;
      this.decodePercentEncoding = typeof cfg.decodePercentEncoding === "boolean" ? cfg.decodePercentEncoding : true;
      var mention = this.mention;
      if (mention !== false && mention !== "twitter" && mention !== "instagram" && mention !== "soundcloud") {
        throw new Error("invalid `mention` cfg - see docs");
      }
      var hashtag = this.hashtag;
      if (hashtag !== false && hashtag !== "twitter" && hashtag !== "facebook" && hashtag !== "instagram") {
        throw new Error("invalid `hashtag` cfg - see docs");
      }
      this.truncate = this.normalizeTruncateCfg(cfg.truncate);
      this.className = cfg.className || "";
      this.replaceFn = cfg.replaceFn || null;
      this.context = cfg.context || this;
      this.htmlParser = null;
      this.matchers = null;
      this.tagBuilder = null;
    };
    Autolinker2.link = function(textOrHtml, options) {
      var autolinker = new Autolinker2(options);
      return autolinker.link(textOrHtml);
    };
    Autolinker2.parse = function(textOrHtml, options) {
      var autolinker = new Autolinker2(options);
      return autolinker.parse(textOrHtml);
    };
    Autolinker2.version = "1.8.3";
    Autolinker2.prototype = {
      constructor: Autolinker2,
      normalizeUrlsCfg: function(urls) {
        if (urls == null)
          urls = true;
        if (typeof urls === "boolean") {
          return { schemeMatches: urls, wwwMatches: urls, tldMatches: urls };
        } else {
          return {
            schemeMatches: typeof urls.schemeMatches === "boolean" ? urls.schemeMatches : true,
            wwwMatches: typeof urls.wwwMatches === "boolean" ? urls.wwwMatches : true,
            tldMatches: typeof urls.tldMatches === "boolean" ? urls.tldMatches : true
          };
        }
      },
      normalizeStripPrefixCfg: function(stripPrefix) {
        if (stripPrefix == null)
          stripPrefix = true;
        if (typeof stripPrefix === "boolean") {
          return { scheme: stripPrefix, www: stripPrefix };
        } else {
          return {
            scheme: typeof stripPrefix.scheme === "boolean" ? stripPrefix.scheme : true,
            www: typeof stripPrefix.www === "boolean" ? stripPrefix.www : true
          };
        }
      },
      normalizeTruncateCfg: function(truncate) {
        if (typeof truncate === "number") {
          return { length: truncate, location: "end" };
        } else {
          return Autolinker2.Util.defaults(truncate || {}, {
            length: Number.POSITIVE_INFINITY,
            location: "end"
          });
        }
      },
      parse: function(textOrHtml) {
        var htmlParser = this.getHtmlParser(), htmlNodes = htmlParser.parse(textOrHtml), anchorTagStackCount = 0, matches = [];
        for (var i = 0, len = htmlNodes.length; i < len; i++) {
          var node = htmlNodes[i], nodeType = node.getType();
          if (nodeType === "element" && ["a", "style", "script"].indexOf(node.getTagName()) !== -1) {
            if (!node.isClosing()) {
              anchorTagStackCount++;
            } else {
              anchorTagStackCount = Math.max(anchorTagStackCount - 1, 0);
            }
          } else if (nodeType === "text" && anchorTagStackCount === 0) {
            var textNodeMatches = this.parseText(node.getText(), node.getOffset());
            matches.push.apply(matches, textNodeMatches);
          }
        }
        matches = this.compactMatches(matches);
        matches = this.removeUnwantedMatches(matches);
        return matches;
      },
      compactMatches: function(matches) {
        matches.sort(function(a, b) {
          return a.getOffset() - b.getOffset();
        });
        for (var i = 0; i < matches.length - 1; i++) {
          var match = matches[i], offset2 = match.getOffset(), matchedTextLength = match.getMatchedText().length, endIdx = offset2 + matchedTextLength;
          if (i + 1 < matches.length) {
            if (matches[i + 1].getOffset() === offset2) {
              var removeIdx = matches[i + 1].getMatchedText().length > matchedTextLength ? i : i + 1;
              matches.splice(removeIdx, 1);
              continue;
            }
            if (matches[i + 1].getOffset() < endIdx) {
              matches.splice(i + 1, 1);
            }
          }
        }
        return matches;
      },
      removeUnwantedMatches: function(matches) {
        var remove = Autolinker2.Util.remove;
        if (!this.hashtag)
          remove(matches, function(match) {
            return match.getType() === "hashtag";
          });
        if (!this.email)
          remove(matches, function(match) {
            return match.getType() === "email";
          });
        if (!this.phone)
          remove(matches, function(match) {
            return match.getType() === "phone";
          });
        if (!this.mention)
          remove(matches, function(match) {
            return match.getType() === "mention";
          });
        if (!this.urls.schemeMatches) {
          remove(matches, function(m) {
            return m.getType() === "url" && m.getUrlMatchType() === "scheme";
          });
        }
        if (!this.urls.wwwMatches) {
          remove(matches, function(m) {
            return m.getType() === "url" && m.getUrlMatchType() === "www";
          });
        }
        if (!this.urls.tldMatches) {
          remove(matches, function(m) {
            return m.getType() === "url" && m.getUrlMatchType() === "tld";
          });
        }
        return matches;
      },
      parseText: function(text, offset2) {
        offset2 = offset2 || 0;
        var matchers = this.getMatchers(), matches = [];
        for (var i = 0, numMatchers = matchers.length; i < numMatchers; i++) {
          var textMatches = matchers[i].parseMatches(text);
          for (var j = 0, numTextMatches = textMatches.length; j < numTextMatches; j++) {
            textMatches[j].setOffset(offset2 + textMatches[j].getOffset());
          }
          matches.push.apply(matches, textMatches);
        }
        return matches;
      },
      link: function(textOrHtml) {
        if (!textOrHtml) {
          return "";
        }
        var matches = this.parse(textOrHtml), newHtml = [], lastIndex = 0;
        for (var i = 0, len = matches.length; i < len; i++) {
          var match = matches[i];
          newHtml.push(textOrHtml.substring(lastIndex, match.getOffset()));
          newHtml.push(this.createMatchReturnVal(match));
          lastIndex = match.getOffset() + match.getMatchedText().length;
        }
        newHtml.push(textOrHtml.substring(lastIndex));
        return newHtml.join("");
      },
      createMatchReturnVal: function(match) {
        var replaceFnResult;
        if (this.replaceFn) {
          replaceFnResult = this.replaceFn.call(this.context, match);
        }
        if (typeof replaceFnResult === "string") {
          return replaceFnResult;
        } else if (replaceFnResult === false) {
          return match.getMatchedText();
        } else if (replaceFnResult instanceof Autolinker2.HtmlTag) {
          return replaceFnResult.toAnchorString();
        } else {
          var anchorTag = match.buildTag();
          return anchorTag.toAnchorString();
        }
      },
      getHtmlParser: function() {
        var htmlParser = this.htmlParser;
        if (!htmlParser) {
          htmlParser = this.htmlParser = new Autolinker2.htmlParser.HtmlParser();
        }
        return htmlParser;
      },
      getMatchers: function() {
        if (!this.matchers) {
          var matchersNs = Autolinker2.matcher, tagBuilder = this.getTagBuilder();
          var matchers = [
            new matchersNs.Hashtag({ tagBuilder, serviceName: this.hashtag }),
            new matchersNs.Email({ tagBuilder }),
            new matchersNs.Phone({ tagBuilder }),
            new matchersNs.Mention({ tagBuilder, serviceName: this.mention }),
            new matchersNs.Url({ tagBuilder, stripPrefix: this.stripPrefix, stripTrailingSlash: this.stripTrailingSlash, decodePercentEncoding: this.decodePercentEncoding })
          ];
          return this.matchers = matchers;
        } else {
          return this.matchers;
        }
      },
      getTagBuilder: function() {
        var tagBuilder = this.tagBuilder;
        if (!tagBuilder) {
          tagBuilder = this.tagBuilder = new Autolinker2.AnchorTagBuilder({
            newWindow: this.newWindow,
            truncate: this.truncate,
            className: this.className
          });
        }
        return tagBuilder;
      }
    };
    Autolinker2.match = {};
    Autolinker2.matcher = {};
    Autolinker2.htmlParser = {};
    Autolinker2.truncate = {};
    Autolinker2.Util = {
      abstractMethod: function() {
        throw "abstract";
      },
      trimRegex: /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      assign: function(dest, src) {
        for (var prop in src) {
          if (src.hasOwnProperty(prop)) {
            dest[prop] = src[prop];
          }
        }
        return dest;
      },
      defaults: function(dest, src) {
        for (var prop in src) {
          if (src.hasOwnProperty(prop) && dest[prop] === void 0) {
            dest[prop] = src[prop];
          }
        }
        return dest;
      },
      extend: function(superclass, protoProps) {
        var superclassProto = superclass.prototype;
        var F = function() {
        };
        F.prototype = superclassProto;
        var subclass;
        if (protoProps.hasOwnProperty("constructor")) {
          subclass = protoProps.constructor;
        } else {
          subclass = function() {
            superclassProto.constructor.apply(this, arguments);
          };
        }
        var subclassProto = subclass.prototype = new F();
        subclassProto.constructor = subclass;
        subclassProto.superclass = superclassProto;
        delete protoProps.constructor;
        Autolinker2.Util.assign(subclassProto, protoProps);
        return subclass;
      },
      ellipsis: function(str, truncateLen, ellipsisChars) {
        var ellipsisLength;
        if (str.length > truncateLen) {
          if (ellipsisChars == null) {
            ellipsisChars = "&hellip;";
            ellipsisLength = 3;
          } else {
            ellipsisLength = ellipsisChars.length;
          }
          str = str.substring(0, truncateLen - ellipsisLength) + ellipsisChars;
        }
        return str;
      },
      indexOf: function(arr, element) {
        if (Array.prototype.indexOf) {
          return arr.indexOf(element);
        } else {
          for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === element)
              return i;
          }
          return -1;
        }
      },
      remove: function(arr, fn2) {
        for (var i = arr.length - 1; i >= 0; i--) {
          if (fn2(arr[i]) === true) {
            arr.splice(i, 1);
          }
        }
      },
      splitAndCapture: function(str, splitRegex) {
        if (!splitRegex.global)
          throw new Error("`splitRegex` must have the 'g' flag set");
        var result = [], lastIdx = 0, match;
        while (match = splitRegex.exec(str)) {
          result.push(str.substring(lastIdx, match.index));
          result.push(match[0]);
          lastIdx = match.index + match[0].length;
        }
        result.push(str.substring(lastIdx));
        return result;
      },
      trim: function(str) {
        return str.replace(this.trimRegex, "");
      }
    };
    Autolinker2.HtmlTag = Autolinker2.Util.extend(Object, {
      whitespaceRegex: /\s+/,
      constructor: function(cfg) {
        Autolinker2.Util.assign(this, cfg);
        this.innerHtml = this.innerHtml || this.innerHTML;
      },
      setTagName: function(tagName) {
        this.tagName = tagName;
        return this;
      },
      getTagName: function() {
        return this.tagName || "";
      },
      setAttr: function(attrName, attrValue) {
        var tagAttrs = this.getAttrs();
        tagAttrs[attrName] = attrValue;
        return this;
      },
      getAttr: function(attrName) {
        return this.getAttrs()[attrName];
      },
      setAttrs: function(attrs) {
        var tagAttrs = this.getAttrs();
        Autolinker2.Util.assign(tagAttrs, attrs);
        return this;
      },
      getAttrs: function() {
        return this.attrs || (this.attrs = {});
      },
      setClass: function(cssClass) {
        return this.setAttr("class", cssClass);
      },
      addClass: function(cssClass) {
        var classAttr = this.getClass(), whitespaceRegex = this.whitespaceRegex, indexOf = Autolinker2.Util.indexOf, classes = !classAttr ? [] : classAttr.split(whitespaceRegex), newClasses = cssClass.split(whitespaceRegex), newClass;
        while (newClass = newClasses.shift()) {
          if (indexOf(classes, newClass) === -1) {
            classes.push(newClass);
          }
        }
        this.getAttrs()["class"] = classes.join(" ");
        return this;
      },
      removeClass: function(cssClass) {
        var classAttr = this.getClass(), whitespaceRegex = this.whitespaceRegex, indexOf = Autolinker2.Util.indexOf, classes = !classAttr ? [] : classAttr.split(whitespaceRegex), removeClasses = cssClass.split(whitespaceRegex), removeClass;
        while (classes.length && (removeClass = removeClasses.shift())) {
          var idx = indexOf(classes, removeClass);
          if (idx !== -1) {
            classes.splice(idx, 1);
          }
        }
        this.getAttrs()["class"] = classes.join(" ");
        return this;
      },
      getClass: function() {
        return this.getAttrs()["class"] || "";
      },
      hasClass: function(cssClass) {
        return (" " + this.getClass() + " ").indexOf(" " + cssClass + " ") !== -1;
      },
      setInnerHtml: function(html) {
        this.innerHtml = html;
        return this;
      },
      getInnerHtml: function() {
        return this.innerHtml || "";
      },
      toAnchorString: function() {
        var tagName = this.getTagName(), attrsStr = this.buildAttrsStr();
        attrsStr = attrsStr ? " " + attrsStr : "";
        return ["<", tagName, attrsStr, ">", this.getInnerHtml(), "</", tagName, ">"].join("");
      },
      buildAttrsStr: function() {
        if (!this.attrs)
          return "";
        var attrs = this.getAttrs(), attrsArr = [];
        for (var prop in attrs) {
          if (attrs.hasOwnProperty(prop)) {
            attrsArr.push(prop + '="' + attrs[prop] + '"');
          }
        }
        return attrsArr.join(" ");
      }
    });
    Autolinker2.RegexLib = function() {
      var alphaCharsStr = "A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
      var decimalNumbersStr = "0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19";
      var alphaNumericCharsStr = alphaCharsStr + decimalNumbersStr;
      var ipStr = "(?:[" + decimalNumbersStr + "]{1,3}\\.){3}[" + decimalNumbersStr + "]{1,3}";
      var domainLabelStr = "[" + alphaNumericCharsStr + "](?:[" + alphaNumericCharsStr + "\\-]{0,61}[" + alphaNumericCharsStr + "])?";
      var getDomainLabelStr = function(group) {
        return "(?=(" + domainLabelStr + "))\\" + group;
      };
      var getDomainNameStr = function(group) {
        return "(?:" + getDomainLabelStr(group) + "(?:\\." + getDomainLabelStr(group + 1) + "){0,126}|" + ipStr + ")";
      };
      return {
        alphaNumericCharsStr,
        alphaCharsStr,
        getDomainNameStr
      };
    }();
    Autolinker2.AnchorTagBuilder = Autolinker2.Util.extend(Object, {
      constructor: function(cfg) {
        cfg = cfg || {};
        this.newWindow = cfg.newWindow;
        this.truncate = cfg.truncate;
        this.className = cfg.className;
      },
      build: function(match) {
        return new Autolinker2.HtmlTag({
          tagName: "a",
          attrs: this.createAttrs(match),
          innerHtml: this.processAnchorText(match.getAnchorText())
        });
      },
      createAttrs: function(match) {
        var attrs = {
          "href": match.getAnchorHref()
        };
        var cssClass = this.createCssClass(match);
        if (cssClass) {
          attrs["class"] = cssClass;
        }
        if (this.newWindow) {
          attrs["target"] = "_blank";
          attrs["rel"] = "noopener noreferrer";
        }
        if (this.truncate) {
          if (this.truncate.length && this.truncate.length < match.getAnchorText().length) {
            attrs["title"] = match.getAnchorHref();
          }
        }
        return attrs;
      },
      createCssClass: function(match) {
        var className = this.className;
        if (!className) {
          return "";
        } else {
          var returnClasses = [className], cssClassSuffixes = match.getCssClassSuffixes();
          for (var i = 0, len = cssClassSuffixes.length; i < len; i++) {
            returnClasses.push(className + "-" + cssClassSuffixes[i]);
          }
          return returnClasses.join(" ");
        }
      },
      processAnchorText: function(anchorText) {
        anchorText = this.doTruncate(anchorText);
        return anchorText;
      },
      doTruncate: function(anchorText) {
        var truncate = this.truncate;
        if (!truncate || !truncate.length)
          return anchorText;
        var truncateLength = truncate.length, truncateLocation = truncate.location;
        if (truncateLocation === "smart") {
          return Autolinker2.truncate.TruncateSmart(anchorText, truncateLength);
        } else if (truncateLocation === "middle") {
          return Autolinker2.truncate.TruncateMiddle(anchorText, truncateLength);
        } else {
          return Autolinker2.truncate.TruncateEnd(anchorText, truncateLength);
        }
      }
    });
    Autolinker2.htmlParser.HtmlParser = Autolinker2.Util.extend(Object, {
      htmlRegex: function() {
        var commentTagRegex = /!--([\s\S]+?)--/, tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/, attrNameRegex = /[^\s"'>\/=\x00-\x1F\x7F]+/, attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, optionalAttrValueRegex = "(?:\\s*?=\\s*?" + attrValueRegex.source + ")?";
        var getNameEqualsValueRegex = function(group) {
          return "(?=(" + attrNameRegex.source + "))\\" + group + optionalAttrValueRegex;
        };
        return new RegExp([
          "(?:",
          "<(!DOCTYPE)",
          "(?:",
          "\\s+",
          "(?:",
          getNameEqualsValueRegex(2),
          "|",
          attrValueRegex.source + ")",
          ")*",
          ">",
          ")",
          "|",
          "(?:",
          "<(/)?",
          "(?:",
          commentTagRegex.source,
          "|",
          "(?:",
          "(" + tagNameRegex.source + ")",
          "\\s*/?",
          ")",
          "|",
          "(?:",
          "(" + tagNameRegex.source + ")",
          "\\s+",
          "(?:",
          "(?:\\s+|\\b)",
          getNameEqualsValueRegex(7),
          ")*",
          "\\s*/?",
          ")",
          ")",
          ">",
          ")"
        ].join(""), "gi");
      }(),
      htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
      parse: function(html) {
        var htmlRegex = this.htmlRegex, currentResult, lastIndex = 0, textAndEntityNodes, nodes = [];
        while ((currentResult = htmlRegex.exec(html)) !== null) {
          var tagText = currentResult[0], commentText = currentResult[4], tagName = currentResult[1] || currentResult[5] || currentResult[6], isClosingTag = !!currentResult[3], offset2 = currentResult.index, inBetweenTagsText = html.substring(lastIndex, offset2);
          if (inBetweenTagsText) {
            textAndEntityNodes = this.parseTextAndEntityNodes(lastIndex, inBetweenTagsText);
            nodes.push.apply(nodes, textAndEntityNodes);
          }
          if (commentText) {
            nodes.push(this.createCommentNode(offset2, tagText, commentText));
          } else {
            nodes.push(this.createElementNode(offset2, tagText, tagName, isClosingTag));
          }
          lastIndex = offset2 + tagText.length;
        }
        if (lastIndex < html.length) {
          var text = html.substring(lastIndex);
          if (text) {
            textAndEntityNodes = this.parseTextAndEntityNodes(lastIndex, text);
            textAndEntityNodes.forEach(function(node) {
              nodes.push(node);
            });
          }
        }
        return nodes;
      },
      parseTextAndEntityNodes: function(offset2, text) {
        var nodes = [], textAndEntityTokens = Autolinker2.Util.splitAndCapture(text, this.htmlCharacterEntitiesRegex);
        for (var i = 0, len = textAndEntityTokens.length; i < len; i += 2) {
          var textToken = textAndEntityTokens[i], entityToken = textAndEntityTokens[i + 1];
          if (textToken) {
            nodes.push(this.createTextNode(offset2, textToken));
            offset2 += textToken.length;
          }
          if (entityToken) {
            nodes.push(this.createEntityNode(offset2, entityToken));
            offset2 += entityToken.length;
          }
        }
        return nodes;
      },
      createCommentNode: function(offset2, tagText, commentText) {
        return new Autolinker2.htmlParser.CommentNode({
          offset: offset2,
          text: tagText,
          comment: Autolinker2.Util.trim(commentText)
        });
      },
      createElementNode: function(offset2, tagText, tagName, isClosingTag) {
        return new Autolinker2.htmlParser.ElementNode({
          offset: offset2,
          text: tagText,
          tagName: tagName.toLowerCase(),
          closing: isClosingTag
        });
      },
      createEntityNode: function(offset2, text) {
        return new Autolinker2.htmlParser.EntityNode({ offset: offset2, text });
      },
      createTextNode: function(offset2, text) {
        return new Autolinker2.htmlParser.TextNode({ offset: offset2, text });
      }
    });
    Autolinker2.htmlParser.HtmlNode = Autolinker2.Util.extend(Object, {
      offset: void 0,
      text: void 0,
      constructor: function(cfg) {
        Autolinker2.Util.assign(this, cfg);
        if (this.offset == null)
          throw new Error("`offset` cfg required");
        if (this.text == null)
          throw new Error("`text` cfg required");
      },
      getType: Autolinker2.Util.abstractMethod,
      getOffset: function() {
        return this.offset;
      },
      getText: function() {
        return this.text;
      }
    });
    Autolinker2.htmlParser.CommentNode = Autolinker2.Util.extend(Autolinker2.htmlParser.HtmlNode, {
      comment: "",
      getType: function() {
        return "comment";
      },
      getComment: function() {
        return this.comment;
      }
    });
    Autolinker2.htmlParser.ElementNode = Autolinker2.Util.extend(Autolinker2.htmlParser.HtmlNode, {
      tagName: "",
      closing: false,
      getType: function() {
        return "element";
      },
      getTagName: function() {
        return this.tagName;
      },
      isClosing: function() {
        return this.closing;
      }
    });
    Autolinker2.htmlParser.EntityNode = Autolinker2.Util.extend(Autolinker2.htmlParser.HtmlNode, {
      getType: function() {
        return "entity";
      }
    });
    Autolinker2.htmlParser.TextNode = Autolinker2.Util.extend(Autolinker2.htmlParser.HtmlNode, {
      getType: function() {
        return "text";
      }
    });
    Autolinker2.match.Match = Autolinker2.Util.extend(Object, {
      constructor: function(cfg) {
        if (cfg.tagBuilder == null)
          throw new Error("`tagBuilder` cfg required");
        if (cfg.matchedText == null)
          throw new Error("`matchedText` cfg required");
        if (cfg.offset == null)
          throw new Error("`offset` cfg required");
        this.tagBuilder = cfg.tagBuilder;
        this.matchedText = cfg.matchedText;
        this.offset = cfg.offset;
      },
      getType: Autolinker2.Util.abstractMethod,
      getMatchedText: function() {
        return this.matchedText;
      },
      setOffset: function(offset2) {
        this.offset = offset2;
      },
      getOffset: function() {
        return this.offset;
      },
      getAnchorHref: Autolinker2.Util.abstractMethod,
      getAnchorText: Autolinker2.Util.abstractMethod,
      getCssClassSuffixes: function() {
        return [this.getType()];
      },
      buildTag: function() {
        return this.tagBuilder.build(this);
      }
    });
    Autolinker2.match.Email = Autolinker2.Util.extend(Autolinker2.match.Match, {
      constructor: function(cfg) {
        Autolinker2.match.Match.prototype.constructor.call(this, cfg);
        if (!cfg.email)
          throw new Error("`email` cfg required");
        this.email = cfg.email;
      },
      getType: function() {
        return "email";
      },
      getEmail: function() {
        return this.email;
      },
      getAnchorHref: function() {
        return "mailto:" + this.email;
      },
      getAnchorText: function() {
        return this.email;
      }
    });
    Autolinker2.match.Hashtag = Autolinker2.Util.extend(Autolinker2.match.Match, {
      constructor: function(cfg) {
        Autolinker2.match.Match.prototype.constructor.call(this, cfg);
        if (!cfg.hashtag)
          throw new Error("`hashtag` cfg required");
        this.serviceName = cfg.serviceName;
        this.hashtag = cfg.hashtag;
      },
      getType: function() {
        return "hashtag";
      },
      getServiceName: function() {
        return this.serviceName;
      },
      getHashtag: function() {
        return this.hashtag;
      },
      getAnchorHref: function() {
        var serviceName = this.serviceName, hashtag = this.hashtag;
        switch (serviceName) {
          case "twitter":
            return "https://twitter.com/hashtag/" + hashtag;
          case "facebook":
            return "https://www.facebook.com/hashtag/" + hashtag;
          case "instagram":
            return "https://instagram.com/explore/tags/" + hashtag;
          default:
            throw new Error("Unknown service name to point hashtag to: ", serviceName);
        }
      },
      getAnchorText: function() {
        return "#" + this.hashtag;
      }
    });
    Autolinker2.match.Phone = Autolinker2.Util.extend(Autolinker2.match.Match, {
      constructor: function(cfg) {
        Autolinker2.match.Match.prototype.constructor.call(this, cfg);
        if (!cfg.number)
          throw new Error("`number` cfg required");
        if (cfg.plusSign == null)
          throw new Error("`plusSign` cfg required");
        this.number = cfg.number;
        this.plusSign = cfg.plusSign;
      },
      getType: function() {
        return "phone";
      },
      getNumber: function() {
        return this.number;
      },
      getAnchorHref: function() {
        return "tel:" + (this.plusSign ? "+" : "") + this.number;
      },
      getAnchorText: function() {
        return this.matchedText;
      }
    });
    Autolinker2.match.Mention = Autolinker2.Util.extend(Autolinker2.match.Match, {
      constructor: function(cfg) {
        Autolinker2.match.Match.prototype.constructor.call(this, cfg);
        if (!cfg.serviceName)
          throw new Error("`serviceName` cfg required");
        if (!cfg.mention)
          throw new Error("`mention` cfg required");
        this.mention = cfg.mention;
        this.serviceName = cfg.serviceName;
      },
      getType: function() {
        return "mention";
      },
      getMention: function() {
        return this.mention;
      },
      getServiceName: function() {
        return this.serviceName;
      },
      getAnchorHref: function() {
        switch (this.serviceName) {
          case "twitter":
            return "https://twitter.com/" + this.mention;
          case "instagram":
            return "https://instagram.com/" + this.mention;
          case "soundcloud":
            return "https://soundcloud.com/" + this.mention;
          default:
            throw new Error("Unknown service name to point mention to: ", this.serviceName);
        }
      },
      getAnchorText: function() {
        return "@" + this.mention;
      },
      getCssClassSuffixes: function() {
        var cssClassSuffixes = Autolinker2.match.Match.prototype.getCssClassSuffixes.call(this), serviceName = this.getServiceName();
        if (serviceName) {
          cssClassSuffixes.push(serviceName);
        }
        return cssClassSuffixes;
      }
    });
    Autolinker2.match.Url = Autolinker2.Util.extend(Autolinker2.match.Match, {
      constructor: function(cfg) {
        Autolinker2.match.Match.prototype.constructor.call(this, cfg);
        if (cfg.urlMatchType !== "scheme" && cfg.urlMatchType !== "www" && cfg.urlMatchType !== "tld")
          throw new Error('`urlMatchType` cfg must be one of: "scheme", "www", or "tld"');
        if (!cfg.url)
          throw new Error("`url` cfg required");
        if (cfg.protocolUrlMatch == null)
          throw new Error("`protocolUrlMatch` cfg required");
        if (cfg.protocolRelativeMatch == null)
          throw new Error("`protocolRelativeMatch` cfg required");
        if (cfg.stripPrefix == null)
          throw new Error("`stripPrefix` cfg required");
        if (cfg.stripTrailingSlash == null)
          throw new Error("`stripTrailingSlash` cfg required");
        if (cfg.decodePercentEncoding == null)
          throw new Error("`decodePercentEncoding` cfg required");
        this.urlMatchType = cfg.urlMatchType;
        this.url = cfg.url;
        this.protocolUrlMatch = cfg.protocolUrlMatch;
        this.protocolRelativeMatch = cfg.protocolRelativeMatch;
        this.stripPrefix = cfg.stripPrefix;
        this.stripTrailingSlash = cfg.stripTrailingSlash;
        this.decodePercentEncoding = cfg.decodePercentEncoding;
      },
      schemePrefixRegex: /^(https?:\/\/)?/i,
      wwwPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
      protocolRelativeRegex: /^\/\//,
      protocolPrepended: false,
      getType: function() {
        return "url";
      },
      getUrlMatchType: function() {
        return this.urlMatchType;
      },
      getUrl: function() {
        var url = this.url;
        if (!this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended) {
          url = this.url = "http://" + url;
          this.protocolPrepended = true;
        }
        return url;
      },
      getAnchorHref: function() {
        var url = this.getUrl();
        return url.replace(/&amp;/g, "&");
      },
      getAnchorText: function() {
        var anchorText = this.getMatchedText();
        if (this.protocolRelativeMatch) {
          anchorText = this.stripProtocolRelativePrefix(anchorText);
        }
        if (this.stripPrefix.scheme) {
          anchorText = this.stripSchemePrefix(anchorText);
        }
        if (this.stripPrefix.www) {
          anchorText = this.stripWwwPrefix(anchorText);
        }
        if (this.stripTrailingSlash) {
          anchorText = this.removeTrailingSlash(anchorText);
        }
        if (this.decodePercentEncoding) {
          anchorText = this.removePercentEncoding(anchorText);
        }
        return anchorText;
      },
      stripSchemePrefix: function(url) {
        return url.replace(this.schemePrefixRegex, "");
      },
      stripWwwPrefix: function(url) {
        return url.replace(this.wwwPrefixRegex, "$1");
      },
      stripProtocolRelativePrefix: function(text) {
        return text.replace(this.protocolRelativeRegex, "");
      },
      removeTrailingSlash: function(anchorText) {
        if (anchorText.charAt(anchorText.length - 1) === "/") {
          anchorText = anchorText.slice(0, -1);
        }
        return anchorText;
      },
      removePercentEncoding: function(anchorText) {
        try {
          return decodeURIComponent(
            anchorText.replace(/%22/gi, "&quot;").replace(/%26/gi, "&amp;").replace(/%27/gi, "&#39;").replace(/%3C/gi, "&lt;").replace(/%3E/gi, "&gt;")
          );
        } catch (e) {
          return anchorText;
        }
      }
    });
    Autolinker2.tldRegex = /(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|vermögensberatung|xn--3oq18vl8pn36a|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|vermögensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbc0a9azcg|xn--nqv7fs00ema|afamilycompany|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|international|lifeinsurance|orientexpress|spreadbetting|travelchannel|wolterskluwer|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|pamperedchef|scholarships|versicherung|xn--3e0b707e|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|rightathome|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--3bst00m|xn--3ds443g|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--pbt977c|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|சிங்கப்பூர்|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nationwide|newholland|nextdirect|onyourside|properties|protection|prudential|realestate|republican|restaurant|schaeffler|swiftcover|tatamotors|technology|telefonica|university|vistaprint|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|fujixerox|furniture|goldpoint|goodhands|hisamitsu|homedepot|homegoods|homesense|honeywell|institute|insurance|kuokgroup|ladbrokes|lancaster|landrover|lifestyle|marketing|marshalls|mcdonalds|melbourne|microsoft|montblanc|panasonic|passagens|pramerica|richardli|scjohnson|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--nqv7f|xn--p1acf|xn--tckwe|xn--vhquv|yodobashi|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|budapest|builders|business|capetown|catering|catholic|chrysler|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|esurance|everbank|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|mortgage|movistar|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|symantec|telecity|training|uconnect|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|السعودية|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|cartier|channel|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|iselect|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lancome|lanxess|lasalle|latrobe|leclerc|liaison|limited|lincoln|markets|metlife|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|panerai|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|shriram|singles|spiegel|staples|starhub|statoil|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|католик|الجزائر|العليان|پاکستان|كاثوليك|موبايلي|இந்தியா|abarth|abbott|abbvie|active|africa|agency|airbus|airtel|alipay|alsace|alstom|anquan|aramco|author|bayern|beauty|berlin|bharti|blanco|bostik|boston|broker|camera|career|caseih|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|mobily|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|piaget|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|warman|webcam|xihuan|xperia|yachts|yandex|zappos|москва|онлайн|ابوظبي|ارامكو|الاردن|المغرب|امارات|فلسطين|مليسيا|இலங்கை|ファッション|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|boots|bosch|build|canon|cards|chase|cheap|chloe|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|dodge|drive|dubai|earth|edeka|email|epost|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glade|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|intel|irish|iveco|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|lixil|loans|locus|lotte|lotto|lupin|macys|mango|media|miami|money|mopar|movie|nadex|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vista|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|zippo|ایران|بازار|بھارت|سودان|سورية|همراه|संगठन|বাংলা|భారత్|嘉里大酒店|aarp|able|adac|aero|aigo|akdn|ally|amex|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|doha|duck|duns|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|mtpc|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|raid|read|reit|rent|rest|rich|rmit|room|rsvp|ruhr|safe|sale|sapo|sarl|save|saxo|scor|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|дети|сайт|بيتك|تونس|شبكة|عراق|عمان|موقع|भारत|ভারত|ਭਾਰਤ|ભારત|ලංකා|グーグル|クラウド|ポイント|大众汽车|组织机构|電訊盈科|香格里拉|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bnl|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceb|ceo|cfa|cfd|com|crs|csc|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|htc|ibm|ice|icu|ifm|ing|ink|int|ist|itv|iwc|jcb|jcp|jio|jlc|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|lol|lpl|ltd|man|mba|mcd|med|men|meo|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|off|one|ong|onl|ooo|org|ott|ovh|pay|pet|pid|pin|pnc|pro|pru|pub|pwc|qvc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|srl|srt|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|бел|ком|қаз|мкд|мон|орг|рус|срб|укр|հայ|קום|قطر|كوم|مصر|कॉम|नेट|คอม|ไทย|ストア|セール|みんな|中文网|天主教|我爱你|新加坡|淡马锡|诺基亚|飞利浦|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|бг|ею|рф|გე|닷넷|닷컴|삼성|한국|コム|世界|中信|中国|中國|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|在线|大拿|娱乐|家電|工行|广东|微博|慈善|手机|手表|政务|政府|新闻|时尚|書籍|机构|游戏|澳門|点看|珠宝|移动|网址|网店|网站|网络|联通|谷歌|购物|通販|集团|食品|餐厅|香港)/;
    Autolinker2.matcher.Matcher = Autolinker2.Util.extend(Object, {
      constructor: function(cfg) {
        if (!cfg.tagBuilder)
          throw new Error("`tagBuilder` cfg required");
        this.tagBuilder = cfg.tagBuilder;
      },
      parseMatches: Autolinker2.Util.abstractMethod
    });
    Autolinker2.matcher.Email = Autolinker2.Util.extend(Autolinker2.matcher.Matcher, {
      matcherRegex: function() {
        var alphaNumericChars = Autolinker2.RegexLib.alphaNumericCharsStr, specialCharacters = "!#$%&'*+\\-\\/=?^_`{|}~", restrictedSpecialCharacters = '\\s"(),:;<>@\\[\\]', validCharacters = alphaNumericChars + specialCharacters, validRestrictedCharacters = validCharacters + restrictedSpecialCharacters, emailRegex = new RegExp("(?:[" + validCharacters + "](?:[" + validCharacters + ']|\\.(?!\\.|@))*|\\"[' + validRestrictedCharacters + '.]+\\")@'), getDomainNameStr = Autolinker2.RegexLib.getDomainNameStr, tldRegex = Autolinker2.tldRegex;
        return new RegExp([
          emailRegex.source,
          getDomainNameStr(1),
          "\\.",
          tldRegex.source
        ].join(""), "gi");
      }(),
      parseMatches: function(text) {
        var matcherRegex = this.matcherRegex, tagBuilder = this.tagBuilder, matches = [], match;
        while ((match = matcherRegex.exec(text)) !== null) {
          var matchedText = match[0];
          matches.push(new Autolinker2.match.Email({
            tagBuilder,
            matchedText,
            offset: match.index,
            email: matchedText
          }));
        }
        return matches;
      }
    });
    Autolinker2.matcher.Hashtag = Autolinker2.Util.extend(Autolinker2.matcher.Matcher, {
      matcherRegex: new RegExp("#[_" + Autolinker2.RegexLib.alphaNumericCharsStr + "]{1,139}", "g"),
      nonWordCharRegex: new RegExp("[^" + Autolinker2.RegexLib.alphaNumericCharsStr + "]"),
      constructor: function(cfg) {
        Autolinker2.matcher.Matcher.prototype.constructor.call(this, cfg);
        this.serviceName = cfg.serviceName;
      },
      parseMatches: function(text) {
        var matcherRegex = this.matcherRegex, nonWordCharRegex = this.nonWordCharRegex, serviceName = this.serviceName, tagBuilder = this.tagBuilder, matches = [], match;
        while ((match = matcherRegex.exec(text)) !== null) {
          var offset2 = match.index, prevChar = text.charAt(offset2 - 1);
          if (offset2 === 0 || nonWordCharRegex.test(prevChar)) {
            var matchedText = match[0], hashtag = match[0].slice(1);
            matches.push(new Autolinker2.match.Hashtag({
              tagBuilder,
              matchedText,
              offset: offset2,
              serviceName,
              hashtag
            }));
          }
        }
        return matches;
      }
    });
    Autolinker2.matcher.Phone = Autolinker2.Util.extend(Autolinker2.matcher.Matcher, {
      matcherRegex: /(?:(?:(?:(\+)?\d{1,3}[-\040.]?)?\(?\d{3}\)?[-\040.]?\d{3}[-\040.]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-\040.]?(?:\d[-\040.]?){6,12}\d+))([,;]+[0-9]+#?)*/g,
      parseMatches: function(text) {
        var matcherRegex = this.matcherRegex, tagBuilder = this.tagBuilder, matches = [], match;
        while ((match = matcherRegex.exec(text)) !== null) {
          var matchedText = match[0], cleanNumber = matchedText.replace(/[^0-9,;#]/g, ""), plusSign = !!(match[1] || match[2]), before = match.index == 0 ? "" : text.substr(match.index - 1, 1), after = text.substr(match.index + matchedText.length, 1), contextClear = !before.match(/\d/) && !after.match(/\d/);
          if (this.testMatch(match[3]) && this.testMatch(matchedText) && contextClear) {
            matches.push(new Autolinker2.match.Phone({
              tagBuilder,
              matchedText,
              offset: match.index,
              number: cleanNumber,
              plusSign
            }));
          }
        }
        return matches;
      },
      testMatch: function(text) {
        return /\D/.test(text);
      }
    });
    Autolinker2.matcher.Mention = Autolinker2.Util.extend(Autolinker2.matcher.Matcher, {
      matcherRegexes: {
        "twitter": new RegExp("@[_" + Autolinker2.RegexLib.alphaNumericCharsStr + "]{1,20}", "g"),
        "instagram": new RegExp("@[_." + Autolinker2.RegexLib.alphaNumericCharsStr + "]{1,50}", "g"),
        "soundcloud": new RegExp("@[_." + Autolinker2.RegexLib.alphaNumericCharsStr + "-]{1,50}", "g")
      },
      nonWordCharRegex: new RegExp("[^" + Autolinker2.RegexLib.alphaNumericCharsStr + "]"),
      constructor: function(cfg) {
        Autolinker2.matcher.Matcher.prototype.constructor.call(this, cfg);
        this.serviceName = cfg.serviceName;
      },
      parseMatches: function(text) {
        var matcherRegex = this.matcherRegexes[this.serviceName], nonWordCharRegex = this.nonWordCharRegex, serviceName = this.serviceName, tagBuilder = this.tagBuilder, matches = [], match;
        if (!matcherRegex) {
          return matches;
        }
        while ((match = matcherRegex.exec(text)) !== null) {
          var offset2 = match.index, prevChar = text.charAt(offset2 - 1);
          if (offset2 === 0 || nonWordCharRegex.test(prevChar)) {
            var matchedText = match[0].replace(/\.+$/g, ""), mention = matchedText.slice(1);
            matches.push(new Autolinker2.match.Mention({
              tagBuilder,
              matchedText,
              offset: offset2,
              serviceName,
              mention
            }));
          }
        }
        return matches;
      }
    });
    Autolinker2.matcher.Url = Autolinker2.Util.extend(Autolinker2.matcher.Matcher, {
      matcherRegex: function() {
        var schemeRegex = /(?:[A-Za-z][-.+A-Za-z0-9]{0,63}:(?![A-Za-z][-.+A-Za-z0-9]{0,63}:\/\/)(?!\d+\/?)(?:\/\/)?)/, wwwRegex = /(?:www\.)/, getDomainNameStr = Autolinker2.RegexLib.getDomainNameStr, tldRegex = Autolinker2.tldRegex, alphaNumericCharsStr = Autolinker2.RegexLib.alphaNumericCharsStr, urlSuffixRegex = new RegExp("[/?#](?:[" + alphaNumericCharsStr + "\\-+&@#/%=~_()|'$*\\[\\]?!:,.;\u2713]*[" + alphaNumericCharsStr + "\\-+&@#/%=~_()|'$*\\[\\]\u2713])?");
        return new RegExp([
          "(?:",
          "(",
          schemeRegex.source,
          getDomainNameStr(2),
          ")",
          "|",
          "(",
          "(//)?",
          wwwRegex.source,
          getDomainNameStr(6),
          ")",
          "|",
          "(",
          "(//)?",
          getDomainNameStr(10) + "\\.",
          tldRegex.source,
          "(?![-" + alphaNumericCharsStr + "])",
          ")",
          ")",
          "(?::[0-9]+)?",
          "(?:" + urlSuffixRegex.source + ")?"
        ].join(""), "gi");
      }(),
      wordCharRegExp: new RegExp("[" + Autolinker2.RegexLib.alphaNumericCharsStr + "]"),
      openParensRe: /\(/g,
      closeParensRe: /\)/g,
      constructor: function(cfg) {
        Autolinker2.matcher.Matcher.prototype.constructor.call(this, cfg);
        if (cfg.stripPrefix == null)
          throw new Error("`stripPrefix` cfg required");
        if (cfg.stripTrailingSlash == null)
          throw new Error("`stripTrailingSlash` cfg required");
        this.stripPrefix = cfg.stripPrefix;
        this.stripTrailingSlash = cfg.stripTrailingSlash;
        this.decodePercentEncoding = cfg.decodePercentEncoding;
      },
      parseMatches: function(text) {
        var matcherRegex = this.matcherRegex, stripPrefix = this.stripPrefix, stripTrailingSlash = this.stripTrailingSlash, decodePercentEncoding = this.decodePercentEncoding, tagBuilder = this.tagBuilder, matches = [], match;
        while ((match = matcherRegex.exec(text)) !== null) {
          var matchStr = match[0], schemeUrlMatch = match[1], wwwUrlMatch = match[4], wwwProtocolRelativeMatch = match[5], tldProtocolRelativeMatch = match[9], offset2 = match.index, protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch, prevChar = text.charAt(offset2 - 1);
          if (!Autolinker2.matcher.UrlMatchValidator.isValid(matchStr, schemeUrlMatch)) {
            continue;
          }
          if (offset2 > 0 && prevChar === "@") {
            continue;
          }
          if (offset2 > 0 && protocolRelativeMatch && this.wordCharRegExp.test(prevChar)) {
            continue;
          }
          if (/\?$/.test(matchStr)) {
            matchStr = matchStr.substr(0, matchStr.length - 1);
          }
          if (this.matchHasUnbalancedClosingParen(matchStr)) {
            matchStr = matchStr.substr(0, matchStr.length - 1);
          } else {
            var pos = this.matchHasInvalidCharAfterTld(matchStr, schemeUrlMatch);
            if (pos > -1) {
              matchStr = matchStr.substr(0, pos);
            }
          }
          var urlMatchType = schemeUrlMatch ? "scheme" : wwwUrlMatch ? "www" : "tld", protocolUrlMatch = !!schemeUrlMatch;
          matches.push(new Autolinker2.match.Url({
            tagBuilder,
            matchedText: matchStr,
            offset: offset2,
            urlMatchType,
            url: matchStr,
            protocolUrlMatch,
            protocolRelativeMatch: !!protocolRelativeMatch,
            stripPrefix,
            stripTrailingSlash,
            decodePercentEncoding
          }));
        }
        return matches;
      },
      matchHasUnbalancedClosingParen: function(matchStr) {
        var lastChar = matchStr.charAt(matchStr.length - 1);
        if (lastChar === ")") {
          var openParensMatch = matchStr.match(this.openParensRe), closeParensMatch = matchStr.match(this.closeParensRe), numOpenParens = openParensMatch && openParensMatch.length || 0, numCloseParens = closeParensMatch && closeParensMatch.length || 0;
          if (numOpenParens < numCloseParens) {
            return true;
          }
        }
        return false;
      },
      matchHasInvalidCharAfterTld: function(urlMatch, schemeUrlMatch) {
        if (!urlMatch) {
          return -1;
        }
        var offset2 = 0;
        if (schemeUrlMatch) {
          offset2 = urlMatch.indexOf(":");
          urlMatch = urlMatch.slice(offset2);
        }
        var alphaNumeric = Autolinker2.RegexLib.alphaNumericCharsStr;
        var re = new RegExp("^((.?//)?[-." + alphaNumeric + "]*[-" + alphaNumeric + "]\\.[-" + alphaNumeric + "]+)");
        var res = re.exec(urlMatch);
        if (res === null) {
          return -1;
        }
        offset2 += res[1].length;
        urlMatch = urlMatch.slice(res[1].length);
        if (/^[^-.A-Za-z0-9:\/?#]/.test(urlMatch)) {
          return offset2;
        }
        return -1;
      }
    });
    Autolinker2.matcher.UrlMatchValidator = {
      hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]*:\/\//,
      uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]*:/,
      hasWordCharAfterProtocolRegex: new RegExp(":[^\\s]*?[" + Autolinker2.RegexLib.alphaCharsStr + "]"),
      ipRegex: /[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?(:[0-9]*)?\/?$/,
      isValid: function(urlMatch, protocolUrlMatch) {
        if (protocolUrlMatch && !this.isValidUriScheme(protocolUrlMatch) || this.urlMatchDoesNotHaveProtocolOrDot(urlMatch, protocolUrlMatch) || this.urlMatchDoesNotHaveAtLeastOneWordChar(urlMatch, protocolUrlMatch) && !this.isValidIpAddress(urlMatch) || this.containsMultipleDots(urlMatch)) {
          return false;
        }
        return true;
      },
      isValidIpAddress: function(uriSchemeMatch) {
        var newRegex = new RegExp(this.hasFullProtocolRegex.source + this.ipRegex.source);
        var uriScheme = uriSchemeMatch.match(newRegex);
        return uriScheme !== null;
      },
      containsMultipleDots: function(urlMatch) {
        var stringBeforeSlash = urlMatch;
        if (this.hasFullProtocolRegex.test(urlMatch)) {
          stringBeforeSlash = urlMatch.split("://")[1];
        }
        return stringBeforeSlash.split("/")[0].indexOf("..") > -1;
      },
      isValidUriScheme: function(uriSchemeMatch) {
        var uriScheme = uriSchemeMatch.match(this.uriSchemeRegex)[0].toLowerCase();
        return uriScheme !== "javascript:" && uriScheme !== "vbscript:";
      },
      urlMatchDoesNotHaveProtocolOrDot: function(urlMatch, protocolUrlMatch) {
        return !!urlMatch && (!protocolUrlMatch || !this.hasFullProtocolRegex.test(protocolUrlMatch)) && urlMatch.indexOf(".") === -1;
      },
      urlMatchDoesNotHaveAtLeastOneWordChar: function(urlMatch, protocolUrlMatch) {
        if (urlMatch && protocolUrlMatch) {
          return !this.hasWordCharAfterProtocolRegex.test(urlMatch);
        } else {
          return false;
        }
      }
    };
    Autolinker2.truncate.TruncateEnd = function(anchorText, truncateLen, ellipsisChars) {
      return Autolinker2.Util.ellipsis(anchorText, truncateLen, ellipsisChars);
    };
    Autolinker2.truncate.TruncateMiddle = function(url, truncateLen, ellipsisChars) {
      if (url.length <= truncateLen) {
        return url;
      }
      var ellipsisLengthBeforeParsing;
      var ellipsisLength;
      if (ellipsisChars == null) {
        ellipsisChars = "&hellip;";
        ellipsisLengthBeforeParsing = 8;
        ellipsisLength = 3;
      } else {
        ellipsisLengthBeforeParsing = ellipsisChars.length;
        ellipsisLength = ellipsisChars.length;
      }
      var availableLength = truncateLen - ellipsisLength;
      var end2 = "";
      if (availableLength > 0) {
        end2 = url.substr(-1 * Math.floor(availableLength / 2));
      }
      return (url.substr(0, Math.ceil(availableLength / 2)) + ellipsisChars + end2).substr(0, availableLength + ellipsisLengthBeforeParsing);
    };
    Autolinker2.truncate.TruncateSmart = function(url, truncateLen, ellipsisChars) {
      var ellipsisLengthBeforeParsing;
      var ellipsisLength;
      if (ellipsisChars == null) {
        ellipsisChars = "&hellip;";
        ellipsisLength = 3;
        ellipsisLengthBeforeParsing = 8;
      } else {
        ellipsisLength = ellipsisChars.length;
        ellipsisLengthBeforeParsing = ellipsisChars.length;
      }
      var parse_url = function(url2) {
        var urlObj2 = {};
        var urlSub = url2;
        var match = urlSub.match(/^([a-z]+):\/\//i);
        if (match) {
          urlObj2.scheme = match[1];
          urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^(.*?)(?=(\?|#|\/|$))/i);
        if (match) {
          urlObj2.host = match[1];
          urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^\/(.*?)(?=(\?|#|$))/i);
        if (match) {
          urlObj2.path = match[1];
          urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^\?(.*?)(?=(#|$))/i);
        if (match) {
          urlObj2.query = match[1];
          urlSub = urlSub.substr(match[0].length);
        }
        match = urlSub.match(/^#(.*?)$/i);
        if (match) {
          urlObj2.fragment = match[1];
        }
        return urlObj2;
      };
      var buildUrl = function(urlObj2) {
        var url2 = "";
        if (urlObj2.scheme && urlObj2.host) {
          url2 += urlObj2.scheme + "://";
        }
        if (urlObj2.host) {
          url2 += urlObj2.host;
        }
        if (urlObj2.path) {
          url2 += "/" + urlObj2.path;
        }
        if (urlObj2.query) {
          url2 += "?" + urlObj2.query;
        }
        if (urlObj2.fragment) {
          url2 += "#" + urlObj2.fragment;
        }
        return url2;
      };
      var buildSegment = function(segment, remainingAvailableLength3) {
        var remainingAvailableLengthHalf = remainingAvailableLength3 / 2, startOffset = Math.ceil(remainingAvailableLengthHalf), endOffset = -1 * Math.floor(remainingAvailableLengthHalf), end3 = "";
        if (endOffset < 0) {
          end3 = segment.substr(endOffset);
        }
        return segment.substr(0, startOffset) + ellipsisChars + end3;
      };
      if (url.length <= truncateLen) {
        return url;
      }
      var availableLength = truncateLen - ellipsisLength;
      var urlObj = parse_url(url);
      if (urlObj.query) {
        var matchQuery = urlObj.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);
        if (matchQuery) {
          urlObj.query = urlObj.query.substr(0, matchQuery[1].length);
          url = buildUrl(urlObj);
        }
      }
      if (url.length <= truncateLen) {
        return url;
      }
      if (urlObj.host) {
        urlObj.host = urlObj.host.replace(/^www\./, "");
        url = buildUrl(urlObj);
      }
      if (url.length <= truncateLen) {
        return url;
      }
      var str = "";
      if (urlObj.host) {
        str += urlObj.host;
      }
      if (str.length >= availableLength) {
        if (urlObj.host.length == truncateLen) {
          return (urlObj.host.substr(0, truncateLen - ellipsisLength) + ellipsisChars).substr(0, availableLength + ellipsisLengthBeforeParsing);
        }
        return buildSegment(str, availableLength).substr(0, availableLength + ellipsisLengthBeforeParsing);
      }
      var pathAndQuery = "";
      if (urlObj.path) {
        pathAndQuery += "/" + urlObj.path;
      }
      if (urlObj.query) {
        pathAndQuery += "?" + urlObj.query;
      }
      if (pathAndQuery) {
        if ((str + pathAndQuery).length >= availableLength) {
          if ((str + pathAndQuery).length == truncateLen) {
            return (str + pathAndQuery).substr(0, truncateLen);
          }
          var remainingAvailableLength = availableLength - str.length;
          return (str + buildSegment(pathAndQuery, remainingAvailableLength)).substr(0, availableLength + ellipsisLengthBeforeParsing);
        } else {
          str += pathAndQuery;
        }
      }
      if (urlObj.fragment) {
        var fragment = "#" + urlObj.fragment;
        if ((str + fragment).length >= availableLength) {
          if ((str + fragment).length == truncateLen) {
            return (str + fragment).substr(0, truncateLen);
          }
          var remainingAvailableLength2 = availableLength - str.length;
          return (str + buildSegment(fragment, remainingAvailableLength2)).substr(0, availableLength + ellipsisLengthBeforeParsing);
        } else {
          str += fragment;
        }
      }
      if (urlObj.scheme && urlObj.host) {
        var scheme = urlObj.scheme + "://";
        if ((str + scheme).length < availableLength) {
          return (scheme + str).substr(0, truncateLen);
        }
      }
      if (str.length <= truncateLen) {
        return str;
      }
      var end2 = "";
      if (availableLength > 0) {
        end2 = str.substr(-1 * Math.floor(availableLength / 2));
      }
      return (str.substr(0, Math.ceil(availableLength / 2)) + ellipsisChars + end2).substr(0, availableLength + ellipsisLengthBeforeParsing);
    };
    return Autolinker2;
  });
})(Autolinker$1);
var Autolinker = Autolinker$1.exports;
const defaultTokens = {
  bold: { delimiter: "*", tag: "strong" },
  italic: { delimiter: "/", tag: "em" },
  underline: { delimiter: "_", tag: "u" },
  strike: { delimiter: "~", tag: "del" },
  code: { delimiter: "`", tag: "code" },
  sup: { delimiter: "^", tag: "sup" },
  sub: { delimiter: "\xA1", tag: "sub" }
};
const openTag = (tag) => `<${tag}>`;
const closeTag = (tag) => `</${tag}>`;
const encloseTag = (text, tag) => `${openTag(tag)}${text}${closeTag(tag)}`;
const parseToken = (text, stopDelimiter) => {
  let index = 0;
  let content = "";
  while (index < text.length && text[index] !== stopDelimiter) {
    content += text[index];
    index++;
  }
  if (index === text.length) {
    return "";
  } else {
    return content;
  }
};
var msgdown = (text, tokens = defaultTokens) => {
  tokens = Object.assign({}, defaultTokens, tokens);
  let html = "";
  let index = 0;
  const consumeChar = () => {
    html += text[index];
    index++;
  };
  const consumeAll = (textRemaining, delimiter) => {
    html += delimiter + textRemaining;
    index += textRemaining.length;
  };
  const consumeToken = (token) => {
    index++;
    if (text[index] === " ") {
      html += token.delimiter;
      consumeChar();
    } else {
      const textRemaining = text.substr(index);
      const tokenContent = parseToken(textRemaining, token.delimiter);
      if (tokenContent.length === 0) {
        consumeAll(textRemaining, token.delimiter);
      } else {
        html += encloseTag(tokenContent, token.tag);
        index += tokenContent.length + 1;
      }
    }
  };
  while (index < text.length) {
    const charCurrent = text[index];
    if (charCurrent === tokens.bold.delimiter) {
      consumeToken(tokens.bold);
    } else if (charCurrent === tokens.italic.delimiter) {
      consumeToken(tokens.italic);
    } else if (charCurrent === tokens.underline.delimiter) {
      consumeToken(tokens.underline);
    } else if (charCurrent === tokens.strike.delimiter) {
      consumeToken(tokens.strike);
    } else if (charCurrent === tokens.code.delimiter) {
      consumeToken(tokens.code);
    } else if (charCurrent === tokens.sup.delimiter) {
      consumeToken(tokens.sup);
    } else if (charCurrent === tokens.sub.delimiter) {
      consumeToken(tokens.sub);
    } else {
      consumeChar();
    }
  }
  return html;
};
var TextMessage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$f = {
  components: {
    IconBase,
    IconCross,
    IconEdit
  },
  props: {
    message: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: true
    },
    confirmationDeletionMessage: {
      type: String,
      required: true
    }
  },
  computed: {
    messageText() {
      const escaped = escapeGoat.escape(this.message.data.text);
      return Autolinker.link(this.messageStyling ? msgdown(escaped) : escaped, {
        className: "chatLink",
        truncate: { length: 50, location: "smart" }
      });
    },
    me() {
      return this.message.author === "me";
    },
    isEditing() {
      return (store.state.editMessage && store.state.editMessage.id) === this.message.id;
    },
    ...mapState(["showDeletion", "showEdition"])
  },
  methods: {
    edit() {
      store.setState("editMessage", this.message);
    },
    ifelse(cond, funcIf, funcElse) {
      return () => {
        if (funcIf && cond)
          funcIf();
        else if (funcElse)
          funcElse();
      };
    },
    withConfirm(msg, func) {
      return () => {
        if (confirm(msg))
          func();
      };
    }
  }
};
const _hoisted_1$f = ["disabled"];
const _hoisted_2$9 = { key: 1 };
const _hoisted_3$7 = ["innerHTML"];
const _hoisted_4$3 = {
  key: 1,
  class: "sc-message--edited"
};
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconEdit = resolveComponent("IconEdit");
  const _component_IconBase = resolveComponent("IconBase");
  const _component_IconCross = resolveComponent("IconCross");
  return openBlock(), createElementBlock("div", {
    class: "sc-message--text",
    style: normalizeStyle($props.messageColors)
  }, [
    createElementVNode("div", {
      class: "sc-message--toolbox",
      style: normalizeStyle({ background: $props.messageColors.backgroundColor })
    }, [
      _ctx.showEdition && $options.me && $props.message.id ? (openBlock(), createElementBlock("button", {
        key: 0,
        disabled: $options.isEditing,
        onClick: _cache[0] || (_cache[0] = (...args) => $options.edit && $options.edit(...args))
      }, [
        createVNode(_component_IconBase, {
          color: $options.isEditing ? "black" : $props.messageColors.color,
          width: "10",
          "icon-name": "edit"
        }, {
          default: withCtx(() => [
            createVNode(_component_IconEdit)
          ]),
          _: 1
        }, 8, ["color"])
      ], 8, _hoisted_1$f)) : createCommentVNode("", true),
      _ctx.showDeletion ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
        $options.me && $props.message.id != null && $props.message.id != void 0 ? (openBlock(), createElementBlock("button", {
          key: 0,
          onClick: _cache[1] || (_cache[1] = ($event) => $options.ifelse(
            $props.showConfirmationDeletion,
            $options.withConfirm($props.confirmationDeletionMessage, () => _ctx.$emit("remove")),
            () => _ctx.$emit("remove")
          )())
        }, [
          createVNode(_component_IconBase, {
            color: $props.messageColors.color,
            width: "10",
            "icon-name": "remove"
          }, {
            default: withCtx(() => [
              createVNode(_component_IconCross)
            ]),
            _: 1
          }, 8, ["color"])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true),
      renderSlot(_ctx.$slots, "text-message-toolbox", {
        message: $props.message,
        me: $options.me
      }, void 0, true)
    ], 4),
    renderSlot(_ctx.$slots, "default", {
      message: $props.message,
      messageText: $options.messageText,
      messageColors: $props.messageColors,
      me: $options.me
    }, () => [
      createElementVNode("p", {
        class: "sc-message--text-content",
        innerHTML: $options.messageText
      }, null, 8, _hoisted_3$7),
      $props.message.data.meta ? (openBlock(), createElementBlock("p", {
        key: 0,
        class: "sc-message--meta",
        style: normalizeStyle({ color: $props.messageColors.color })
      }, toDisplayString($props.message.data.meta), 5)) : createCommentVNode("", true),
      $props.message.isEdited ? (openBlock(), createElementBlock("p", _hoisted_4$3, [
        createVNode(_component_IconBase, {
          width: "10",
          "icon-name": "edited"
        }, {
          default: withCtx(() => [
            createVNode(_component_IconEdit)
          ]),
          _: 1
        }),
        createTextVNode(" edited ")
      ])) : createCommentVNode("", true)
    ], true)
  ], 4);
}
var TextMessage = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f], ["__scopeId", "data-v-784eb559"]]);
var FileMessage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$e = {
  props: {
    data: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    }
  }
};
const _hoisted_1$e = { class: "sc-message--file-icon" };
const _hoisted_2$8 = ["src"];
const _hoisted_3$6 = ["href"];
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "sc-message--file",
    style: normalizeStyle($props.messageColors)
  }, [
    createElementVNode("div", _hoisted_1$e, [
      createElementVNode("img", {
        src: $props.data.file.url,
        class: "sc-image"
      }, null, 8, _hoisted_2$8)
    ]),
    createElementVNode("div", {
      class: "sc-message--file-name",
      style: normalizeStyle($props.messageColors)
    }, [
      createElementVNode("a", {
        href: $props.data.file.url ? $props.data.file.url : "#",
        target: "_blank"
      }, toDisplayString($props.data.file.name || ""), 9, _hoisted_3$6)
    ], 4),
    createElementVNode("div", {
      class: "sc-message--file-text",
      style: normalizeStyle($props.messageColors)
    }, [
      createTextVNode(toDisplayString($props.data.text) + " ", 1),
      $props.data.meta ? (openBlock(), createElementBlock("p", {
        key: 0,
        class: "sc-message--meta",
        style: normalizeStyle($props.messageColors)
      }, toDisplayString($props.data.meta), 5)) : createCommentVNode("", true)
    ], 4)
  ], 4);
}
var FileMessage = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e], ["__scopeId", "data-v-1351b099"]]);
var EmojiMessage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$d = {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
const _hoisted_1$d = { class: "sc-message--emoji" };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$d, toDisplayString($props.data.emoji), 1);
}
var EmojiMessage = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d], ["__scopeId", "data-v-651be057"]]);
var TypingMessage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$c = {
  props: {
    messageColors: {
      type: Object,
      required: true
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-244d06fe"), n = n(), popScopeId(), n);
const _hoisted_1$c = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, null, -1));
const _hoisted_2$7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, null, -1));
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", null, null, -1));
const _hoisted_4$2 = [
  _hoisted_1$c,
  _hoisted_2$7,
  _hoisted_3$5
];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "sc-typing-indicator",
    style: normalizeStyle($props.messageColors)
  }, _hoisted_4$2, 4);
}
var TypingMessage = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c], ["__scopeId", "data-v-244d06fe"]]);
var SystemMessage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$b = {
  props: {
    data: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    }
  }
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "sc-message--system",
    style: normalizeStyle($props.messageColors)
  }, [
    renderSlot(_ctx.$slots, "default", { message: $props.data }, () => [
      createTextVNode(toDisplayString($props.data.text) + " ", 1),
      $props.data.meta ? (openBlock(), createElementBlock("p", {
        key: 0,
        class: "sc-message--meta",
        style: normalizeStyle({ color: $props.messageColors.color })
      }, toDisplayString($props.data.meta), 5)) : createCommentVNode("", true)
    ], true)
  ], 4);
}
var SystemMessage = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b], ["__scopeId", "data-v-0c1d322a"]]);
var chatIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItNDc0OS40OCAtNTAyMCAzNS4wMzYgMzUuMDM2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO30uYntmaWxsOiM0ZThjZmY7fS5je2NsaXAtcGF0aDp1cmwoI2EpO30uZHtmaWxsOiNmZmY7fS5le2ZpbGw6I2VmZjRmOTt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMC0zOTkuNDc5SDE3LjU1NXYxNy41NTVIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzk5LjQ3OSkiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDg4NiAtNTA3NSkiPjxjaXJjbGUgY2xhc3M9ImIiIGN4PSIxNy41MTgiIGN5PSIxNy41MTgiIHI9IjE3LjUxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM2LjUyIDU1KSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NS4xMyA2NCkiPjxnIGNsYXNzPSJjIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iZCIgZD0iTS0zODEuOTI0LTE5MC45NjJhOC43NzgsOC43NzgsMCwwLDAtOC43NzgtOC43NzgsOC43NzgsOC43NzgsMCwwLDAtOC43NzgsOC43NzgsOC43NDUsOC43NDUsMCwwLDAsMi4yNiw1Ljg3OXYxLjQ0MmMwLC44LjQ5MiwxLjQ1NywxLjEsMS40NTdoNS44M2EuODQzLjg0MywwLDAsMCwuMTgzLS4wMiw4Ljc3OCw4Ljc3OCwwLDAsMCw4LjE4NC04Ljc1NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk5LjQ3OSAxOTkuNzQpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGNsYXNzPSJlIiBkPSJNLTY4Ljc2My0xOTQuMDc5YTkuMjkyLDkuMjkyLDAsMCwxLDYuMzgtOC44ODhjLS4yNTItLjAyMi0uNTA2LS4wMzMtLjc2My0uMDMzYTguNzc0LDguNzc0LDAsMCwwLTguNzc4LDguNzc4QTkuNTA4LDkuNTA4LDAsMCwwLTY5LjctMTg4LjNjLjAwNSwwLDAsLjAwOSwwLC4wMS0uMzExLjM1Mi0xLjkyNCwyLjg0OS4wMjEsMi44NDloMi4yNWMtMS4yMy0uMDIyLDEuMjYzLTIuMTA3LjI2OS0zLjQ5NGE4LjIyNSw4LjIyNSwwLDAsMS0xLjYtNS4xNDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcxLjkyNCAyMDMpIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==";
var Message_vue_vue_type_style_index_0_lang = "";
const _sfc_main$a = {
  components: {
    TextMessage,
    FileMessage,
    EmojiMessage,
    TypingMessage,
    SystemMessage
  },
  props: {
    message: {
      type: Object,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: true
    },
    confirmationDeletionMessage: {
      type: String,
      required: true
    }
  },
  computed: {
    authorName() {
      return this.user && this.user.name;
    },
    chatImageUrl() {
      return this.user && this.user.imageUrl || chatIcon;
    },
    messageColors() {
      return this.message.author === "me" ? this.sentColorsStyle : this.receivedColorsStyle;
    },
    receivedColorsStyle() {
      return {
        color: this.colors.receivedMessage.text,
        backgroundColor: this.colors.receivedMessage.bg
      };
    },
    sentColorsStyle() {
      return {
        color: this.colors.sentMessage.text,
        backgroundColor: this.colors.sentMessage.bg
      };
    }
  }
};
const _hoisted_1$b = ["id"];
const _hoisted_2$6 = ["title"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TextMessage = resolveComponent("TextMessage");
  const _component_EmojiMessage = resolveComponent("EmojiMessage");
  const _component_FileMessage = resolveComponent("FileMessage");
  const _component_TypingMessage = resolveComponent("TypingMessage");
  const _component_SystemMessage = resolveComponent("SystemMessage");
  const _directive_tooltip = resolveDirective("tooltip");
  return openBlock(), createElementBlock("div", {
    id: $props.message.id,
    class: "sc-message"
  }, [
    createElementVNode("div", {
      class: normalizeClass(["sc-message--content", {
        sent: $props.message.author === "me",
        received: $props.message.author !== "me" && $props.message.type !== "system",
        system: $props.message.type === "system"
      }])
    }, [
      renderSlot(_ctx.$slots, "user-avatar", {
        message: $props.message,
        user: $props.user
      }, () => [
        $props.message.type !== "system" && $options.authorName && $options.authorName !== "me" ? withDirectives((openBlock(), createElementBlock("div", {
          key: 0,
          title: $options.authorName,
          class: "sc-message--avatar",
          style: normalizeStyle({
            backgroundImage: `url(${$options.chatImageUrl})`
          })
        }, null, 12, _hoisted_2$6)), [
          [_directive_tooltip, $options.authorName]
        ]) : createCommentVNode("", true)
      ]),
      $props.message.type === "text" ? (openBlock(), createBlock(_component_TextMessage, {
        key: 0,
        message: $props.message,
        "message-colors": $options.messageColors,
        "message-styling": $props.messageStyling,
        "show-confirmation-deletion": $props.showConfirmationDeletion,
        "confirmation-deletion-message": $props.confirmationDeletionMessage,
        onRemove: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("remove"))
      }, {
        default: withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "text-message-body", {
            message: scopedProps.message,
            messageText: scopedProps.messageText,
            messageColors: scopedProps.messageColors,
            me: scopedProps.me
          })
        ]),
        "text-message-toolbox": withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "text-message-toolbox", {
            message: scopedProps.message,
            me: scopedProps.me
          })
        ]),
        _: 3
      }, 8, ["message", "message-colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message"])) : $props.message.type === "emoji" ? (openBlock(), createBlock(_component_EmojiMessage, {
        key: 1,
        data: $props.message.data
      }, null, 8, ["data"])) : $props.message.type === "file" ? (openBlock(), createBlock(_component_FileMessage, {
        key: 2,
        data: $props.message.data,
        "message-colors": $options.messageColors
      }, null, 8, ["data", "message-colors"])) : $props.message.type === "typing" ? (openBlock(), createBlock(_component_TypingMessage, {
        key: 3,
        "message-colors": $options.messageColors
      }, null, 8, ["message-colors"])) : $props.message.type === "system" ? (openBlock(), createBlock(_component_SystemMessage, {
        key: 4,
        data: $props.message.data,
        "message-colors": $options.messageColors
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "system-message-body", {
            message: $props.message.data
          })
        ]),
        _: 3
      }, 8, ["data", "message-colors"])) : createCommentVNode("", true)
    ], 2)
  ], 8, _hoisted_1$b);
}
var Message = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
var MessageList_vue_vue_type_style_index_0_scoped_true_lang = "";
let resizeObserver;
const _sfc_main$9 = {
  components: {
    Message
  },
  props: {
    participants: {
      type: Array,
      required: true
    },
    messages: {
      type: Array,
      required: true
    },
    showTypingIndicator: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: true
    },
    confirmationDeletionMessage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      initialScrollTop: null
    };
  },
  computed: {
    defaultChatIcon() {
      return chatIcon;
    }
  },
  mounted() {
    this.watchScrollList();
    this.$nextTick(this._scrollDown());
  },
  beforeUnmount() {
    resizeObserver.unobserve(this.$refs.scrollList);
  },
  updated() {
    if (this.shouldScrollToBottom())
      this.$nextTick(this._scrollDown());
  },
  methods: {
    _scrollDown() {
      this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight;
      !this.initialScrollTop ? this.initialScrollTop = this.$refs.scrollList.scrollTop : "";
    },
    handleScroll(e) {
      if (e.target.scrollTop === 0) {
        this.$emit("scrollToTop");
      }
    },
    shouldScrollToBottom() {
      const scrollTop = this.$refs.scrollList.scrollTop;
      const scrollable = scrollTop > this.$refs.scrollList.scrollHeight - 600;
      return this.alwaysScrollToBottom || scrollable;
    },
    profile(author) {
      const profile = this.participants.find((profile2) => profile2.id === author);
      return profile || { imageUrl: "", name: "" };
    },
    watchScrollList() {
      resizeObserver = new ResizeObserver(() => {
        const value = this.$refs.scrollList.scrollHeight - this.$refs.scrollList.scrollTop;
        if (this.initialScrollTop === this.$refs.scrollList.scrollTop || this.$refs.scrollList.scrollTop > this.initialScrollTop && value > this.$refs.scrollList.offsetHeight) {
          this._scrollDown();
        }
      });
      resizeObserver.observe(this.$refs.scrollList);
    }
  }
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Message = resolveComponent("Message");
  return openBlock(), createElementBlock("div", {
    ref: "scrollList",
    class: "sc-message-list",
    style: normalizeStyle({ backgroundColor: $props.colors.messageList.bg }),
    onScroll: _cache[0] || (_cache[0] = (...args) => $options.handleScroll && $options.handleScroll(...args))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.messages, (message, idx) => {
      return openBlock(), createBlock(_component_Message, {
        key: idx,
        message,
        user: $options.profile(message.author),
        colors: $props.colors,
        "message-styling": $props.messageStyling,
        "show-confirmation-deletion": $props.showConfirmationDeletion,
        "confirmation-deletion-message": $props.confirmationDeletionMessage,
        onRemove: ($event) => _ctx.$emit("remove", message)
      }, {
        "user-avatar": withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "user-avatar", {
            user: scopedProps.user,
            message: scopedProps.message
          }, void 0, true)
        ]),
        "text-message-body": withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "text-message-body", {
            message: scopedProps.message,
            messageText: scopedProps.messageText,
            messageColors: scopedProps.messageColors,
            me: scopedProps.me
          }, void 0, true)
        ]),
        "system-message-body": withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "system-message-body", {
            message: scopedProps.message
          }, void 0, true)
        ]),
        "text-message-toolbox": withCtx((scopedProps) => [
          renderSlot(_ctx.$slots, "text-message-toolbox", {
            message: scopedProps.message,
            me: scopedProps.me
          }, void 0, true)
        ]),
        _: 2
      }, 1032, ["message", "user", "colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message", "onRemove"]);
    }), 128)),
    withDirectives(createVNode(_component_Message, {
      message: { author: $props.showTypingIndicator, type: "typing" },
      user: $options.profile($props.showTypingIndicator),
      colors: $props.colors,
      "message-styling": $props.messageStyling,
      "show-confirmation-deletion": $props.showConfirmationDeletion,
      "confirmation-deletion-message": $props.confirmationDeletionMessage
    }, null, 8, ["message", "user", "colors", "message-styling", "show-confirmation-deletion", "confirmation-deletion-message"]), [
      [vShow, $props.showTypingIndicator !== ""]
    ])
  ], 36);
}
var MessageList = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-68b7c108"]]);
var FileIcons_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = {
  props: {
    onChange: {
      type: Function,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    _handleClick(e) {
      e.target.value = null;
    },
    _handleChange(e) {
      this.onChange(e.target.files[0]);
    }
  }
};
const _hoisted_1$a = { style: { "position": "relative" } };
const _hoisted_2$5 = {
  class: "sc-user-input--file-icon-wrapper",
  type: "button"
};
const _hoisted_3$4 = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  class: "sc-user-input--file-icon",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "24px",
  viewBox: "0 0 37.393 37.393",
  enableBackground: "new 0 0 37.393 37.393"
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$a, [
    createElementVNode("button", _hoisted_2$5, [
      (openBlock(), createElementBlock("svg", _hoisted_3$4, [
        createElementVNode("path", {
          style: normalizeStyle({ fill: $props.color }),
          d: "M20.807 10.22l-2.030-2.029-10.15 10.148c-1.682 1.681-1.682 4.408 0 6.089s4.408 1.681 6.090 0l12.18-12.178c2.804-2.802 2.804-7.346 0-10.148-2.802-2.803-7.347-2.803-10.149 0l-12.788 12.787c-0.009 0.009-0.019 0.018-0.027 0.026-3.909 3.909-3.909 10.245 0 14.153 3.908 3.908 10.246 3.908 14.156 0 0.009-0.009 0.016-0.018 0.026-0.027l0.001 0.001 8.729-8.728-2.031-2.029-8.729 8.727c-0.009 0.008-0.018 0.018-0.026 0.026-2.784 2.783-7.312 2.783-10.096 0-2.783-2.783-2.783-7.31 0-10.093 0.010-0.009 0.019-0.018 0.028-0.026l-0.001-0.002 12.79-12.786c1.678-1.679 4.411-1.679 6.090 0s1.678 4.411 0 6.089l-12.18 12.178c-0.56 0.56-1.47 0.56-2.030 0-0.559-0.559-0.559-1.47 0-2.029l10.15-10.149z"
        }, null, 4)
      ])),
      createElementVNode("input", {
        id: "file-input",
        type: "file",
        onChange: _cache[0] || (_cache[0] = (...args) => $options._handleChange && $options._handleChange(...args)),
        onClick: _cache[1] || (_cache[1] = (...args) => $options._handleClick && $options._handleClick(...args))
      }, null, 32)
    ])
  ]);
}
var FileIcons = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-57681c9b"]]);
var UserInputButton_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = {
  components: {
    IconBase
  },
  props: {
    color: {
      type: String,
      required: true
    },
    tooltip: {
      type: String,
      default: ""
    }
  }
};
const _hoisted_1$9 = { class: "sc-user-input--button-icon-wrapper" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconBase = resolveComponent("IconBase");
  return openBlock(), createElementBlock("button", _hoisted_1$9, [
    createVNode(_component_IconBase, {
      color: $props.color,
      width: "20",
      height: "20",
      "icon-name": $props.tooltip
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["color", "icon-name"])
  ]);
}
var UserInputButton = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-e41567fc"]]);
var Suggestions_vue_vue_type_style_index_0_lang = "";
const _sfc_main$6 = {
  props: {
    suggestions: {
      type: Array,
      default: () => []
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
const _hoisted_1$8 = ["onClick"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "sc-suggestions-row",
    style: normalizeStyle({ background: $props.colors.messageList.bg })
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.suggestions, (suggestion, idx) => {
      return openBlock(), createElementBlock("button", {
        key: idx,
        class: "sc-suggestions-element",
        style: normalizeStyle({
          borderColor: $props.colors.sentMessage.bg,
          color: $props.colors.sentMessage.bg
        }),
        onClick: ($event) => _ctx.$emit("sendSuggestion", suggestion)
      }, toDisplayString(suggestion), 13, _hoisted_1$8);
    }), 128))
  ], 4);
}
var Suggestions = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var FileIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNTYgNTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2IDU2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJzdmdfMSI+CiAgIDxwYXRoIGlkPSJzdmdfMiIgZmlsbD0iI0U5RTlFMCIgZD0ibTM2Ljk4NSwwbC0yOS4wMjIsMGMtMC44MDgsMCAtMS40NjMsMC42NTUgLTEuNDYzLDEuOTI2bDAsNTMuMDc0YzAsMC4zNDUgMC42NTUsMSAxLjQ2MywxbDQwLjA3NCwwYzAuODA4LDAgMS40NjMsLTAuNjU1IDEuNDYzLC0xbDAsLTQyLjAyMmMwLC0wLjY5NiAtMC4wOTMsLTAuOTIgLTAuMjU3LC0xLjA4NWwtMTEuNjM2LC0xMS42MzZjLTAuMTY1LC0wLjE2NCAtMC4zODksLTAuMjU3IC0wLjYyMiwtMC4yNTd6Ii8+CiAgIDxwb2x5Z29uIGlkPSJzdmdfMyIgZmlsbD0iI0Q5RDdDQSIgcG9pbnRzPSIzNy41LDAuMTUxIDM3LjUsMTIgNDkuMzQ5LDEyICAiLz4KICAgPHBhdGggaWQ9InN2Z180IiBmaWxsPSIjOTVBNUE1IiBkPSJtNDguMDM3LDU2bC00MC4wNzQsMGMtMC44MDgsMCAtMS40NjMsLTAuNjU1IC0xLjQ2MywtMS40NjNsMCwtMTUuNTM3bDQzLDBsMCwxNS41MzdjMCwwLjgwOCAtMC42NTUsMS40NjMgLTEuNDYzLDEuNDYzeiIvPgogICA8cGF0aCBpZD0ic3ZnXzkiIGZpbGw9IiNDOEJEQjgiIGQ9Im0xOC41LDEzbC02LDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsNiwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4KICAgPHBhdGggaWQ9InN2Z18xMCIgZmlsbD0iI0M4QkRCOCIgZD0ibTIxLjUsMThsLTksMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWw5LDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPgogICA8cGF0aCBpZD0ic3ZnXzExIiBmaWxsPSIjQzhCREI4IiBkPSJtMjUuNSwxOGMtMC4yNiwwIC0wLjUyMSwtMC4xMSAtMC43MSwtMC4yOWMtMC4xODEsLTAuMTkgLTAuMjksLTAuNDQgLTAuMjksLTAuNzFzMC4xMDksLTAuNTIgMC4zLC0wLjcxYzAuMzYsLTAuMzcgMS4wNCwtMC4zNyAxLjQxLDBjMC4xOCwwLjE5IDAuMjksMC40NSAwLjI5LDAuNzFjMCwwLjI2IC0wLjExLDAuNTIgLTAuMjksMC43MWMtMC4xOSwwLjE4IC0wLjQ1LDAuMjkgLTAuNzEsMC4yOXoiLz4KICAgPHBhdGggaWQ9InN2Z18xMiIgZmlsbD0iI0M4QkRCOCIgZD0ibTM3LjUsMThsLTgsMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWw4LDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPgogICA8cGF0aCBpZD0ic3ZnXzEzIiBmaWxsPSIjQzhCREI4IiBkPSJtMTIuNSwzM2MtMC4yNiwwIC0wLjUyMSwtMC4xMSAtMC43MSwtMC4yOWMtMC4xODEsLTAuMTkgLTAuMjksLTAuNDUgLTAuMjksLTAuNzFjMCwtMC4yNiAwLjEwOSwtMC41MiAwLjI5LC0wLjcxYzAuMzcsLTAuMzcgMS4wNSwtMC4zNyAxLjQyLDAuMDFjMC4xOCwwLjE4IDAuMjksMC40NCAwLjI5LDAuN2MwLDAuMjYgLTAuMTEsMC41MiAtMC4yOSwwLjcxYy0wLjE5LDAuMTggLTAuNDUsMC4yOSAtMC43MSwwLjI5eiIvPgogICA8cGF0aCBpZD0ic3ZnXzE0IiBmaWxsPSIjQzhCREI4IiBkPSJtMjQuNSwzM2wtOCwwYy0wLjU1MywwIC0xLC0wLjQ0OCAtMSwtMXMwLjQ0NywtMSAxLC0xbDgsMGMwLjU1MywwIDEsMC40NDggMSwxcy0wLjQ0NywxIC0xLDF6Ii8+CiAgIDxwYXRoIGlkPSJzdmdfMTUiIGZpbGw9IiNDOEJEQjgiIGQ9Im00My41LDE4bC0yLDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsMiwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4KICAgPHBhdGggaWQ9InN2Z18xNiIgZmlsbD0iI0M4QkRCOCIgZD0ibTM0LjUsMjNsLTIyLDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsMjIsMGMwLjU1MywwIDEsMC40NDggMSwxcy0wLjQ0NywxIC0xLDF6Ii8+CiAgIDxwYXRoIGlkPSJzdmdfMTciIGZpbGw9IiNDOEJEQjgiIGQ9Im00My41LDIzbC02LDBjLTAuNTUzLDAgLTEsLTAuNDQ4IC0xLC0xczAuNDQ3LC0xIDEsLTFsNiwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4KICAgPHBhdGggaWQ9InN2Z18xOCIgZmlsbD0iI0M4QkRCOCIgZD0ibTE2LjUsMjhsLTQsMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWw0LDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPgogICA8cGF0aCBpZD0ic3ZnXzE5IiBmaWxsPSIjQzhCREI4IiBkPSJtMzAuNSwyOGwtMTAsMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWwxMCwwYzAuNTUzLDAgMSwwLjQ0OCAxLDFzLTAuNDQ3LDEgLTEsMXoiLz4KICAgPHBhdGggaWQ9InN2Z18yMCIgZmlsbD0iI0M4QkRCOCIgZD0ibTQzLjUsMjhsLTksMGMtMC41NTMsMCAtMSwtMC40NDggLTEsLTFzMC40NDcsLTEgMSwtMWw5LDBjMC41NTMsMCAxLDAuNDQ4IDEsMXMtMC40NDcsMSAtMSwxeiIvPgogIDwvZz4KICA8ZyBpZD0ic3ZnXzIxIi8+CiAgPGcgaWQ9InN2Z18yMiIvPgogIDxnIGlkPSJzdmdfMjMiLz4KICA8ZyBpZD0ic3ZnXzI0Ii8+CiAgPGcgaWQ9InN2Z18yNSIvPgogIDxnIGlkPSJzdmdfMjYiLz4KICA8ZyBpZD0ic3ZnXzI3Ii8+CiAgPGcgaWQ9InN2Z18yOCIvPgogIDxnIGlkPSJzdmdfMjkiLz4KICA8ZyBpZD0ic3ZnXzMwIi8+CiAgPGcgaWQ9InN2Z18zMSIvPgogIDxnIGlkPSJzdmdfMzIiLz4KICA8ZyBpZD0ic3ZnXzMzIi8+CiAgPGcgaWQ9InN2Z18zNCIvPgogIDxnIGlkPSJzdmdfMzUiLz4KPC9zdmc+";
var CloseIconSvg = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuOTcxIDQ3Ljk3MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuOTcxIDQ3Ljk3MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yOC4yMjgsMjMuOTg2TDQ3LjA5Miw1LjEyMmMxLjE3Mi0xLjE3MSwxLjE3Mi0zLjA3MSwwLTQuMjQyYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBMMjMuOTg2LDE5Ljc0NEw1LjEyMSwwLjg4CgkJYy0xLjE3Mi0xLjE3Mi0zLjA3LTEuMTcyLTQuMjQyLDBjLTEuMTcyLDEuMTcxLTEuMTcyLDMuMDcxLDAsNC4yNDJsMTguODY1LDE4Ljg2NEwwLjg3OSw0Mi44NWMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0MgoJCUMxLjQ2NSw0Ny42NzcsMi4yMzMsNDcuOTcsMyw0Ny45N3MxLjUzNS0wLjI5MywyLjEyMS0wLjg3OWwxOC44NjUtMTguODY0TDQyLjg1LDQ3LjA5MWMwLjU4NiwwLjU4NiwxLjM1NCwwLjg3OSwyLjEyMSwwLjg3OQoJCXMxLjUzNS0wLjI5MywyLjEyMS0wLjg3OWMxLjE3Mi0xLjE3MSwxLjE3Mi0zLjA3MSwwLTQuMjQyTDI4LjIyOCwyMy45ODZ6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+";
const _sfc_main$5 = {};
const _hoisted_1$7 = { d: "M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" };
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("path", _hoisted_1$7);
}
var IconOk = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {};
const _hoisted_1$6 = { d: "M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z" };
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("path", _hoisted_1$6);
}
var IconSend = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var UserInput_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  components: {
    FileIcons,
    UserInputButton,
    Suggestions,
    IconCross,
    IconOk,
    IconSend
  },
  props: {
    icons: {
      type: Object,
      default: function() {
        return {
          file: {
            img: FileIcon,
            name: "default"
          },
          closeSvg: {
            img: CloseIconSvg,
            name: "default"
          }
        };
      }
    },
    showEmoji: {
      type: Boolean,
      default: () => false
    },
    showEmojiInText: {
      type: Boolean,
      default: () => false
    },
    suggestions: {
      type: Array,
      default: () => []
    },
    showFile: {
      type: Boolean,
      default: () => false
    },
    onSubmit: {
      type: Function,
      required: true
    },
    placeholder: {
      type: String,
      default: "Write something..."
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      file: null,
      inputActive: false,
      prevSelectionRange: null
    };
  },
  computed: {
    editMessageId() {
      return this.isEditing && store.state.editMessage.id;
    },
    isEditing() {
      return store.state.editMessage && store.state.editMessage.id;
    }
  },
  watch: {
    editMessageId(m) {
      if (store.state.editMessage != null && store.state.editMessage != void 0) {
        this.$refs.userInput.focus();
        this.$refs.userInput.textContent = store.state.editMessage.data.text;
      } else {
        this.$refs.userInput.textContent = "";
      }
    }
  },
  mounted() {
    this.$event.$on("focusUserInput", () => {
      if (this.$refs.userInput) {
        this.focusUserInput();
      }
    });
    document.addEventListener("selectionchange", () => {
      const selection = document.getSelection();
      if (!selection || !selection.anchorNode || selection.anchorNode != this.$refs.userInput && selection.anchorNode.parentNode != this.$refs.userInput) {
        return;
      }
      if (selection.rangeCount) {
        this.prevSelectionRange = selection.getRangeAt(0).cloneRange();
      } else {
        this.prevSelectionRange = null;
      }
    });
  },
  methods: {
    cancelFile() {
      this.file = null;
    },
    setInputActive(onoff) {
      this.inputActive = onoff;
    },
    handleKey(event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        if (!this.isEditing) {
          this._submitText(event);
        } else {
          this._editText(event);
        }
        this._editFinish();
        event.preventDefault();
      } else if (event.keyCode === 27) {
        this._editFinish();
        event.preventDefault();
      }
    },
    handleInput(event) {
      this.$emit("onType", event.target.textContent);
    },
    focusUserInput() {
      this.$nextTick(() => {
        this.$refs.userInput.focus();
      });
    },
    _submitSuggestion(suggestion) {
      this.onSubmit({ author: "me", type: "text", data: { text: suggestion } });
    },
    _checkSubmitSuccess(success) {
      if (Promise !== void 0) {
        Promise.resolve(success).then(
          function(wasSuccessful) {
            if (wasSuccessful === void 0 || wasSuccessful) {
              this.file = null;
              this.$refs.userInput.innerHTML = "";
            }
          }.bind(this)
        );
      } else {
        this.file = null;
        this.$refs.userInput.innerHTML = "";
      }
    },
    _submitText(event) {
      const text = this.$refs.userInput.textContent;
      const file = this.file;
      if (file) {
        this._submitTextWhenFile(event, text, file);
      } else {
        if (text && text.length > 0) {
          this._checkSubmitSuccess(
            this.onSubmit({
              author: "me",
              type: "text",
              data: { text }
            })
          );
        }
      }
    },
    _submitTextWhenFile(event, text, file) {
      if (text && text.length > 0) {
        this._checkSubmitSuccess(
          this.onSubmit({
            author: "me",
            type: "file",
            data: { text, file }
          })
        );
      } else {
        this._checkSubmitSuccess(
          this.onSubmit({
            author: "me",
            type: "file",
            data: { file }
          })
        );
      }
    },
    _editText(event) {
      const text = this.$refs.userInput.textContent;
      if (text && text.length) {
        this.$emit("edit", {
          author: "me",
          type: "text",
          id: store.state.editMessage.id,
          data: { text }
        });
        this._editFinish();
      }
    },
    _handleEmojiPicked(emoji) {
      if (this.showEmojiInText) {
        this._addToTextEmoji(emoji);
      } else {
        this._submitEmoji(emoji);
      }
    },
    _submitEmoji(emoji) {
      this._checkSubmitSuccess(
        this.onSubmit({
          author: "me",
          type: "emoji",
          data: { emoji }
        })
      );
    },
    _addToTextEmoji(emoji) {
      let range = this.prevSelectionRange;
      if (!range) {
        if (!this.$refs.userInput.firstChild) {
          this.$refs.userInput.append(document.createTextNode(""));
        }
        range = document.createRange();
        range.setStart(this.$refs.userInput.firstChild, this.$refs.userInput.textContent.length);
        range.collapse(true);
      }
      let selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      let textNode = document.createTextNode(emoji);
      range.deleteContents();
      range.insertNode(textNode);
      range.collapse(false);
      this.$refs.userInput.focus();
    },
    _handleFileSubmit(file) {
      this.file = file;
    },
    _editFinish() {
      store.setState("editMessage", null);
    }
  }
};
const _hoisted_1$5 = { class: "icon-file-message" };
const _hoisted_2$4 = ["src", "alt"];
const _hoisted_3$3 = ["src", "alt"];
const _hoisted_4$1 = ["placeholder"];
const _hoisted_5$1 = { class: "sc-user-input--buttons" };
const _hoisted_6$1 = { class: "sc-user-input--button" };
const _hoisted_7$1 = {
  key: 0,
  class: "sc-user-input--button"
};
const _hoisted_8 = {
  key: 1,
  class: "sc-user-input--button"
};
const _hoisted_9 = { class: "sc-user-input--button" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Suggestions = resolveComponent("Suggestions");
  const _component_FileIcons = resolveComponent("FileIcons");
  const _component_IconCross = resolveComponent("IconCross");
  const _component_UserInputButton = resolveComponent("UserInputButton");
  const _component_IconOk = resolveComponent("IconOk");
  const _component_IconSend = resolveComponent("IconSend");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_Suggestions, {
      suggestions: $props.suggestions,
      colors: $props.colors,
      onSendSuggestion: $options._submitSuggestion
    }, null, 8, ["suggestions", "colors", "onSendSuggestion"]),
    $data.file ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: "file-container",
      style: normalizeStyle({
        backgroundColor: $props.colors.userInput.text,
        color: $props.colors.userInput.bg
      })
    }, [
      createElementVNode("span", _hoisted_1$5, [
        createElementVNode("img", {
          src: $props.icons.file.img,
          alt: $props.icons.file.name,
          height: "15"
        }, null, 8, _hoisted_2$4)
      ]),
      createTextVNode(" " + toDisplayString($data.file.name) + " ", 1),
      createElementVNode("span", {
        class: "delete-file-message",
        onClick: _cache[0] || (_cache[0] = ($event) => $options.cancelFile())
      }, [
        createElementVNode("img", {
          src: $props.icons.closeSvg.img,
          alt: $props.icons.closeSvg.name,
          height: "10",
          title: "Remove the file"
        }, null, 8, _hoisted_3$3)
      ])
    ], 4)) : createCommentVNode("", true),
    createElementVNode("form", {
      class: normalizeClass(["sc-user-input", { active: $data.inputActive }]),
      style: normalizeStyle({ background: $props.colors.userInput.bg })
    }, [
      createElementVNode("div", {
        ref: "userInput",
        role: "button",
        tabIndex: "0",
        contentEditable: "true",
        placeholder: $props.placeholder,
        class: "sc-user-input--text",
        style: normalizeStyle({ color: $props.colors.userInput.text }),
        onFocus: _cache[1] || (_cache[1] = ($event) => $options.setInputActive(true)),
        onBlur: _cache[2] || (_cache[2] = ($event) => $options.setInputActive(false)),
        onKeydown: _cache[3] || (_cache[3] = (...args) => $options.handleKey && $options.handleKey(...args)),
        onInput: _cache[4] || (_cache[4] = (...args) => $options.handleInput && $options.handleInput(...args)),
        "on:focusUserInput": _cache[5] || (_cache[5] = ($event) => $options.focusUserInput())
      }, null, 44, _hoisted_4$1),
      createElementVNode("div", _hoisted_5$1, [
        createElementVNode("div", _hoisted_6$1, [
          renderSlot(_ctx.$slots, "custom")
        ]),
        $props.showFile && !$options.isEditing ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
          createVNode(_component_FileIcons, {
            "on-change": $options._handleFileSubmit,
            color: $props.colors.userInput.text
          }, null, 8, ["on-change", "color"])
        ])) : createCommentVNode("", true),
        $options.isEditing ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createVNode(_component_UserInputButton, {
            color: $props.colors.userInput.text,
            tooltip: "cancel",
            onClick: withModifiers($options._editFinish, ["prevent"])
          }, {
            default: withCtx(() => [
              createVNode(_component_IconCross)
            ]),
            _: 1
          }, 8, ["color", "onClick"])
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_9, [
          $options.isEditing ? (openBlock(), createBlock(_component_UserInputButton, {
            key: 0,
            color: $props.colors.userInput.text,
            tooltip: "Edit",
            onClick: withModifiers($options._editText, ["prevent"])
          }, {
            default: withCtx(() => [
              createVNode(_component_IconOk)
            ]),
            _: 1
          }, 8, ["color", "onClick"])) : (openBlock(), createBlock(_component_UserInputButton, {
            key: 1,
            color: $props.colors.userInput.text,
            tooltip: "Send",
            onClick: withModifiers($options._submitText, ["prevent"])
          }, {
            default: withCtx(() => [
              createVNode(_component_IconSend)
            ]),
            _: 1
          }, 8, ["color", "onClick"]))
        ])
      ])
    ], 6)
  ]);
}
var UserInput = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var UserList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = {
  props: {
    participants: {
      type: Array,
      required: true
    },
    colors: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    userListColor() {
      const defaultColors = {
        userList: {
          bg: "#FFFFFF",
          text: "#000000"
        }
      };
      return Object.assign(defaultColors, this.colors);
    }
  }
};
const _hoisted_1$4 = { style: { "padding-top": "5px" } };
const _hoisted_2$3 = { style: { "text-align": "center" } };
const _hoisted_3$2 = ["src"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "user-list",
    style: normalizeStyle({ background: $options.userListColor.userList.bg })
  }, [
    createElementVNode("table", _hoisted_1$4, [
      createElementVNode("tbody", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.participants, (user) => {
          return openBlock(), createElementBlock("tr", {
            key: user.id
          }, [
            createElementVNode("td", _hoisted_2$3, [
              createElementVNode("img", {
                src: user.imageUrl,
                class: "img-msg"
              }, null, 8, _hoisted_3$2)
            ]),
            createElementVNode("td", {
              class: "user-element",
              style: normalizeStyle({ color: $options.userListColor.userList.text })
            }, toDisplayString(user.name), 5)
          ]);
        }), 128))
      ])
    ])
  ], 4);
}
var UserList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-2d658214"]]);
var ChatWindow_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = {
  components: {
    Header,
    MessageList,
    UserInput,
    UserList
  },
  props: {
    showEmoji: {
      type: Boolean,
      default: false
    },
    showEmojiInText: {
      type: Boolean,
      default: false
    },
    showFile: {
      type: Boolean,
      default: false
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    participants: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    onUserInputSubmit: {
      type: Function,
      required: true
    },
    messageList: {
      type: Array,
      default: () => []
    },
    isOpen: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      required: true
    },
    showTypingIndicator: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    showConfirmationDeletion: {
      type: Boolean,
      required: true
    },
    confirmationDeletionMessage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showUserList: false
    };
  },
  computed: {
    messages() {
      let messages = this.messageList;
      return messages;
    }
  },
  methods: {
    handleUserListToggle(showUserList) {
      this.showUserList = showUserList;
    },
    getSuggestions() {
      return this.messages.length > 0 ? this.messages[this.messages.length - 1].suggestions : [];
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Header = resolveComponent("Header");
  const _component_UserList = resolveComponent("UserList");
  const _component_MessageList = resolveComponent("MessageList");
  const _component_UserInput = resolveComponent("UserInput");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["sc-chat-window", { opened: $props.isOpen, closed: !$props.isOpen }])
  }, [
    renderSlot(_ctx.$slots, "icon", {}, void 0, true),
    $props.showHeader ? (openBlock(), createBlock(_component_Header, {
      key: 0,
      title: $props.title,
      colors: $props.colors,
      onClose: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
      onUserList: $options.handleUserListToggle
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "header", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["title", "colors", "onUserList"])) : createCommentVNode("", true),
    $data.showUserList ? (openBlock(), createBlock(_component_UserList, {
      key: 1,
      colors: $props.colors,
      participants: $props.participants
    }, null, 8, ["colors", "participants"])) : createCommentVNode("", true),
    !$data.showUserList ? (openBlock(), createBlock(_component_MessageList, {
      key: 2,
      messages: $options.messages,
      participants: $props.participants,
      "show-typing-indicator": $props.showTypingIndicator,
      colors: $props.colors,
      "always-scroll-to-bottom": $props.alwaysScrollToBottom,
      "show-confirmation-deletion": $props.showConfirmationDeletion,
      "confirmation-deletion-message": $props.confirmationDeletionMessage,
      "message-styling": $props.messageStyling,
      onScrollToTop: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("scrollToTop")),
      onRemove: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("remove", $event))
    }, {
      "user-avatar": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "user-avatar", {
          user: scopedProps.user,
          message: scopedProps.message
        }, void 0, true)
      ]),
      "text-message-body": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "text-message-body", {
          message: scopedProps.message,
          messageText: scopedProps.messageText,
          messageColors: scopedProps.messageColors,
          me: scopedProps.me
        }, void 0, true)
      ]),
      "system-message-body": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "system-message-body", {
          message: scopedProps.message
        }, void 0, true)
      ]),
      "text-message-toolbox": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "text-message-toolbox", {
          message: scopedProps.message,
          me: scopedProps.me
        }, void 0, true)
      ]),
      _: 3
    }, 8, ["messages", "participants", "show-typing-indicator", "colors", "always-scroll-to-bottom", "show-confirmation-deletion", "confirmation-deletion-message", "message-styling"])) : createCommentVNode("", true),
    createElementVNode("div", null, [
      !$data.showUserList ? (openBlock(), createBlock(_component_UserInput, {
        key: 0,
        "show-emoji": $props.showEmoji,
        "show-emoji-in-text": $props.showEmojiInText,
        "on-submit": $props.onUserInputSubmit,
        suggestions: $options.getSuggestions(),
        "show-file": $props.showFile,
        placeholder: $props.placeholder,
        colors: $props.colors,
        onOnType: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("onType", $event)),
        onEdit: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("edit", $event))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "custom", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["show-emoji", "show-emoji-in-text", "on-submit", "suggestions", "show-file", "placeholder", "colors"])) : createCommentVNode("", true)
    ])
  ], 2);
}
var ChatWindow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-eda314c6"]]);
var CloseIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKVQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uP3jVQAAADd0Uk5TAE9lCAXd9XA4y/9zDQJG7HYB8Hc3yHoPQ8fuezMSoYPrEcEugj0tqb6G+Lw5ifHcKk3SIAx/MjRpS8YAAADsSURBVHic7dDJDoIwEIDhQURwQNGiIBVkUQH3BfX9H00MEvHW9qj9L3RIvkxTAJlMJvu1lI7aHtWOwm67Wk9vz3pP67Jro4+m1QyWiX2D3cJgqNmjt7ZGtjYccGAYK8R26qNjE2XMY6smU3Q9AM/F6YSTVrtnPp173pz6M969Lx1Q6rqUBgK2KvAR/UCIAoQLxEUoiCMSxyQSokmE6XKZYpQI2BVJ1wDrlKz4dXXn7PXN+G8e5lhk9TErMOd6tXCz3e2bYb/bbnj04Xg6f6bz6Xhgtxe8lu25vOKFGd/uj+8fj/uNfbVMJpP9QU/STxAzeUFqVwAAAABJRU5ErkJggg==";
var OpenIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjxyZWN0IGlkPSJiYWNrZ3JvdW5kcmVjdCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgeD0iMCIgeT0iMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIi8+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTt9LmJ7ZmlsbDojNGU4Y2ZmO30uY3tjbGlwLXBhdGg6dXJsKCNhKTt9LmR7ZmlsbDojZmZmO30uZXtmaWxsOiNlZmY0Zjk7fTwvc3R5bGU+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBjbGFzcz0iYSIgZD0iTSAwIDAgSCAxNy41NTUgdiAxNy41NTUgSCAwIFoiIGlkPSJzdmdfMSIgdHJhbnNmb3JtPSIiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PGcgaWQ9InN2Z18yIiBjbGFzcz0ic2VsZWN0ZWQiIHRyYW5zZm9ybT0iIj48ZyBpZD0ic3ZnXzMiIHRyYW5zZm9ybT0iIj48ZyBjbGFzcz0iYyIgaWQ9InN2Z180IiB0cmFuc2Zvcm09IiI+PGcgaWQ9InN2Z181IiB0cmFuc2Zvcm09IiI+PHBhdGggY2xhc3M9ImQiIGQ9Ik0gMTcuNTU2IDguNzc4NDIgYSA4Ljc3OCA4Ljc3OCAwIDAgMCAtOC43NzggLTguNzc4IGEgOC43NzggOC43NzggMCAwIDAgLTguNzc4IDguNzc4IGEgOC43NDUgOC43NDUgMCAwIDAgMi4yNiA1Ljg3OSB2IDEuNDQyIGMgMCAwLjggMC40OTIgMS40NTcgMS4xIDEuNDU3IGggNS44MyBhIDAuODQzIDAuODQzIDAgMCAwIDAuMTgzIC0wLjAyIGEgOC43NzggOC43NzggMCAwIDAgOC4xODQgLTguNzU3IiBpZD0ic3ZnXzYiIHRyYW5zZm9ybT0iIi8+PC9nPjxnIGlkPSJzdmdfNyIgdHJhbnNmb3JtPSIiPjxwYXRoIGNsYXNzPSJlIiBkPSJNIDMuMTYxNDggOC45MjEgYSA5LjI5MiA5LjI5MiAwIDAgMSA2LjM4IC04Ljg4OCBjIC0wLjI1MiAtMC4wMjIgLTAuNTA2IC0wLjAzMyAtMC43NjMgLTAuMDMzIGEgOC43NzQgOC43NzQgMCAwIDAgLTguNzc4IDguNzc4IEEgOS41MDggOS41MDggMCAwIDAgMi4yMjQ0NyAxNC43MDAzIGMgMC4wMDUgMCAwIDAuMDA5IDAgMC4wMSBjIC0wLjMxMSAwLjM1MiAtMS45MjQgMi44NDkgMC4wMjEgMi44NDkgaCAyLjI1IGMgLTEuMjMgLTAuMDIyIDEuMjYzIC0yLjEwNyAwLjI2OSAtMy40OTQgYSA4LjIyNSA4LjIyNSAwIDAgMSAtMS42IC01LjE0MSIgaWQ9InN2Z184IiB0cmFuc2Zvcm09IiIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+";
var Launcher_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  components: {
    ChatWindow
  },
  props: {
    icons: {
      type: Object,
      default: function() {
        return {
          open: {
            img: OpenIcon,
            name: "default"
          },
          close: {
            img: CloseIcon,
            name: "default"
          }
        };
      }
    },
    showEmoji: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: true
    },
    showEmojiInText: {
      type: Boolean,
      default: false
    },
    showEdition: {
      type: Boolean,
      default: false
    },
    showDeletion: {
      type: Boolean,
      default: false
    },
    showConfirmationDeletion: {
      type: Boolean,
      default: false
    },
    confirmationDeletionMessage: {
      type: String,
      default: "Do you really want to delete the message?"
    },
    isOpen: {
      type: Boolean,
      required: true
    },
    open: {
      type: Function,
      required: true
    },
    close: {
      type: Function,
      required: true
    },
    showFile: {
      type: Boolean,
      default: false
    },
    showLauncher: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    participants: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: () => ""
    },
    titleImageUrl: {
      type: String,
      default: () => ""
    },
    onMessageWasSent: {
      type: Function,
      required: true
    },
    messageList: {
      type: Array,
      default: () => []
    },
    newMessagesCount: {
      type: Number,
      default: () => 0
    },
    placeholder: {
      type: String,
      default: "Write a message..."
    },
    showTypingIndicator: {
      type: String,
      default: () => ""
    },
    colors: {
      type: Object,
      validator: (c) => "header" in c && "bg" in c.header && "text" in c.header && "launcher" in c && "bg" in c.launcher && "messageList" in c && "bg" in c.messageList && "sentMessage" in c && "bg" in c.sentMessage && "text" in c.sentMessage && "receivedMessage" in c && "bg" in c.receivedMessage && "text" in c.receivedMessage && "userInput" in c && "bg" in c.userInput && "text" in c.userInput,
      default: function() {
        return {
          header: {
            bg: "#4e8cff",
            text: "#ffffff"
          },
          launcher: {
            bg: "#4e8cff"
          },
          messageList: {
            bg: "#ffffff"
          },
          sentMessage: {
            bg: "#4e8cff",
            text: "#ffffff"
          },
          receivedMessage: {
            bg: "#f4f7f9",
            text: "#ffffff"
          },
          userInput: {
            bg: "#f4f7f9",
            text: "#565867"
          }
        };
      }
    },
    alwaysScrollToBottom: {
      type: Boolean,
      default: () => false
    },
    messageStyling: {
      type: Boolean,
      default: () => false
    },
    disableUserListToggle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    chatWindowTitle() {
      if (this.title !== "")
        return this.title;
      if (this.participants.length === 0)
        return "You";
      if (this.participants.length > 1)
        return "You, " + this.participants[0].name + " & others";
      return "You & " + this.participants[0].name;
    }
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,
      handler(props) {
        for (const prop in props) {
          store.setState(prop, props[prop]);
        }
      }
    }
  },
  methods: {
    openAndFocus() {
      this.open();
      if (this.autoFocus) {
        this.$event.$emit("focusUserInput");
      }
    }
  }
};
const _hoisted_1$3 = {
  key: 0,
  class: "sc-new-messsages-count"
};
const _hoisted_2$2 = ["src", "alt"];
const _hoisted_3$1 = ["src", "alt"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChatWindow = resolveComponent("ChatWindow");
  return openBlock(), createElementBlock("div", null, [
    $props.showLauncher ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["sc-launcher", { opened: $props.isOpen }]),
      style: normalizeStyle({ backgroundColor: $props.colors.launcher.bg }),
      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $props.isOpen ? $props.close() : $options.openAndFocus(), ["prevent"]))
    }, [
      $props.newMessagesCount > 0 && !$props.isOpen ? (openBlock(), createElementBlock("div", _hoisted_1$3, toDisplayString($props.newMessagesCount), 1)) : createCommentVNode("", true),
      $props.isOpen ? (openBlock(), createElementBlock("img", {
        key: 1,
        class: "sc-closed-icon",
        src: $props.icons.close.img,
        alt: $props.icons.close.name
      }, null, 8, _hoisted_2$2)) : (openBlock(), createElementBlock("img", {
        key: 2,
        class: "sc-open-icon",
        src: $props.icons.open.img,
        alt: $props.icons.open.name
      }, null, 8, _hoisted_3$1))
    ], 6)) : createCommentVNode("", true),
    createVNode(_component_ChatWindow, {
      "message-list": $props.messageList,
      "on-user-input-submit": $props.onMessageWasSent,
      participants: $props.participants,
      title: $options.chatWindowTitle,
      "is-open": $props.isOpen,
      "show-emoji": $props.showEmoji,
      "show-emoji-in-text": $props.showEmojiInText,
      "show-file": $props.showFile,
      "show-confirmation-deletion": $props.showConfirmationDeletion,
      "confirmation-deletion-message": $props.confirmationDeletionMessage,
      "show-header": $props.showHeader,
      placeholder: $props.placeholder,
      "show-typing-indicator": $props.showTypingIndicator,
      colors: $props.colors,
      "always-scroll-to-bottom": $props.alwaysScrollToBottom,
      "message-styling": $props.messageStyling,
      onClose: $props.close,
      onScrollToTop: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("scrollToTop")),
      onOnType: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("onType", $event)),
      onEdit: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("edit", $event)),
      onRemove: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("remove", $event))
    }, {
      header: withCtx(() => [
        renderSlot(_ctx.$slots, "header", {}, void 0, true)
      ]),
      "user-avatar": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "user-avatar", {
          user: scopedProps.user,
          message: scopedProps.message
        }, void 0, true)
      ]),
      "text-message-body": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "text-message-body", {
          message: scopedProps.message,
          messageText: scopedProps.messageText,
          messageColors: scopedProps.messageColors,
          me: scopedProps.me
        }, void 0, true)
      ]),
      "system-message-body": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "system-message-body", {
          message: scopedProps.message
        }, void 0, true)
      ]),
      "text-message-toolbox": withCtx((scopedProps) => [
        renderSlot(_ctx.$slots, "text-message-toolbox", {
          message: scopedProps.message,
          me: scopedProps.me
        }, void 0, true)
      ]),
      _: 3
    }, 8, ["message-list", "on-user-input-submit", "participants", "title", "is-open", "show-emoji", "show-emoji-in-text", "show-file", "show-confirmation-deletion", "confirmation-deletion-message", "show-header", "placeholder", "show-typing-indicator", "colors", "always-scroll-to-bottom", "message-styling", "onClose"])
  ]);
}
var Launcher = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-13c85e18"]]);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE2 = /Trident/i.test(getUAString());
  if (isIE2 && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance2 = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance2.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance2.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance2.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance2.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data2 = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data2[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data2;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data2 = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data2[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data2[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data2;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance2 = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance2.update();
      },
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance: instance2
            }) || state;
          }
        }
      },
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance2.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance2;
    }
    instance2.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance: instance2,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance2;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
function getInternetExplorerVersion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }
  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }
  return -1;
}
let isIE;
function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
}
var script$6 = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    initCompat();
    nextTick(() => {
      this._w = this.$el.offsetWidth;
      this._h = this.$el.offsetHeight;
      if (this.emitOnMount) {
        this.emitSize();
      }
    });
    const object = document.createElement("object");
    this._resizeObject = object;
    object.setAttribute("aria-hidden", "true");
    object.setAttribute("tabindex", -1);
    object.onload = this.addResizeHandlers;
    object.type = "text/html";
    if (isIE) {
      this.$el.appendChild(object);
    }
    object.data = "about:blank";
    if (!isIE) {
      this.$el.appendChild(object);
    }
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      if (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) {
        this._w = this.$el.offsetWidth;
        this._h = this.$el.offsetHeight;
        this.emitSize();
      }
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify);
      this.compareAndNotify();
    },
    removeResizeHandlers() {
      if (this._resizeObject && this._resizeObject.onload) {
        if (!isIE && this._resizeObject.contentDocument) {
          this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify);
        }
        this.$el.removeChild(this._resizeObject);
        this._resizeObject.onload = null;
        this._resizeObject = null;
      }
    }
  }
};
const _withId = /* @__PURE__ */ withScopeId("data-v-b329ee4c");
pushScopeId("data-v-b329ee4c");
const _hoisted_1$2 = {
  class: "resize-observer",
  tabindex: "-1"
};
popScopeId();
const render$3 = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1$2);
});
script$6.render = render$3;
script$6.__scopeId = "data-v-b329ee4c";
script$6.__file = "src/components/ResizeObserver.vue";
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn2) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn2.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return {
        s: F,
        n: function() {
          if (i >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function(e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function() {
      it = it.call(o);
    },
    n: function() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function(e) {
      didErr = true;
      err = e;
    },
    f: function() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    }
  };
}
function assign(to, from) {
  for (var key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (_typeof(from[key]) === "object" && to[key]) {
        assign(to[key], from[key]);
      } else {
        to[key] = from[key];
      }
    }
  }
}
var config = {
  disabled: false,
  offset: [0, 5],
  container: "body",
  boundary: void 0,
  instantMove: false,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: "absolute",
  modifiers: [],
  popperOptions: {},
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: function hideTriggers(events) {
        return [].concat(_toConsumableArray(events), ["click"]);
      },
      delay: {
        show: 200,
        hide: 0
      },
      handleResize: false,
      html: false,
      loadingContent: "..."
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: true,
      autoHide: true
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function getDefaultConfig(theme, key) {
  var themeConfig = config.themes[theme] || {};
  var value;
  do {
    value = themeConfig[key];
    if (typeof value === "undefined") {
      if (themeConfig.$extend) {
        themeConfig = config.themes[themeConfig.$extend] || {};
      } else {
        themeConfig = null;
        value = config[key];
      }
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return value;
}
function getThemeClasses(theme) {
  var result = [theme];
  var themeConfig = config.themes[theme] || {};
  do {
    if (themeConfig.$extend && !themeConfig.$resetCss) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return result.map(function(c) {
    return "v-popper--theme-".concat(c);
  });
}
var supportsPassive = false;
if (typeof window !== "undefined") {
  supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) {
  }
}
var isIOS = false;
if (typeof window !== "undefined" && typeof navigator !== "undefined") {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}
function applyModifier(modifiers, name, data2) {
  var modifier = modifiers.find(function(m) {
    return m.name === name;
  });
  if (!modifier) {
    modifier = {
      name
    };
    modifiers.push(modifier);
  }
  for (var key in data2) {
    if (key === "options") {
      if (!modifier.options) {
        modifier.options = {};
      }
      Object.assign(modifier.options, data2.options);
    } else {
      modifier[key] = data2[key];
    }
  }
}
var SHOW_EVENT_MAP = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
};
var HIDE_EVENT_MAP = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function removeFromArray(array, item) {
  var index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}
var shownPoppers = [];
var hidingPopper = null;
var Element$1 = function Element2() {
};
if (typeof window !== "undefined") {
  Element$1 = window.Element;
}
var PrivatePopper = function() {
  return {
    name: "VPopper",
    props: {
      theme: {
        type: String,
        required: true
      },
      targetNodes: {
        type: Function,
        required: true
      },
      referenceNode: {
        type: Function,
        required: true
      },
      popperNode: {
        type: Function,
        required: true
      },
      arrowNode: {
        type: Function,
        default: null
      },
      shown: {
        type: Boolean,
        default: false
      },
      showGroup: {
        type: String,
        default: null
      },
      ariaId: {
        default: null
      },
      disabled: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "disabled");
        }
      },
      placement: {
        type: String,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "placement");
        },
        validator: function validator(value) {
          return placements.includes(value);
        }
      },
      delay: {
        type: [String, Number, Object],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "delay");
        }
      },
      offset: {
        type: [Array, Function],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "offset");
        }
      },
      triggers: {
        type: Array,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "triggers");
        }
      },
      showTriggers: {
        type: [Array, Function],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "showTriggers");
        }
      },
      hideTriggers: {
        type: [Array, Function],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "hideTriggers");
        }
      },
      popperTriggers: {
        type: Array,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "popperTriggers");
        }
      },
      popperShowTriggers: {
        type: [Array, Function],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "popperShowTriggers");
        }
      },
      popperHideTriggers: {
        type: [Array, Function],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "popperHideTriggers");
        }
      },
      container: {
        type: [String, Object, Element$1, Boolean],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "container");
        }
      },
      boundary: {
        type: [String, Element$1],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "boundary");
        }
      },
      strategy: {
        type: String,
        validator: function validator(value) {
          return ["absolute", "fixed"].includes(value);
        },
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "strategy");
        }
      },
      modifiers: {
        type: Array,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "modifiers");
        }
      },
      popperOptions: {
        type: Object,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "popperOptions");
        }
      },
      autoHide: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "autoHide");
        }
      },
      handleResize: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "handleResize");
        }
      },
      instantMove: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "instantMove");
        }
      },
      eagerMount: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "eagerMount");
        }
      },
      popperClass: {
        type: [String, Array, Object],
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "popperClass");
        }
      },
      computeTransformOrigin: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "computeTransformOrigin");
        }
      },
      autoMinSize: {
        type: Boolean,
        default: function _default3(props) {
          return getDefaultConfig(props.theme, "autoMinSize");
        }
      }
    },
    emits: ["show", "hide", "update:shown", "apply-show", "apply-hide", "close-group", "close-directive", "auto-hide", "resize", "dispose"],
    data: function data2() {
      return {
        isShown: false,
        isMounted: false,
        skipTransition: false,
        classes: {
          showFrom: false,
          showTo: false,
          hideFrom: false,
          hideTo: true
        }
      };
    },
    computed: {
      popperId: function popperId() {
        return this.ariaId != null ? this.ariaId : this.randomId;
      },
      shouldMountContent: function shouldMountContent() {
        return this.eagerMount || this.isMounted;
      },
      slotData: function slotData() {
        return {
          popperId: this.popperId,
          isShown: this.isShown,
          shouldMountContent: this.shouldMountContent,
          skipTransition: this.skipTransition,
          autoHide: this.autoHide,
          show: this.show,
          hide: this.hide,
          handleResize: this.handleResize,
          onResize: this.onResize,
          classes: _objectSpread2(_objectSpread2({}, this.classes), {}, {
            popperClass: this.popperClass
          })
        };
      }
    },
    watch: {
      shown: "$_autoShowHide",
      disabled: function disabled(value) {
        if (value) {
          this.dispose();
        } else {
          this.init();
        }
      },
      container: function container() {
        var _this = this;
        return _asyncToGenerator(function* () {
          if (_this.isShown && _this.popperInstance) {
            _this.$_ensureContainer();
            yield _this.popperInstance.update();
          }
        })();
      },
      triggers: function triggers() {
        this.$_removeEventListeners();
        this.$_addEventListeners();
      },
      placement: "$_refreshPopperOptions",
      offset: "$_refreshPopperOptions",
      boundary: "$_refreshPopperOptions",
      strategy: "$_refreshPopperOptions",
      modifiers: "$_refreshPopperOptions",
      popperOptions: {
        handler: "$_refreshPopperOptions",
        deep: true
      }
    },
    created: function created2() {
      this.randomId = "popper_".concat([Math.random(), Date.now()].map(function(n) {
        return n.toString(36).substring(2, 10);
      }).join("_"));
    },
    mounted: function mounted() {
      this.init();
    },
    activated: function activated() {
      this.$_autoShowHide();
    },
    deactivated: function deactivated() {
      this.hide();
    },
    beforeUnmount: function beforeUnmount3() {
      this.dispose();
    },
    methods: {
      show: function show2() {
        var _this2 = this;
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, event = _ref.event, _ref$skipDelay = _ref.skipDelay, skipDelay = _ref$skipDelay === void 0 ? false : _ref$skipDelay, _ref$force = _ref.force, force = _ref$force === void 0 ? false : _ref$force;
        if (force || !this.disabled) {
          this.$_scheduleShow(event, skipDelay);
          this.$emit("show");
          this.$_showFrameLocked = true;
          requestAnimationFrame(function() {
            _this2.$_showFrameLocked = false;
          });
        }
        this.$emit("update:shown", true);
      },
      hide: function hide3() {
        var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, event = _ref2.event, _ref2$skipDelay = _ref2.skipDelay, skipDelay = _ref2$skipDelay === void 0 ? false : _ref2$skipDelay;
        this.$_scheduleHide(event, skipDelay);
        this.$emit("hide");
        this.$emit("update:shown", false);
      },
      init: function init() {
        this.$_isDisposed = false;
        this.isMounted = false;
        this.$_events = [];
        this.$_preventShow = false;
        this.$_targetNodes = this.targetNodes().filter(function(e) {
          return e.nodeType === e.ELEMENT_NODE;
        });
        this.$_popperNode = this.popperNode();
        this.$_swapTargetAttrs("title", "data-original-title");
        this.$_detachPopperNode();
        if (this.triggers.length) {
          this.$_addEventListeners();
        }
        if (this.shown) {
          this.show();
        }
      },
      dispose: function dispose2() {
        this.$_isDisposed = true;
        this.$_removeEventListeners();
        this.hide({
          skipDelay: true
        });
        if (this.popperInstance) {
          this.popperInstance.destroy();
          this.$_detachPopperNode();
        }
        this.isMounted = false;
        this.popperInstance = null;
        this.isShown = false;
        this.$_swapTargetAttrs("data-original-title", "title");
        this.$emit("dispose");
      },
      onResize: function onResize2() {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          if (_this3.isShown && _this3.popperInstance) {
            yield _this3.popperInstance.update();
            _this3.$emit("resize");
          }
        })();
      },
      $_getPopperOptions: function $_getPopperOptions() {
        var _this4 = this;
        var popperOptions = _objectSpread2(_objectSpread2({}, this.popperOptions), {}, {
          placement: this.placement,
          strategy: this.strategy,
          modifiers: this.modifiers,
          onFirstUpdate: function() {
            var _onFirstUpdate = _asyncToGenerator(function* (state) {
              if (_this4.popperOptions.onFirstUpdate) {
                _this4.popperOptions.onFirstUpdate(state);
              }
              yield _this4.$_applyShowEffect();
            });
            function onFirstUpdate(_x) {
              return _onFirstUpdate.apply(this, arguments);
            }
            return onFirstUpdate;
          }()
        });
        if (!popperOptions.modifiers) {
          popperOptions.modifiers = [];
        }
        applyModifier(popperOptions.modifiers, "arrow", {
          options: {
            element: this.arrowNode && this.arrowNode() || "[data-popper-arrow]"
          }
        });
        if (this.offset) {
          applyModifier(popperOptions.modifiers, "offset", {
            options: {
              offset: this.offset
            }
          });
        }
        if (this.boundary) {
          applyModifier(popperOptions.modifiers, "preventOverflow", {
            options: {
              boundary: this.boundary
            }
          });
        }
        if (!this.isShown) {
          applyModifier(popperOptions.modifiers, "eventListeners", {
            enabled: false
          });
        }
        return popperOptions;
      },
      $_refreshPopperOptions: function $_refreshPopperOptions() {
        var _this5 = this;
        return _asyncToGenerator(function* () {
          if (_this5.popperInstance) {
            yield _this5.popperInstance.setOptions(_this5.$_getPopperOptions());
          }
        })();
      },
      $_scheduleShow: function $_scheduleShow() {
        var skipDelay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        this.$_hideInProgress = false;
        clearTimeout(this.$_scheduleTimer);
        if (hidingPopper && this.instantMove && hidingPopper.instantMove) {
          hidingPopper.$_applyHide(true);
          this.$_applyShow(true);
          return;
        }
        if (skipDelay) {
          this.$_applyShow();
        } else {
          this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
        }
      },
      $_scheduleHide: function $_scheduleHide() {
        var skipDelay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        this.$_hideInProgress = true;
        clearTimeout(this.$_scheduleTimer);
        if (this.isShown) {
          hidingPopper = this;
        }
        if (skipDelay) {
          this.$_applyHide();
        } else {
          this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
        }
      },
      $_computeDelay: function $_computeDelay(type) {
        var delay = this.delay;
        return parseInt(delay && delay[type] || delay || 0);
      },
      $_applyShow: function $_applyShow() {
        var _arguments = arguments, _this6 = this;
        return _asyncToGenerator(function* () {
          var skipTransition = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : false;
          clearTimeout(_this6.$_disposeTimer);
          clearTimeout(_this6.$_scheduleTimer);
          _this6.skipTransition = skipTransition;
          if (_this6.isShown) {
            return;
          }
          if (!_this6.isMounted) {
            _this6.$_ensureContainer();
            _this6.isMounted = true;
          }
          if (!_this6.popperInstance) {
            _this6.popperInstance = createPopper(_this6.referenceNode(), _this6.$_popperNode, _this6.$_getPopperOptions());
          } else {
            yield _this6.popperInstance.update();
            yield _this6.$_refreshPopperOptions();
            yield _this6.$_applyShowEffect();
          }
        })();
      },
      $_applyShowEffect: function $_applyShowEffect() {
        var _this7 = this;
        return _asyncToGenerator(function* () {
          if (_this7.$_hideInProgress)
            return;
          var _referenceBounds;
          var getReferenceBounds = function getReferenceBounds2() {
            return _referenceBounds || (_referenceBounds = _this7.referenceNode().getBoundingClientRect());
          };
          if (_this7.computeTransformOrigin) {
            var referenceBounds = getReferenceBounds();
            var popperWrapper = _this7.$_popperNode.querySelector(".v-popper__wrapper");
            var parentBounds = popperWrapper.parentNode.getBoundingClientRect();
            var x = referenceBounds.left + referenceBounds.width / 2 - (parentBounds.left + popperWrapper.offsetLeft);
            var y = referenceBounds.top + referenceBounds.height / 2 - (parentBounds.top + popperWrapper.offsetTop);
            popperWrapper.style.transformOrigin = "".concat(x, "px ").concat(y, "px");
          }
          if (_this7.autoMinSize) {
            var _referenceBounds2 = getReferenceBounds();
            var popperInner = _this7.$_popperNode.querySelector(".v-popper__inner");
            var _this7$$_popperNode$d = _this7.$_popperNode.dataset.popperPlacement.split("-"), _this7$$_popperNode$d2 = _slicedToArray(_this7$$_popperNode$d, 1), mainPosition = _this7$$_popperNode$d2[0];
            if (mainPosition === "left" || mainPosition === "right") {
              popperInner.style.minHeight = "".concat(_referenceBounds2.height, "px");
            } else {
              popperInner.style.minWidth = "".concat(_referenceBounds2.width, "px");
            }
          }
          _this7.isShown = true;
          _this7.$_applyAttrsToTarget({
            "aria-describedby": _this7.popperId,
            "data-popper-shown": ""
          });
          var showGroup = _this7.showGroup;
          if (showGroup) {
            var popover;
            for (var i = 0; i < shownPoppers.length; i++) {
              popover = shownPoppers[i];
              if (popover.showGroup !== showGroup) {
                popover.hide();
                popover.$emit("close-group");
              }
            }
          }
          shownPoppers.push(_this7);
          _this7.$emit("apply-show");
          _this7.$_popperNode.setAttribute("data-popper-placement", _this7.popperInstance.state.placement);
          _this7.classes.showFrom = true;
          _this7.classes.showTo = false;
          _this7.classes.hideFrom = false;
          _this7.classes.hideTo = false;
          yield nextFrame();
          _this7.classes.showFrom = false;
          _this7.classes.showTo = true;
        })();
      },
      $_applyHide: function $_applyHide() {
        var _arguments2 = arguments, _this8 = this;
        return _asyncToGenerator(function* () {
          var skipTransition = _arguments2.length > 0 && _arguments2[0] !== void 0 ? _arguments2[0] : false;
          clearTimeout(_this8.$_scheduleTimer);
          if (!_this8.isShown) {
            return;
          }
          _this8.skipTransition = skipTransition;
          removeFromArray(shownPoppers, _this8);
          if (hidingPopper === _this8) {
            hidingPopper = null;
          }
          _this8.isShown = false;
          if (_this8.popperInstance) {
            yield _this8.$_refreshPopperOptions();
          }
          _this8.$_applyAttrsToTarget({
            "aria-describedby": void 0,
            "data-popper-shown": void 0
          });
          clearTimeout(_this8.$_disposeTimer);
          var disposeTime = getDefaultConfig(_this8.theme, "disposeTimeout");
          if (disposeTime !== null) {
            _this8.$_disposeTimer = setTimeout(function() {
              if (_this8.$_popperNode) {
                _this8.$_detachPopperNode();
                _this8.isMounted = false;
              }
            }, disposeTime);
          }
          _this8.$emit("apply-hide");
          _this8.classes.showFrom = false;
          _this8.classes.showTo = false;
          _this8.classes.hideFrom = true;
          _this8.classes.hideTo = false;
          yield nextFrame();
          _this8.classes.hideFrom = false;
          _this8.classes.hideTo = true;
        })();
      },
      $_autoShowHide: function $_autoShowHide() {
        if (this.shown) {
          this.show();
        } else {
          this.hide();
        }
      },
      $_ensureContainer: function $_ensureContainer() {
        var container = this.container;
        if (typeof container === "string") {
          container = window.document.querySelector(container);
        } else if (container === false) {
          container = this.$_targetNodes[0].parentNode;
        }
        if (!container) {
          throw new Error("No container for popover: " + this.container);
        }
        container.appendChild(this.$_popperNode);
      },
      $_addEventListeners: function $_addEventListeners() {
        var _this9 = this;
        var addEvents = function addEvents2(targetNodes, eventMap, commonTriggers, customTrigger, handler2) {
          var triggers = commonTriggers;
          if (customTrigger != null) {
            triggers = typeof customTrigger === "function" ? customTrigger(triggers) : customTrigger;
          }
          triggers.forEach(function(trigger) {
            var eventType = eventMap[trigger];
            if (eventType) {
              _this9.$_events.push({
                targetNodes,
                eventType,
                handler: handler2
              });
              targetNodes.forEach(function(node) {
                return node.addEventListener(eventType, handler2, supportsPassive ? {
                  passive: true
                } : void 0);
              });
            }
          });
        };
        var handleShow = function handleShow2(event) {
          if (_this9.isShown && !_this9.$_hideInProgress) {
            return;
          }
          event.usedByTooltip = true;
          !_this9.$_preventShow && _this9.show({
            event
          });
        };
        addEvents(this.$_targetNodes, SHOW_EVENT_MAP, this.triggers, this.showTriggers, handleShow);
        addEvents([this.$_popperNode], SHOW_EVENT_MAP, this.popperTriggers, this.popperShowTriggers, handleShow);
        var handleHide = function handleHide2(event) {
          if (event.usedByTooltip) {
            return;
          }
          _this9.hide({
            event
          });
        };
        addEvents(this.$_targetNodes, HIDE_EVENT_MAP, this.triggers, this.hideTriggers, handleHide);
        addEvents([this.$_popperNode], HIDE_EVENT_MAP, this.popperTriggers, this.popperHideTriggers, handleHide);
      },
      $_removeEventListeners: function $_removeEventListeners() {
        this.$_events.forEach(function(_ref3) {
          var targetNodes = _ref3.targetNodes, eventType = _ref3.eventType, handler2 = _ref3.handler;
          targetNodes.forEach(function(node) {
            return node.removeEventListener(eventType, handler2);
          });
        });
        this.$_events = [];
      },
      $_handleGlobalClose: function $_handleGlobalClose(event) {
        var _this10 = this;
        var touch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (this.$_showFrameLocked)
          return;
        this.hide({
          event
        });
        if (event.closePopover) {
          this.$emit("close-directive");
        } else {
          this.$emit("auto-hide");
        }
        if (touch) {
          this.$_preventShow = true;
          setTimeout(function() {
            _this10.$_preventShow = false;
          }, 300);
        }
      },
      $_handleGlobalResize: function $_handleGlobalResize(event) {
        var _this11 = this;
        return _asyncToGenerator(function* () {
          if (_this11.popperInstance) {
            yield _this11.popperInstance.update();
          }
        })();
      },
      $_detachPopperNode: function $_detachPopperNode() {
        this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      },
      $_swapTargetAttrs: function $_swapTargetAttrs(attrFrom, attrTo) {
        var _iterator = _createForOfIteratorHelper(this.$_targetNodes), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var el = _step.value;
            var value = el.getAttribute(attrFrom);
            if (value) {
              el.removeAttribute(attrFrom);
              el.setAttribute(attrTo, value);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      $_applyAttrsToTarget: function $_applyAttrsToTarget(attrs) {
        var _iterator2 = _createForOfIteratorHelper(this.$_targetNodes), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var el = _step2.value;
            for (var n in attrs) {
              var value = attrs[n];
              if (value == null) {
                el.removeAttribute(n);
              } else {
                el.setAttribute(n, value);
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    },
    render: function render2() {
      return this.$slots.default(this.slotData);
    }
  };
};
if (typeof document !== "undefined" && typeof window !== "undefined") {
  if (isIOS) {
    document.addEventListener("touchstart", handleGlobalMousedown, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
    document.addEventListener("touchend", handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
  } else {
    window.addEventListener("mousedown", handleGlobalMousedown, true);
    window.addEventListener("click", handleGlobalClick, true);
  }
  window.addEventListener("resize", handleGlobalResize);
}
function handleGlobalMousedown(event) {
  for (var i = 0; i < shownPoppers.length; i++) {
    var popper2 = shownPoppers[i];
    var popperContent = popper2.popperNode();
    popper2.$_mouseDownContains = popperContent.contains(event.target);
  }
}
function handleGlobalClick(event) {
  handleGlobalClose(event);
}
function handleGlobalTouchend(event) {
  handleGlobalClose(event, true);
}
function handleGlobalClose(event) {
  var touch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var _loop = function _loop2(i2) {
    var popper2 = shownPoppers[i2];
    var popperContent = popper2.popperNode();
    var contains2 = popper2.$_mouseDownContains || popperContent.contains(event.target);
    requestAnimationFrame(function() {
      if (event.closeAllPopover || event.closePopover && contains2 || popper2.autoHide && !contains2) {
        popper2.$_handleGlobalClose(event, touch);
      }
    });
  };
  for (var i = 0; i < shownPoppers.length; i++) {
    _loop(i);
  }
}
function handleGlobalResize(event) {
  for (var i = 0; i < shownPoppers.length; i++) {
    var popper2 = shownPoppers[i];
    popper2.$_handleGlobalResize(event);
  }
}
function nextFrame() {
  return new Promise(function(resolve) {
    return requestAnimationFrame(function() {
      requestAnimationFrame(resolve);
    });
  });
}
var PrivateThemeClass = {
  computed: {
    themeClass: function themeClass() {
      return getThemeClasses(this.theme);
    }
  }
};
var script$5 = {
  name: "VPopperContent",
  components: {
    ResizeObserver: script$6
  },
  mixins: [PrivateThemeClass],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object
  },
  emits: ["hide", "resize"]
};
var _hoisted_1$1 = ["id", "aria-hidden", "tabindex"];
var _hoisted_2$1 = {
  class: "v-popper__wrapper"
};
var _hoisted_3 = {
  ref: "inner",
  class: "v-popper__inner"
};
var _hoisted_4 = {
  ref: "arrow",
  class: "v-popper__arrow-container"
};
var _hoisted_5 = /* @__PURE__ */ createElementVNode(
  "div",
  {
    class: "v-popper__arrow-outer"
  },
  null,
  -1
);
var _hoisted_6 = /* @__PURE__ */ createElementVNode(
  "div",
  {
    class: "v-popper__arrow-inner"
  },
  null,
  -1
);
var _hoisted_7 = [_hoisted_5, _hoisted_6];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ResizeObserver = resolveComponent("ResizeObserver");
  return openBlock(), createElementBlock(
    "div",
    {
      id: $props.popperId,
      ref: "popover",
      class: normalizeClass(["v-popper__popper", [_ctx.themeClass, $props.classes.popperClass, {
        "v-popper__popper--shown": $props.shown,
        "v-popper__popper--hidden": !$props.shown,
        "v-popper__popper--show-from": $props.classes.showFrom,
        "v-popper__popper--show-to": $props.classes.showTo,
        "v-popper__popper--hide-from": $props.classes.hideFrom,
        "v-popper__popper--hide-to": $props.classes.hideTo,
        "v-popper__popper--skip-transition": $props.skipTransition
      }]]),
      "aria-hidden": $props.shown ? "false" : "true",
      tabindex: $props.autoHide ? 0 : void 0,
      onKeyup: _cache[1] || (_cache[1] = withKeys(function($event) {
        return $props.autoHide && _ctx.$emit("hide");
      }, ["esc"]))
    },
    [createElementVNode("div", _hoisted_2$1, [createElementVNode(
      "div",
      _hoisted_3,
      [$props.mounted ? (openBlock(), createElementBlock(
        Fragment,
        {
          key: 0
        },
        [createElementVNode("div", null, [renderSlot(_ctx.$slots, "default")]), $props.handleResize ? (openBlock(), createBlock(_component_ResizeObserver, {
          key: 0,
          onNotify: _cache[0] || (_cache[0] = function($event) {
            return _ctx.$emit("resize", $event);
          })
        })) : createCommentVNode("v-if", true)],
        64
      )) : createCommentVNode("v-if", true)],
      512
    ), createElementVNode(
      "div",
      _hoisted_4,
      _hoisted_7,
      512
    )])],
    42,
    _hoisted_1$1
  );
}
script$5.render = render$2;
script$5.__file = "src/components/PopperContent.vue";
var PrivatePopperMethods = {
  methods: {
    show: function show() {
      var _this$$refs$popper;
      return (_this$$refs$popper = this.$refs.popper).show.apply(_this$$refs$popper, arguments);
    },
    hide: function hide2() {
      var _this$$refs$popper2;
      return (_this$$refs$popper2 = this.$refs.popper).hide.apply(_this$$refs$popper2, arguments);
    },
    dispose: function dispose() {
      var _this$$refs$popper3;
      return (_this$$refs$popper3 = this.$refs.popper).dispose.apply(_this$$refs$popper3, arguments);
    },
    onResize: function onResize() {
      var _this$$refs$popper4;
      return (_this$$refs$popper4 = this.$refs.popper).onResize.apply(_this$$refs$popper4, arguments);
    }
  }
};
var script$4 = {
  name: "VPopperWrapper",
  components: {
    Popper: PrivatePopper(),
    PopperContent: script$5
  },
  mixins: [PrivatePopperMethods, PrivateThemeClass],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: null
    }
  },
  computed: {
    finalTheme: function finalTheme() {
      var _this$theme;
      return (_this$theme = this.theme) !== null && _this$theme !== void 0 ? _this$theme : this.$options.vPopperTheme;
    },
    popperAttrs: function popperAttrs() {
      var result = _objectSpread2({}, this.$attrs);
      delete result.class;
      delete result.style;
      return result;
    }
  },
  methods: {
    getTargetNodes: function getTargetNodes() {
      var children = _toConsumableArray(this.$refs.reference.children);
      return children.slice(0, children.length - 1).filter(Boolean);
    }
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PopperContent = resolveComponent("PopperContent");
  var _component_Popper = resolveComponent("Popper");
  return openBlock(), createBlock(
    _component_Popper,
    mergeProps({
      ref: "popper"
    }, $options.popperAttrs, {
      theme: $options.finalTheme,
      "target-nodes": $options.getTargetNodes,
      "reference-node": function referenceNode() {
        return _ctx.$refs.reference;
      },
      "popper-node": function popperNode() {
        return _ctx.$refs.popperContent.$el;
      },
      "arrow-node": function arrowNode() {
        return _ctx.$refs.popperContent.$refs.arrow;
      }
    }),
    {
      default: withCtx(function(_ref) {
        var popperId = _ref.popperId, isShown = _ref.isShown, shouldMountContent = _ref.shouldMountContent, skipTransition = _ref.skipTransition, autoHide = _ref.autoHide, show2 = _ref.show, hide3 = _ref.hide, handleResize = _ref.handleResize, onResize2 = _ref.onResize, classes = _ref.classes;
        return [createElementVNode(
          "div",
          {
            ref: "reference",
            class: normalizeClass(["v-popper", [_ctx.$attrs.class, _ctx.themeClass, {
              "v-popper--shown": isShown
            }]]),
            style: normalizeStyle(_ctx.$attrs.style)
          },
          [renderSlot(_ctx.$slots, "default", {
            shown: isShown,
            show: show2,
            hide: hide3
          }), createVNode(
            _component_PopperContent,
            {
              ref: "popperContent",
              "popper-id": popperId,
              theme: $options.finalTheme,
              shown: isShown,
              mounted: shouldMountContent,
              "skip-transition": skipTransition,
              "auto-hide": autoHide,
              "handle-resize": handleResize,
              classes,
              onHide: hide3,
              onResize: onResize2
            },
            {
              default: withCtx(function() {
                return [renderSlot(_ctx.$slots, "popper", {
                  shown: isShown,
                  hide: hide3
                })];
              }),
              _: 2
            },
            1032,
            ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "onHide", "onResize"]
          )],
          6
        )];
      }),
      _: 3
    },
    16,
    ["theme", "target-nodes", "reference-node", "popper-node", "arrow-node"]
  );
}
script$4.render = render$1;
script$4.__file = "src/components/PopperWrapper.vue";
var script$3 = _objectSpread2(_objectSpread2({}, script$4), {}, {
  name: "VDropdown",
  vPopperTheme: "dropdown"
});
script$3.__file = "src/components/Dropdown.vue";
var script$2 = _objectSpread2(_objectSpread2({}, script$4), {}, {
  name: "VMenu",
  vPopperTheme: "menu"
});
script$2.__file = "src/components/Menu.vue";
var script$1 = _objectSpread2(_objectSpread2({}, script$4), {}, {
  name: "VTooltip",
  vPopperTheme: "tooltip"
});
script$1.__file = "src/components/Tooltip.vue";
var script = {
  name: "VTooltipDirective",
  components: {
    Popper: PrivatePopper(),
    PopperContent: script$5
  },
  mixins: [PrivatePopperMethods],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: function _default(props) {
        return getDefaultConfig(props.theme, "html");
      }
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: function _default2(props) {
        return getDefaultConfig(props.theme, "loadingContent");
      }
    }
  },
  data: function data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync: function isContentAsync() {
      return typeof this.content === "function";
    },
    loading: function loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent: function finalContent() {
      if (this.isContentAsync) {
        return this.loading ? this.loadingContent : this.asyncContent;
      }
      return this.content;
    }
  },
  watch: {
    content: {
      handler: function handler() {
        this.fetchContent(true);
      },
      immediate: true
    },
    finalContent: function finalContent2(value) {
      var _this = this;
      this.$nextTick(function() {
        _this.$refs.popper.onResize();
      });
    }
  },
  created: function created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent: function fetchContent(force) {
      var _this2 = this;
      if (typeof this.content === "function" && this.$_isShown && (force || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null;
        this.$_loading = true;
        var fetchId = ++this.$_fetchId;
        var result = this.content(this);
        if (result.then) {
          result.then(function(res) {
            return _this2.onResult(fetchId, res);
          });
        } else {
          this.onResult(fetchId, result);
        }
      }
    },
    onResult: function onResult(fetchId, result) {
      if (fetchId !== this.$_fetchId)
        return;
      this.$_loading = false;
      this.asyncContent = result;
    },
    onShow: function onShow() {
      this.$_isShown = true;
      this.fetchContent();
    },
    onHide: function onHide() {
      this.$_isShown = false;
    }
  }
};
var _hoisted_1 = ["innerHTML"];
var _hoisted_2 = ["textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PopperContent = resolveComponent("PopperContent");
  var _component_Popper = resolveComponent("Popper");
  return openBlock(), createBlock(
    _component_Popper,
    mergeProps({
      ref: "popper"
    }, _ctx.$attrs, {
      theme: $props.theme,
      "popper-node": function popperNode() {
        return _ctx.$refs.popperContent.$el;
      },
      "arrow-node": function arrowNode() {
        return _ctx.$refs.popperContent.$refs.arrow;
      },
      onApplyShow: $options.onShow,
      onApplyHide: $options.onHide
    }),
    {
      default: withCtx(function(_ref) {
        var popperId = _ref.popperId, isShown = _ref.isShown, shouldMountContent = _ref.shouldMountContent, skipTransition = _ref.skipTransition, autoHide = _ref.autoHide, hide3 = _ref.hide, handleResize = _ref.handleResize, onResize2 = _ref.onResize, classes = _ref.classes;
        return [createVNode(
          _component_PopperContent,
          {
            ref: "popperContent",
            class: normalizeClass({
              "v-popper--tooltip-loading": $options.loading
            }),
            "popper-id": popperId,
            theme: $props.theme,
            shown: isShown,
            mounted: shouldMountContent,
            "skip-transition": skipTransition,
            "auto-hide": autoHide,
            "handle-resize": handleResize,
            classes,
            onHide: hide3,
            onResize: onResize2
          },
          {
            default: withCtx(function() {
              return [$props.html ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  innerHTML: $options.finalContent
                },
                null,
                8,
                _hoisted_1
              )) : (openBlock(), createElementBlock(
                "div",
                {
                  key: 1,
                  textContent: toDisplayString($options.finalContent)
                },
                null,
                8,
                _hoisted_2
              ))];
            }),
            _: 2
          },
          1032,
          ["class", "popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "onHide", "onResize"]
        )];
      }),
      _: 1
    },
    16,
    ["theme", "popper-node", "arrow-node", "onApplyShow", "onApplyHide"]
  );
}
script.render = render;
script.__file = "src/components/TooltipDirective.vue";
var TARGET_CLASS = "v-popper--has-tooltip";
function getPlacement(options, modifiers) {
  var result = options.placement;
  if (!result && modifiers) {
    var _iterator = _createForOfIteratorHelper(placements), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var pos = _step.value;
        if (modifiers[pos]) {
          result = pos;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (!result) {
    result = getDefaultConfig(options.theme || "tooltip", "placement");
  }
  return result;
}
function getOptions(el, value, modifiers) {
  var options;
  var type = _typeof(value);
  if (type === "string") {
    options = {
      content: value
    };
  } else if (value && type === "object") {
    options = value;
  } else {
    options = {
      content: false
    };
  }
  options.placement = getPlacement(options, modifiers);
  options.targetNodes = function() {
    return [el];
  };
  options.referenceNode = function() {
    return el;
  };
  return options;
}
function createTooltip(el, value, modifiers) {
  var options = ref(getOptions(el, value, modifiers));
  var component = ref();
  var tooltipApp = createApp({
    name: "VTooltipDirective",
    setup: function setup() {
      return {
        options,
        tooltip: component
      };
    },
    render: function render2() {
      return h(script, _objectSpread2(_objectSpread2({}, this.options), {}, {
        ref: "tooltip"
      }));
    },
    devtools: {
      hide: true
    }
  });
  var mountTarget = document.createElement("div");
  document.body.appendChild(mountTarget);
  tooltipApp.mount(mountTarget);
  el.$_popperMountTarget = mountTarget;
  if (el.classList) {
    el.classList.add(TARGET_CLASS);
  }
  var result = el.$_popper = {
    app: tooltipApp,
    options,
    component,
    show: function show2() {
      component.value.show();
    },
    hide: function hide3() {
      component.value.hide();
    }
  };
  return result;
}
function destroyTooltip(el) {
  if (el.$_popper) {
    el.$_popper.app.unmount();
    if (el.$_popperMountTarget.parentElement) {
      el.$_popperMountTarget.parentElement.removeChild(el.$_popperMountTarget);
    }
    delete el.$_popper;
    delete el.$_popperOldShown;
    delete el.$_popperMountTarget;
  }
  if (el.classList) {
    el.classList.remove(TARGET_CLASS);
  }
}
function bind(el, _ref) {
  var value = _ref.value, modifiers = _ref.modifiers;
  var options = getOptions(el, value, modifiers);
  if (!options.content || getDefaultConfig(options.theme || "tooltip", "disabled")) {
    destroyTooltip(el);
  } else {
    var tooltipApp;
    if (el.$_popper) {
      tooltipApp = el.$_popper;
      tooltipApp.options.value = options;
    } else {
      tooltipApp = createTooltip(el, value, modifiers);
    }
    if (typeof value.shown !== "undefined" && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown;
      value.shown ? tooltipApp.show() : tooltipApp.hide();
    }
  }
}
var PrivateVTooltip = {
  beforeMount: bind,
  updated: bind,
  beforeUnmount: function beforeUnmount(el) {
    destroyTooltip(el);
  }
};
function addListeners(el) {
  el.addEventListener("click", onClick);
  el.addEventListener("touchstart", onTouchStart, supportsPassive ? {
    passive: true
  } : false);
}
function removeListeners(el) {
  el.removeEventListener("click", onClick);
  el.removeEventListener("touchstart", onTouchStart);
  el.removeEventListener("touchend", onTouchEnd);
  el.removeEventListener("touchcancel", onTouchCancel);
}
function onClick(event) {
  var el = event.currentTarget;
  event.closePopover = !el.$_vclosepopover_touch;
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}
function onTouchStart(event) {
  if (event.changedTouches.length === 1) {
    var el = event.currentTarget;
    el.$_vclosepopover_touch = true;
    var touch = event.changedTouches[0];
    el.$_vclosepopover_touchPoint = touch;
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchCancel);
  }
}
function onTouchEnd(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
  if (event.changedTouches.length === 1) {
    var touch = event.changedTouches[0];
    var firstTouch = el.$_vclosepopover_touchPoint;
    event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }
}
function onTouchCancel(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
}
var PrivateVClosePopper = {
  beforeMount: function beforeMount(el, _ref) {
    var value = _ref.value, modifiers = _ref.modifiers;
    el.$_closePopoverModifiers = modifiers;
    if (typeof value === "undefined" || value) {
      addListeners(el);
    }
  },
  updated: function updated(el, _ref2) {
    var value = _ref2.value, oldValue = _ref2.oldValue, modifiers = _ref2.modifiers;
    el.$_closePopoverModifiers = modifiers;
    if (value !== oldValue) {
      if (typeof value === "undefined" || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  beforeUnmount: function beforeUnmount2(el) {
    removeListeners(el);
  }
};
function install(app) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (app.$_vTooltipInstalled)
    return;
  app.$_vTooltipInstalled = true;
  assign(config, options);
  app.directive("tooltip", PrivateVTooltip);
  app.directive("close-popper", PrivateVClosePopper);
  app.component("v-tooltip", script$1);
  app.component("VTooltip", script$1);
  app.component("v-dropdown", script$3);
  app.component("VDropdown", script$3);
  app.component("v-menu", script$2);
  app.component("VMenu", script$2);
}
var plugin = {
  version: "4.0.0-beta.17",
  install,
  options: config
};
var vTooltip = "";
var tinyEmitter = { exports: {} };
function E$1() {
}
E$1.prototype = {
  on: function(name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx
    });
    return this;
  },
  once: function(name, callback, ctx) {
    var self2 = this;
    function listener() {
      self2.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data2 = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data2);
    }
    return this;
  },
  off: function(name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }
    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
tinyEmitter.exports = E$1;
tinyEmitter.exports.TinyEmitter = E$1;
var E = tinyEmitter.exports;
var instance = new E();
var emitter = {
  $on: (...args) => instance.on(...args),
  $once: (...args) => instance.once(...args),
  $off: (...args) => instance.off(...args),
  $emit: (...args) => instance.emit(...args)
};
const defaultComponentName = "BeautifulChat";
const VueBeatifulChat = {
  install(app, options = {}) {
    if (this.installed || app.prototype && app.prototype.$isServer) {
      return;
    }
    this.installed = true;
    app.config.globalProperties.$event = emitter;
    this.componentName = options.componentName || defaultComponentName;
    app.component(this.componentName, Launcher);
    app.use(plugin);
  }
};
export { VueBeatifulChat as default };
