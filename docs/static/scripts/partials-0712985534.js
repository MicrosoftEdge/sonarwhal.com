window.ejsPartials=window.ejsPartials||{},window.ejsPartials["scan-result-item"]=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{})__append('<details open class="rule-result--details" id="'),__append(escapeFn(hint.name)),__append('" aria-expanded="true" role="group">\n    <summary class="rule-title" title="'),__append(escapeFn(getMessage("showHintResultDetails",hint.name))),__append('" role="button">'),__append(escapeFn(hint.name)),__append(": "),__append(escapeFn(hint.count)),__append(" "),__append(escapeFn(getMessage("hints"))),__append('</summary>\n    <div class="rule-content">\n        '),hint.hasDoc&&(__append('\n        <div class="rule-doc-buttons">\n            <a class="rule-doc-button" rel="noopener noreferrer" target="_blank" href="https://webhint.io/docs/user-guide/hints/hint-'),__append(escapeFn(hint.name)),__append('/#why-is-this-important"\n                title="'),__append(escapeFn(hint.name)),__append(" - "),__append(escapeFn(getMessage("whyIsThisImportant"))),__append('">\n                '),__append(escapeFn(getMessage("whyIsThisImportant"))),__append(' <span class="rule-doc-icon"></span>\n            </a>\n\n            <a class="rule-doc-button" rel="noopener noreferrer" target="_blank" href="https://webhint.io/docs/user-guide/hints/hint-'),__append(escapeFn(hint.name)),__append('/#examples-that-pass-the-hint"\n                title="'),__append(escapeFn(hint.name)),__append(" - "),__append(escapeFn(getMessage("howToFixIt"))),__append('">\n                '),__append(escapeFn(getMessage("howToFixIt"))),__append(' <span class="rule-doc-icon"></span>\n            </a>\n        </div>\n        ')),__append("\n        "),hint.problems.forEach((function(e,n){__append('\n            <div class="rule-result--details__body">\n                <p id="hint-'),__append(escapeFn(hint.name)),__append("-"),__append(escapeFn(n+1)),__append('">\n                    <span class="rule-result--details__hint-number">'),__append(escapeFn(getMessage("hintNumber",n+1))),__append(":</span> "),__append(escapeFn(utils.linkify(e.message))),__append(' <a href="#hint-'),__append(escapeFn(hint.name)),__append("-"),__append(escapeFn(n+1)),__append('" class="hint-link" title="'),__append(escapeFn(hint.name)),__append(": "),__append(escapeFn(getMessage("hintNumber",n+1))),__append('"></a>\n                </p>\n                '),e.resource&&(__append('\n                <p>\n                    <a class="rule-result--details__hint-link" target="_blank" rel="noopener noreferrer" href="'),__append(escapeFn(e.resource)),__append('">\n                        '),__append(escapeFn(utils.cutUrlString(e.resource))),__append("\n                    </a>\n                </p>\n                ")),__append("\n                "),e.sourceCode&&(__append('\n                <div class="rule-result__code">\n                    <code class="'),__append(escapeFn(e.codeLanguage)),__append('">'),__append(escapeFn(utils.cutCodeString(e.sourceCode))),__append("</code>\n                </div>\n                ")),__append("\n                "),e.documentation&&(__append('\n                <div class="rule-result__doc">\n                    <h4>'),__append(escapeFn(getMessage("furtherReading"))),__append('</h4>\n                    <ul class="rule-result__doc--list">\n                        '),e.documentation.forEach((function(e){__append('\n                            <li><a href="'),__append(escapeFn(e.link)),__append('" target="_blank" rel="noopener noreferrer">'),__append(escapeFn(e.text)),__append("</a></li>\n                        ")})),__append("\n                    </ul>\n                </div>\n                ")),__append("\n            </div>\n            "),hint.thirdPartyInfo&&(__append('\n                <div class="rule-result--details__footer-msg">\n                    '),hint.thirdPartyInfo.details?(__append("\n                        <p>"),__append(escapeFn(getMessage("toLearnMore"))),__append(" </p>\n                    ")):(__append("\n                        <p>"),__append(escapeFn(getMessage("withTheHelpOf"))),__append(" </p>\n                    ")),__append('\n\n                    <a href="'),__append(escapeFn(hint.thirdPartyInfo.link)),__append('">\n                        <img src="'),__append(escapeFn(isScanner?hint.thirdPartyInfo.logo.url:getDataUri(hint.thirdPartyInfo.logo.url))),__append('" alt="'),__append(escapeFn(hint.thirdPartyInfo.logo.alt)),__append('" class="'),__append(escapeFn(hint.thirdPartyInfo.logo.name)),__append('-logo">\n                    </a>\n                </div>\n            ')),__append("\n        ")})),__append("\n    </div>\n</details>\n");return __output},window.ejsPartials=window.ejsPartials||{},window.ejsPartials["category-pass-message"]=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{})__append('<div class="rule-result--details">\n    <div class="rule-result__message--passed">\n        <p>'),__append(escapeFn(getMessage("noIssues"))),__append("</p>\n    </div>\n</div>\n");return __output},window.ejsPartials=window.ejsPartials||{},window.ejsPartials["scan-error-message"]=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{})__append('<div id="scan-error" class="scan-error">\n    <p>\n        '),__append(escapeFn(getMessage("thereWasAnError"))),__append(" "),result.isScanner?(__append('<a href="/scanner/">'),__append(escapeFn(getMessage("performScan"))),__append("</a>")):__append(escapeFn(getMessage("runWebhintAgain"))),__append("\n    <p>\n</div>\n");return __output},window.ejsPartials=window.ejsPartials||{},window.ejsPartials["scan-expand-all"]=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{})__append('<button title="'),__append(escapeFn(getMessage("expand"))),__append('" class="button-expand-all expanded">'),__append(escapeFn(getMessage("closeAll"))),__append("</button>\n");return __output},window.ejsPartials=window.ejsPartials||{},window.ejsPartials["browser-icon"]=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{})result&&result.status?(__append("\n    "),"error"===result.status||0!==result.hintsCount?(__append('\n        <link rel="icon" href="'),__append(escapeFn(result.isScanner?"/static/images/scan/favicon_failed-13305bf6b9.ico":getDataUri("/static/images/scan/favicon_failed-13305bf6b9.ico"))),__append('">\n    ')):"finished"===result.status?(__append('\n        <link rel="icon" href="'),__append(escapeFn(result.isScanner?"/static/images/scan/favicon_passed-701f9141e2.ico":getDataUri("/static/images/scan/favicon_passed-701f9141e2.ico"))),__append('">\n    ')):(__append('\n        <link rel="icon" href="'),__append(escapeFn(result.isScanner?"/static/images/scan/favicon_pending-a9358b857e.ico":getDataUri("/static/images/scan/favicon_pending-a9358b857e.ico"))),__append('">\n    ')),__append("\n")):(__append('\n    <link rel="icon" href="'),__append(escapeFn(result.isScanner?"/static/images/scan/favicon-32x32-fede2c8c9f.png":getDataUri("/static/images/scan/favicon-32x32-fede2c8c9f.png"))),__append('">\n')),__append("\n");return __output},window.ejsPartials=window.ejsPartials||{},window.ejsPartials["check-mark"]=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(e){return null==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(e){return _ENCODE_HTML_RULES[e]||e}var __output="";function __append(e){null!=e&&(__output+=e)}with(locals||{})__append('<img src="/static/images/scan/results-passed-icon-d12f41eeb3.svg" alt="'),__append(escapeFn(getMessage("passed"))),__append('">\n');return __output},function(){const e=e=>e.split("").reverse().join(""),n=(e,n)=>{const a=/[^a-zA-Z0-9]/g;let p;for(let _=.8*n;_<n;_++)if(a.test(e[_])){p=e.slice(0,_);break}return p=p||e.slice(0,n),p},a=(a,p)=>{if(!a||a.length<2*p)return a;const _=n(a,p),s=n(e(a),p);return`${_} … ${e(s)}`},p="pass",_="pending",s={cutCodeString:e=>a(e,150),cutUrlString:e=>a(e,25),filterErrorsAndWarnings:e=>e?e.hints.filter((e=>e.status!==p)):[],linkify:function(e){const n=/(https?:\/\/[a-zA-Z0-9.\\/?:@\-_=#]+\.[a-zA-Z0-9&.\\/?:@-_=#]*)\s[a-zA-Z]/g.exec(e);if(!n)return e;const a=n.pop();return e.replace(a,`<a href="${a}">${a}</a>`)},noIssues:e=>e.hints.every((e=>e.status===p)),noPending:e=>e.hints.every((e=>e.status!==_)),normalizePosition:e=>e&&-1!==parseInt(e)?`:${e}`:"",passedHints:e=>e?e.hints.filter((e=>e.status===p)):[]};"object"==typeof module&&module.exports?module.exports=s:window.utils=s}();