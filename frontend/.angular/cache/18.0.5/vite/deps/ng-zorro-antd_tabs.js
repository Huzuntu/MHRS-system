import {
  NzDropDownDirective,
  NzDropdownMenuComponent
} from "./chunk-CEDF3WLU.js";
import "./chunk-X2O5V5SC.js";
import {
  A,
  ALT,
  BreakpointObserver,
  CONTROL,
  DOWN_ARROW,
  END,
  ENTER,
  HOME,
  LEFT_ARROW,
  MAC_META,
  META,
  NINE,
  NzMenuDirective,
  NzMenuItemComponent,
  NzMenuModule,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  PAGE_DOWN,
  PAGE_UP,
  RIGHT_ARROW,
  SHIFT,
  SPACE,
  TAB,
  UP_ARROW,
  ViewportRuler,
  Z,
  ZERO,
  hasModifierKey,
  reqAnimFrame,
  tabSwitchMotion
} from "./chunk-MEL3SS2L.js";
import {
  Directionality
} from "./chunk-JZCVAPF5.js";
import {
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  Platform,
  WithConfig,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getShadowRoot,
  normalizePassiveListenerOptions
} from "./chunk-SALIME6K.js";
import {
  PREFIX,
  coerceElement,
  coerceNumberProperty,
  wrapIntoObservable
} from "./chunk-4XF3SIV7.js";
import "./chunk-4EB43WZE.js";
import "./chunk-HQ3Q6YGM.js";
import {
  NavigationEnd,
  Router,
  RouterLink
} from "./chunk-JFSPFT2J.js";
import "./chunk-QZDCQVZ5.js";
import "./chunk-R6V7AAKB.js";
import {
  DOCUMENT,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-ZPJD52OU.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_ID,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  QueryList,
  Self,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  debounceTime,
  delay,
  distinctUntilChanged,
  effect,
  filter,
  first,
  fromEvent,
  inject,
  isSignal,
  map,
  merge,
  of,
  setClassMetadata,
  skip,
  startWith,
  take,
  takeUntil,
  tap,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-FSR74OWJ.js";
import {
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var _MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
};
_MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
  return new (t || _MutationObserverFactory)();
};
_MutationObserverFactory.ɵprov = ɵɵdefineInjectable({
  token: _MutationObserverFactory,
  factory: _MutationObserverFactory.ɵfac,
  providedIn: "root"
});
var MutationObserverFactory = _MutationObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ContentObserver = class _ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    this._observedElements = /* @__PURE__ */ new Map();
    this._ngZone = inject(NgZone);
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
        this._ngZone.run(() => {
          observer.next(records);
        });
      });
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */
  _observeElement(element) {
    return this._ngZone.runOutsideAngular(() => {
      if (!this._observedElements.has(element)) {
        const stream = new Subject();
        const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }
        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }
      return this._observedElements.get(element).stream;
    });
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
};
_ContentObserver.ɵfac = function ContentObserver_Factory(t) {
  return new (t || _ContentObserver)(ɵɵinject(MutationObserverFactory));
};
_ContentObserver.ɵprov = ɵɵdefineInjectable({
  token: _ContentObserver,
  factory: _ContentObserver.ɵfac,
  providedIn: "root"
});
var ContentObserver = _ContentObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MutationObserverFactory
  }], null);
})();
var _CdkObserveContent = class _CdkObserveContent {
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  constructor(_contentObserver, _elementRef) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this.event = new EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
};
_CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
  return new (t || _CdkObserveContent)(ɵɵdirectiveInject(ContentObserver), ɵɵdirectiveInject(ElementRef));
};
_CdkObserveContent.ɵdir = ɵɵdefineDirective({
  type: _CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: [2, "cdkObserveContentDisabled", "disabled", booleanAttribute],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var CdkObserveContent = _CdkObserveContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkObserveContent, [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent",
      standalone: true
    }]
  }], () => [{
    type: ContentObserver
  }, {
    type: ElementRef
  }], {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  });
})();
var _ObserversModule = class _ObserversModule {
};
_ObserversModule.ɵfac = function ObserversModule_Factory(t) {
  return new (t || _ObserversModule)();
};
_ObserversModule.ɵmod = ɵɵdefineNgModule({
  type: _ObserversModule,
  imports: [CdkObserveContent],
  exports: [CdkObserveContent]
});
_ObserversModule.ɵinj = ɵɵdefineInjector({
  providers: [MutationObserverFactory]
});
var ObserversModule = _ObserversModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObserversModule, [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var _AriaDescriber = class _AriaDescriber {
  constructor(_document, _platform) {
    this._platform = _platform;
    this._messageRegistry = /* @__PURE__ */ new Map();
    this._messagesContainer = null;
    this._id = `${nextId++}`;
    this._document = _document;
    this._id = inject(APP_ID) + "-" + nextId++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
};
_AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
  return new (t || _AriaDescriber)(ɵɵinject(DOCUMENT), ɵɵinject(Platform));
};
_AriaDescriber.ɵprov = ɵɵdefineInjectable({
  token: _AriaDescriber,
  factory: _AriaDescriber.ɵfac,
  providedIn: "root"
});
var AriaDescriber = _AriaDescriber;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var ListKeyManager = class {
  constructor(_items, injector) {
    this._items = _items;
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._wrap = false;
    this._letterKeyStream = new Subject();
    this._typeaheadSubscription = Subscription.EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    this._pageUpAndDown = {
      enabled: false,
      delta: 10
    };
    this._skipPredicateFn = (item) => item.disabled;
    this._pressedLetters = [];
    this.tabOut = new Subject();
    this.change = new Subject();
    if (_items instanceof QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe((newItems) => this._itemsChanged(newItems.toArray()));
    } else if (isSignal(_items)) {
      if (!injector && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw new Error("ListKeyManager constructed with a signal must receive an injector");
      }
      this._effectRef = effect(() => this._itemsChanged(_items()), {
        injector
      });
    }
  }
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const items = this._getItemsArray();
      if (items.length > 0 && items.some((item) => typeof item.getLabel !== "function")) {
        throw Error("ListKeyManager items in typeahead mode must implement the `getLabel` method.");
      }
    }
    this._typeaheadSubscription.unsubscribe();
    this._typeaheadSubscription = this._letterKeyStream.pipe(tap((letter) => this._pressedLetters.push(letter)), debounceTime(debounceInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join(""))).subscribe((inputString) => {
      const items = this._getItemsArray();
      for (let i = 1; i < items.length + 1; i++) {
        const index = (this._activeItemIndex + i) % items.length;
        const item = items[index];
        if (!this._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
          this.setActiveItem(index);
          break;
        }
      }
      this._pressedLetters = [];
    });
    return this;
  }
  /** Cancels the current typeahead sequence. */
  cancelTypeahead() {
    this._pressedLetters = [];
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  /**
   * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
   * respectively when the Page-Up or Page-Down key is pressed.
   * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
   * @param delta Whether pressing the Home or End key activates the first/last item.
   */
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = {
      enabled,
      delta
    };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem;
    this.updateActiveItem(item);
    if (this._activeItem !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ["altKey", "ctrlKey", "metaKey", "shiftKey"];
    const isModifierAllowed = modifiers.every((modifier) => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case TAB:
        this.tabOut.next();
        return;
      case DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case PAGE_UP:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case PAGE_DOWN:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || hasModifierKey(event, "shiftKey")) {
          if (event.key && event.key.length === 1) {
            this._letterKeyStream.next(event.key.toLocaleUpperCase());
          } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
            this._letterKeyStream.next(String.fromCharCode(keyCode));
          }
        }
        return;
    }
    this._pressedLetters = [];
    event.preventDefault();
  }
  /** Index of the currently active item. */
  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */
  get activeItem() {
    return this._activeItem;
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Sets the active item to the first enabled item in the list. */
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */
  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */
  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === "number" ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    this._activeItem = activeItem == null ? null : activeItem;
    this._activeItemIndex = index;
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._letterKeyStream.complete();
    this.tabOut.complete();
    this.change.complete();
    this._pressedLetters = [];
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex + delta * i + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  /** Returns the items as an array. */
  _getItemsArray() {
    if (isSignal(this._items)) {
      return this._items();
    }
    return this._items instanceof QueryList ? this._items.toArray() : this._items;
  }
  /** Callback for when the items have changed. */
  _itemsChanged(newItems) {
    if (this._activeItem) {
      const newIndex = newItems.indexOf(this._activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex) {
        this._activeItemIndex = newIndex;
      }
    }
  }
};
var FocusKeyManager = class extends ListKeyManager {
  constructor() {
    super(...arguments);
    this._origin = "program";
  }
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
};
var _InteractivityChecker = class _InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */
  isFocusable(element, config) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
};
_InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
  return new (t || _InteractivityChecker)(ɵɵinject(Platform));
};
_InteractivityChecker.ɵprov = ɵɵdefineInjectable({
  token: _InteractivityChecker,
  factory: _InteractivityChecker.ɵfac,
  providedIn: "root"
});
var InteractivityChecker = _InteractivityChecker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractivityChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }], null);
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    this._hasAttached = false;
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    if (!this._ngZone.isStable) {
      this._ngZone.onStable.pipe(take(1)).subscribe(fn);
    } else {
      if (this._injector) {
        afterNextRender(fn, {
          injector: this._injector
        });
      } else {
        fn();
      }
    }
  }
};
var _FocusTrapFactory = class _FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._injector = inject(Injector);
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
  }
};
_FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
  return new (t || _FocusTrapFactory)(ɵɵinject(InteractivityChecker), ɵɵinject(NgZone), ɵɵinject(DOCUMENT));
};
_FocusTrapFactory.ɵprov = ɵɵdefineInjectable({
  token: _FocusTrapFactory,
  factory: _FocusTrapFactory.ɵfac,
  providedIn: "root"
});
var FocusTrapFactory = _FocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _CdkTrapFocus = class _CdkTrapFocus {
  /** Whether the focus trap is active. */
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  constructor(_elementRef, _focusTrapFactory, _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._previouslyFocusedElement = null;
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
};
_CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
  return new (t || _CdkTrapFocus)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(DOCUMENT));
};
_CdkTrapFocus.ɵdir = ɵɵdefineDirective({
  type: _CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: [2, "cdkTrapFocus", "enabled", booleanAttribute],
    autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
  },
  exportAs: ["cdkTrapFocus"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var CdkTrapFocus = _CdkTrapFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTrapFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  });
})();
var ConfigurableFocusTrap = class extends FocusTrap {
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
    super(_element, _checker, _ngZone, _document, config.defer);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var EventListenerFocusTrapInertStrategy = class {
  constructor() {
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e) => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
var _FocusTrapManager = class _FocusTrapManager {
  constructor() {
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
};
_FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
  return new (t || _FocusTrapManager)();
};
_FocusTrapManager.ɵprov = ɵɵdefineInjectable({
  token: _FocusTrapManager,
  factory: _FocusTrapManager.ɵfac,
  providedIn: "root"
});
var FocusTrapManager = _FocusTrapManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._document = _document;
    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === "boolean") {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
  }
};
_ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
  return new (t || _ConfigurableFocusTrapFactory)(ɵɵinject(InteractivityChecker), ɵɵinject(NgZone), ɵɵinject(FocusTrapManager), ɵɵinject(DOCUMENT), ɵɵinject(FOCUS_TRAP_INERT_STRATEGY, 8));
};
_ConfigurableFocusTrapFactory.ɵprov = ɵɵdefineInjectable({
  token: _ConfigurableFocusTrapFactory,
  factory: _ConfigurableFocusTrapFactory.ɵfac,
  providedIn: "root"
});
var ConfigurableFocusTrapFactory = _ConfigurableFocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: FocusTrapManager
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_TRAP_INERT_STRATEGY]
    }]
  }], null);
})();
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _InputModalityDetector = class _InputModalityDetector {
  /** The most recently detected input modality. */
  get mostRecentModality() {
    return this._modality.value;
  }
  constructor(_platform, ngZone, document2, options) {
    this._platform = _platform;
    this._mostRecentTarget = null;
    this._modality = new BehaviorSubject(null);
    this._lastTouchMs = 0;
    this._onKeydown = (event) => {
      if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next("keyboard");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onMousedown = (event) => {
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onTouchstart = (event) => {
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next("keyboard");
        return;
      }
      this._lastTouchMs = Date.now();
      this._modality.next("touch");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document2.addEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
        document2.addEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
        document2.addEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    if (this._platform.isBrowser) {
      document.removeEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
    }
  }
};
_InputModalityDetector.ɵfac = function InputModalityDetector_Factory(t) {
  return new (t || _InputModalityDetector)(ɵɵinject(Platform), ɵɵinject(NgZone), ɵɵinject(DOCUMENT), ɵɵinject(INPUT_MODALITY_DETECTOR_OPTIONS, 8));
};
_InputModalityDetector.ɵprov = ɵɵdefineInjectable({
  token: _InputModalityDetector,
  factory: _InputModalityDetector.ɵfac,
  providedIn: "root"
});
var InputModalityDetector = _InputModalityDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModalityDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [INPUT_MODALITY_DETECTOR_OPTIONS]
    }]
  }], null);
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var _LiveAnnouncer = class _LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions;
    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  /**
   * Some browsers won't expose the accessibility node of the live announcer element if there is an
   * `aria-modal` and the live announcer is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live announcer element.
   */
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
};
_LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
  return new (t || _LiveAnnouncer)(ɵɵinject(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), ɵɵinject(NgZone), ɵɵinject(DOCUMENT), ɵɵinject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
};
_LiveAnnouncer.ɵprov = ɵɵdefineInjectable({
  token: _LiveAnnouncer,
  factory: _LiveAnnouncer.ɵfac,
  providedIn: "root"
});
var LiveAnnouncer = _LiveAnnouncer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveAnnouncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkAriaLive = class _CdkAriaLive {
  /** The aria-live politeness level to use when announcing messages. */
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = "polite";
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
};
_CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
  return new (t || _CdkAriaLive)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LiveAnnouncer), ɵɵdirectiveInject(ContentObserver), ɵɵdirectiveInject(NgZone));
};
_CdkAriaLive.ɵdir = ɵɵdefineDirective({
  type: _CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: [0, "cdkAriaLive", "politeness"],
    duration: [0, "cdkAriaLiveDuration", "duration"]
  },
  exportAs: ["cdkAriaLive"],
  standalone: true
});
var CdkAriaLive = _CdkAriaLive;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAriaLive, [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LiveAnnouncer
  }, {
    type: ContentObserver
  }, {
    type: NgZone
  }], {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  });
})();
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _FocusMonitor = class _FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector, document2, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    this._origin = null;
    this._windowFocused = false;
    this._originFromTouchInteraction = false;
    this._elementInfo = /* @__PURE__ */ new Map();
    this._monitoredElementCount = 0;
    this._rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
    this._windowFocusListener = () => {
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    this._stopInputModalityDetector = new Subject();
    this._rootNodeFocusAndBlurListener = (event) => {
      const target = _getEventTarget(event);
      for (let element = target; element; element = element.parentElement) {
        if (event.type === "focus") {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    this._document = document2;
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._getDocument();
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._getDocument().activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */
  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(
          modality,
          true
          /* isFromInteraction */
        );
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  /**
   * Returns whether an interaction is likely to have come from the user clicking the `label` of
   * an `input` or `textarea` in order to focus it.
   * @param focusEventTarget Target currently receiving focus.
   */
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
};
_FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
  return new (t || _FocusMonitor)(ɵɵinject(NgZone), ɵɵinject(Platform), ɵɵinject(InputModalityDetector), ɵɵinject(DOCUMENT, 8), ɵɵinject(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
};
_FocusMonitor.ɵprov = ɵɵdefineInjectable({
  token: _FocusMonitor,
  factory: _FocusMonitor.ɵfac,
  providedIn: "root"
});
var FocusMonitor = _FocusMonitor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: InputModalityDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkMonitorFocus = class _CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._focusOrigin = null;
    this.cdkFocusChange = new EventEmitter();
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }
};
_CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
  return new (t || _CdkMonitorFocus)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusMonitor));
};
_CdkMonitorFocus.ɵdir = ɵɵdefineDirective({
  type: _CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  },
  exportAs: ["cdkMonitorFocus"],
  standalone: true
});
var CdkMonitorFocus = _CdkMonitorFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMonitorFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusMonitor
  }], {
    cdkFocusChange: [{
      type: Output
    }]
  });
})();
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var _HighContrastModeDetector = class _HighContrastModeDetector {
  constructor(_platform, document2) {
    this._platform = _platform;
    this._document = document2;
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  /** Gets the current high-contrast-mode for the page. */
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      case "rgb(0,0,0)":
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      case "rgb(255,255,255)":
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
};
_HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
  return new (t || _HighContrastModeDetector)(ɵɵinject(Platform), ɵɵinject(DOCUMENT));
};
_HighContrastModeDetector.ɵprov = ɵɵdefineInjectable({
  token: _HighContrastModeDetector,
  factory: _HighContrastModeDetector.ɵfac,
  providedIn: "root"
});
var HighContrastModeDetector = _HighContrastModeDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighContrastModeDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _A11yModule = class _A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }
};
_A11yModule.ɵfac = function A11yModule_Factory(t) {
  return new (t || _A11yModule)(ɵɵinject(HighContrastModeDetector));
};
_A11yModule.ɵmod = ɵɵdefineNgModule({
  type: _A11yModule,
  imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
  exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
});
_A11yModule.ɵinj = ɵɵdefineInjector({
  imports: [ObserversModule]
});
var A11yModule = _A11yModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(A11yModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }], null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-cdk-resize-observer.mjs
var _NzResizeObserverFactory = class _NzResizeObserverFactory {
  create(callback) {
    return typeof ResizeObserver === "undefined" ? null : new ResizeObserver(callback);
  }
};
_NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) {
  return new (t || _NzResizeObserverFactory)();
};
_NzResizeObserverFactory.ɵprov = ɵɵdefineInjectable({
  token: _NzResizeObserverFactory,
  factory: _NzResizeObserverFactory.ɵfac,
  providedIn: "root"
});
var NzResizeObserverFactory = _NzResizeObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NzResizeObserver = class _NzResizeObserver {
  constructor(nzResizeObserverFactory) {
    this.nzResizeObserverFactory = nzResizeObserverFactory;
    this.observedElements = /* @__PURE__ */ new Map();
  }
  ngOnDestroy() {
    this.observedElements.forEach((_, element) => this.cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this.observeElement(element);
      const subscription = stream.subscribe(observer);
      return () => {
        subscription.unsubscribe();
        this.unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing ResizeObserver if available, or creating a
   * new one if not.
   */
  observeElement(element) {
    if (!this.observedElements.has(element)) {
      const stream = new Subject();
      const observer = this.nzResizeObserverFactory.create((mutations) => stream.next(mutations));
      if (observer) {
        observer.observe(element);
      }
      this.observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this.observedElements.get(element).count++;
    }
    return this.observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
   * observing this element.
   */
  unobserveElement(element) {
    if (this.observedElements.has(element)) {
      this.observedElements.get(element).count--;
      if (!this.observedElements.get(element).count) {
        this.cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying ResizeObserver for the specified element. */
  cleanupObserver(element) {
    if (this.observedElements.has(element)) {
      const {
        observer,
        stream
      } = this.observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this.observedElements.delete(element);
    }
  }
};
_NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) {
  return new (t || _NzResizeObserver)(ɵɵinject(NzResizeObserverFactory));
};
_NzResizeObserver.ɵprov = ɵɵdefineInjectable({
  token: _NzResizeObserver,
  factory: _NzResizeObserver.ɵfac,
  providedIn: "root"
});
var NzResizeObserver = _NzResizeObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NzResizeObserverFactory
  }], null);
})();
var _NzResizeObserverDirective = class _NzResizeObserverDirective {
  subscribe() {
    this.unsubscribe();
    this.currentSubscription = this.nzResizeObserver.observe(this.elementRef).subscribe(this.nzResizeObserve);
  }
  unsubscribe() {
    this.currentSubscription?.unsubscribe();
  }
  constructor(nzResizeObserver, elementRef) {
    this.nzResizeObserver = nzResizeObserver;
    this.elementRef = elementRef;
    this.nzResizeObserve = new EventEmitter();
    this.nzResizeObserverDisabled = false;
    this.currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this.currentSubscription && !this.nzResizeObserverDisabled) {
      this.subscribe();
    }
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  ngOnChanges(changes) {
    const {
      nzResizeObserve
    } = changes;
    if (nzResizeObserve) {
      if (this.nzResizeObserverDisabled) {
        this.unsubscribe();
      } else {
        this.subscribe();
      }
    }
  }
};
_NzResizeObserverDirective.ɵfac = function NzResizeObserverDirective_Factory(t) {
  return new (t || _NzResizeObserverDirective)(ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(ElementRef));
};
_NzResizeObserverDirective.ɵdir = ɵɵdefineDirective({
  type: _NzResizeObserverDirective,
  selectors: [["", "nzResizeObserver", ""]],
  inputs: {
    nzResizeObserverDisabled: [2, "nzResizeObserverDisabled", "nzResizeObserverDisabled", booleanAttribute]
  },
  outputs: {
    nzResizeObserve: "nzResizeObserve"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([NzResizeObserverFactory]), ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
});
var NzResizeObserverDirective = _NzResizeObserverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverDirective, [{
    type: Directive,
    args: [{
      selector: "[nzResizeObserver]",
      standalone: true,
      providers: [NzResizeObserverFactory]
    }]
  }], () => [{
    type: NzResizeObserver
  }, {
    type: ElementRef
  }], {
    nzResizeObserve: [{
      type: Output
    }],
    nzResizeObserverDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _NzResizeObserverModule = class _NzResizeObserverModule {
};
_NzResizeObserverModule.ɵfac = function NzResizeObserverModule_Factory(t) {
  return new (t || _NzResizeObserverModule)();
};
_NzResizeObserverModule.ɵmod = ɵɵdefineNgModule({
  type: _NzResizeObserverModule,
  imports: [NzResizeObserverDirective],
  exports: [NzResizeObserverDirective]
});
_NzResizeObserverModule.ɵinj = ɵɵdefineInjector({});
var NzResizeObserverModule = _NzResizeObserverModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverModule, [{
    type: NgModule,
    args: [{
      imports: [NzResizeObserverDirective],
      exports: [NzResizeObserverDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tabs.mjs
function NzTabAddButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("nzType", icon_r1);
  }
}
var _c0 = () => ({
  minWidth: "46px"
});
var _c1 = () => ({
  visible: false
});
function NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r3.tab.label, " ");
  }
}
function NzTabNavOperationComponent_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8);
    ɵɵlistener("click", function NzTabNavOperationComponent_ul_5_li_1_Template_li_click_0_listener() {
      const item_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onSelect(item_r3));
    })("contextmenu", function NzTabNavOperationComponent_ul_5_li_1_Template_li_contextmenu_0_listener($event) {
      const item_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onContextmenu(item_r3, $event));
    });
    ɵɵtemplate(1, NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵclassProp("ant-tabs-dropdown-menu-item-disabled", item_r3.disabled);
    ɵɵproperty("nzSelected", item_r3.active)("nzDisabled", item_r3.disabled);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", item_r3.tab.label)("nzStringTemplateOutletContext", ɵɵpureFunction0(6, _c1));
  }
}
function NzTabNavOperationComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 6);
    ɵɵtemplate(1, NzTabNavOperationComponent_ul_5_li_1_Template, 2, 7, "li", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.items);
  }
}
function NzTabNavOperationComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function NzTabNavOperationComponent_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.addClicked.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("addIcon", ctx_r3.addIcon);
  }
}
var _c2 = ["navWarp"];
var _c3 = ["navList"];
var _c4 = ["*"];
function NzTabNavBarComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function NzTabNavBarComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.addClicked.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("addIcon", ctx_r2.addIcon);
    ɵɵattribute("tabindex", -1);
  }
}
function NzTabNavBarComponent_div_8_ng_template_1_Template(rf, ctx) {
}
function NzTabNavBarComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, NzTabNavBarComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.extraTemplate);
  }
}
var _c5 = ["nz-tab-body", ""];
function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) {
}
function NzTabBodyComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
  }
}
function NzTabCloseButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("nzType", icon_r1);
  }
}
var _c6 = ["contentTemplate"];
var _c7 = [[["", "nz-tab-link", ""]], "*"];
var _c8 = ["[nz-tab-link]", "*"];
function NzTabComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzTabComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
var _c9 = () => ({
  visible: true
});
function NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(tab_r5.label);
  }
}
function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const i_r6 = ɵɵnextContext().index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onClose(i_r6, $event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tab_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("closeIcon", tab_r5.nzCloseIcon);
  }
}
function NzTabSetComponent_nz_tabs_nav_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_click_0_listener($event) {
      const ctx_r3 = ɵɵrestoreView(_r3);
      const tab_r5 = ctx_r3.$implicit;
      const i_r6 = ctx_r3.index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.clickNavItem(tab_r5, i_r6, $event));
    })("contextmenu", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_contextmenu_0_listener($event) {
      const tab_r5 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.contextmenuNavItem(tab_r5, $event));
    });
    ɵɵelementStart(1, "button", 7);
    ɵɵtemplate(2, NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 8)(3, NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template, 1, 1, "button", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleProp("margin-right", ctx_r1.position === "horizontal" ? ctx_r1.nzTabBarGutter : null, "px")("margin-bottom", ctx_r1.position === "vertical" ? ctx_r1.nzTabBarGutter : null, "px");
    ɵɵclassProp("ant-tabs-tab-active", ctx_r1.nzSelectedIndex === i_r6)("ant-tabs-tab-disabled", tab_r5.nzDisabled);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r1.getTabContentId(i_r6))("disabled", tab_r5.nzDisabled)("tab", tab_r5)("active", ctx_r1.nzSelectedIndex === i_r6);
    ɵɵattribute("tabIndex", ctx_r1.getTabIndex(tab_r5, i_r6))("aria-disabled", tab_r5.nzDisabled)("aria-selected", ctx_r1.nzSelectedIndex === i_r6 && !ctx_r1.nzHideAll)("aria-controls", ctx_r1.getTabContentId(i_r6));
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", tab_r5.label)("nzStringTemplateOutletContext", ɵɵpureFunction0(19, _c9));
    ɵɵadvance();
    ɵɵproperty("ngIf", tab_r5.nzClosable && ctx_r1.closable && !tab_r5.nzDisabled);
  }
}
function NzTabSetComponent_nz_tabs_nav_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-tabs-nav", 4);
    ɵɵlistener("tabScroll", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_tabScroll_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.nzTabListScroll.emit($event));
    })("selectFocusedIndex", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_selectFocusedIndex_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setSelectedIndex($event));
    })("addClicked", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_addClicked_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAdd());
    });
    ɵɵtemplate(1, NzTabSetComponent_nz_tabs_nav_0_div_1_Template, 4, 20, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r1.nzTabBarStyle)("selectedIndex", ctx_r1.nzSelectedIndex || 0)("inkBarAnimated", ctx_r1.inkBarAnimated)("addable", ctx_r1.addable)("addIcon", ctx_r1.nzAddIcon)("hideBar", ctx_r1.nzHideAll)("position", ctx_r1.position)("extraTemplate", ctx_r1.nzTabBarExtraContent);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.tabs);
  }
}
function NzTabSetComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
  if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.getTabContentId(i_r9))("active", ctx_r1.nzSelectedIndex === i_r9 && !ctx_r1.nzHideAll)("content", tab_r8.content)("forceRender", tab_r8.nzForceRender)("animated", ctx_r1.tabPaneAnimated);
    ɵɵattribute("aria-labelledby", ctx_r1.getTabContentId(i_r9));
  }
}
var _NzTabAddButtonComponent = class _NzTabAddButtonComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.addIcon = "plus";
    this.element = this.elementRef.nativeElement;
  }
  getElementWidth() {
    return this.element?.offsetWidth || 0;
  }
  getElementHeight() {
    return this.element?.offsetHeight || 0;
  }
};
_NzTabAddButtonComponent.ɵfac = function NzTabAddButtonComponent_Factory(t) {
  return new (t || _NzTabAddButtonComponent)(ɵɵdirectiveInject(ElementRef));
};
_NzTabAddButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTabAddButtonComponent,
  selectors: [["nz-tab-add-button"], ["button", "nz-tab-add-button", ""]],
  hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-tabs-nav-add"],
  inputs: {
    addIcon: "addIcon"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]],
  template: function NzTabAddButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTabAddButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("nzStringTemplateOutlet", ctx.addIcon);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
  encapsulation: 2
});
var NzTabAddButtonComponent = _NzTabAddButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabAddButtonComponent, [{
    type: Component,
    args: [{
      selector: "nz-tab-add-button, button[nz-tab-add-button]",
      template: `
    <ng-container *nzStringTemplateOutlet="addIcon; let icon">
      <span nz-icon [nzType]="icon" nzTheme="outline"></span>
    </ng-container>
  `,
      host: {
        class: "ant-tabs-nav-add",
        "aria-label": "Add tab",
        type: "button"
      },
      imports: [NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    addIcon: [{
      type: Input
    }]
  });
})();
var _NzTabsInkBarDirective = class _NzTabsInkBarDirective {
  get _animated() {
    return this.animationMode !== "NoopAnimations" && this.animated;
  }
  constructor(elementRef, ngZone, animationMode) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.animationMode = animationMode;
    this.position = "horizontal";
    this.animated = true;
  }
  alignToElement(element) {
    this.ngZone.runOutsideAngular(() => {
      reqAnimFrame(() => this.setStyles(element));
    });
  }
  setStyles(element) {
    const inkBar = this.elementRef.nativeElement;
    if (this.position === "horizontal") {
      inkBar.style.top = "";
      inkBar.style.height = "";
      inkBar.style.left = this.getLeftPosition(element);
      inkBar.style.width = this.getElementWidth(element);
    } else {
      inkBar.style.left = "";
      inkBar.style.width = "";
      inkBar.style.top = this.getTopPosition(element);
      inkBar.style.height = this.getElementHeight(element);
    }
  }
  getLeftPosition(element) {
    return element ? `${element.offsetLeft || 0}px` : "0";
  }
  getElementWidth(element) {
    return element ? `${element.offsetWidth || 0}px` : "0";
  }
  getTopPosition(element) {
    return element ? `${element.offsetTop || 0}px` : "0";
  }
  getElementHeight(element) {
    return element ? `${element.offsetHeight || 0}px` : "0";
  }
};
_NzTabsInkBarDirective.ɵfac = function NzTabsInkBarDirective_Factory(t) {
  return new (t || _NzTabsInkBarDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_NzTabsInkBarDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTabsInkBarDirective,
  selectors: [["nz-tabs-ink-bar"], ["", "nz-tabs-ink-bar", ""]],
  hostAttrs: [1, "ant-tabs-ink-bar"],
  hostVars: 2,
  hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tabs-ink-bar-animated", ctx._animated);
    }
  },
  inputs: {
    position: "position",
    animated: "animated"
  },
  standalone: true
});
var NzTabsInkBarDirective = _NzTabsInkBarDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabsInkBarDirective, [{
    type: Directive,
    args: [{
      selector: "nz-tabs-ink-bar, [nz-tabs-ink-bar]",
      host: {
        class: "ant-tabs-ink-bar",
        "[class.ant-tabs-ink-bar-animated]": "_animated"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    position: [{
      type: Input
    }],
    animated: [{
      type: Input
    }]
  });
})();
var _NzTabNavItemDirective = class _NzTabNavItemDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.disabled = false;
    this.active = false;
    this.el = elementRef.nativeElement;
    this.parentElement = this.el.parentElement;
  }
  focus() {
    this.el.focus();
  }
  get width() {
    return this.parentElement.offsetWidth;
  }
  get height() {
    return this.parentElement.offsetHeight;
  }
  get left() {
    return this.parentElement.offsetLeft;
  }
  get top() {
    return this.parentElement.offsetTop;
  }
};
_NzTabNavItemDirective.ɵfac = function NzTabNavItemDirective_Factory(t) {
  return new (t || _NzTabNavItemDirective)(ɵɵdirectiveInject(ElementRef));
};
_NzTabNavItemDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTabNavItemDirective,
  selectors: [["", "nzTabNavItem", ""]],
  inputs: {
    disabled: [2, "disabled", "disabled", booleanAttribute],
    tab: "tab",
    active: [2, "active", "active", booleanAttribute]
  },
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var NzTabNavItemDirective = _NzTabNavItemDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabNavItemDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTabNavItem]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tab: [{
      type: Input
    }],
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _NzTabNavOperationComponent = class _NzTabNavOperationComponent {
  constructor(cdr, elementRef) {
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.items = [];
    this.addable = false;
    this.addIcon = "plus";
    this.addClicked = new EventEmitter();
    this.selected = new EventEmitter();
    this.menuOpened = false;
    this.element = this.elementRef.nativeElement;
  }
  onSelect(item) {
    if (!item.disabled) {
      item.tab.nzClick.emit();
      this.selected.emit(item);
    }
  }
  onContextmenu(item, e) {
    if (!item.disabled) {
      item.tab.nzContextmenu.emit(e);
    }
  }
  showItems() {
    clearTimeout(this.closeAnimationWaitTimeoutId);
    this.menuOpened = true;
    this.cdr.markForCheck();
  }
  menuVisChange(visible) {
    if (!visible) {
      this.closeAnimationWaitTimeoutId = setTimeout(() => {
        this.menuOpened = false;
        this.cdr.markForCheck();
      }, 150);
    }
  }
  getElementWidth() {
    return this.element?.offsetWidth || 0;
  }
  getElementHeight() {
    return this.element?.offsetHeight || 0;
  }
  ngOnDestroy() {
    clearTimeout(this.closeAnimationWaitTimeoutId);
  }
};
_NzTabNavOperationComponent.ɵfac = function NzTabNavOperationComponent_Factory(t) {
  return new (t || _NzTabNavOperationComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
};
_NzTabNavOperationComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTabNavOperationComponent,
  selectors: [["nz-tab-nav-operation"]],
  hostAttrs: [1, "ant-tabs-nav-operations"],
  hostVars: 2,
  hostBindings: function NzTabNavOperationComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tabs-nav-operations-hidden", ctx.items.length === 0);
    }
  },
  inputs: {
    items: "items",
    addable: [2, "addable", "addable", booleanAttribute],
    addIcon: "addIcon"
  },
  outputs: {
    addClicked: "addClicked",
    selected: "selected"
  },
  exportAs: ["nzTabNavOperation"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  decls: 7,
  vars: 6,
  consts: [["dropdownTrigger", "nzDropdown"], ["menu", "nzDropdownMenu"], ["nz-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "nzOverlayClassName", "nz-tabs-dropdown", 1, "ant-tabs-nav-more", 3, "nzVisibleChange", "mouseenter", "nzDropdownMenu", "nzOverlayStyle", "nzMatchWidthElement"], ["nz-icon", "", "nzType", "ellipsis"], ["nz-menu", "", 4, "ngIf"], ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-menu", ""], ["nz-menu-item", "", "class", "ant-tabs-dropdown-menu-item", 3, "ant-tabs-dropdown-menu-item-disabled", "nzSelected", "nzDisabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 1, "ant-tabs-dropdown-menu-item", 3, "click", "contextmenu", "nzSelected", "nzDisabled"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-add-button", "", 3, "click", "addIcon"]],
  template: function NzTabNavOperationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "button", 2, 0);
      ɵɵlistener("nzVisibleChange", function NzTabNavOperationComponent_Template_button_nzVisibleChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.menuVisChange($event));
      })("mouseenter", function NzTabNavOperationComponent_Template_button_mouseenter_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.showItems());
      });
      ɵɵelement(2, "span", 3);
      ɵɵelementEnd();
      ɵɵelementStart(3, "nz-dropdown-menu", null, 1);
      ɵɵtemplate(5, NzTabNavOperationComponent_ul_5_Template, 2, 1, "ul", 4);
      ɵɵelementEnd();
      ɵɵtemplate(6, NzTabNavOperationComponent_button_6_Template, 1, 1, "button", 5);
    }
    if (rf & 2) {
      const menu_r6 = ɵɵreference(4);
      ɵɵproperty("nzDropdownMenu", menu_r6)("nzOverlayStyle", ɵɵpureFunction0(5, _c0))("nzMatchWidthElement", null);
      ɵɵadvance(5);
      ɵɵproperty("ngIf", ctx.menuOpened);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.addable);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgIf, NgForOf, NzOutletModule, NzStringTemplateOutletDirective, NzTabAddButtonComponent, NzDropdownMenuComponent, NzMenuModule, NzMenuDirective, NzMenuItemComponent, NzDropDownDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTabNavOperationComponent = _NzTabNavOperationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabNavOperationComponent, [{
    type: Component,
    args: [{
      selector: "nz-tab-nav-operation",
      exportAs: "nzTabNavOperation",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <button
      nz-dropdown
      class="ant-tabs-nav-more"
      type="button"
      tabindex="-1"
      aria-hidden="true"
      nzOverlayClassName="nz-tabs-dropdown"
      #dropdownTrigger="nzDropdown"
      [nzDropdownMenu]="menu"
      [nzOverlayStyle]="{ minWidth: '46px' }"
      [nzMatchWidthElement]="null"
      (nzVisibleChange)="menuVisChange($event)"
      (mouseenter)="showItems()"
    >
      <span nz-icon nzType="ellipsis"></span>
    </button>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu *ngIf="menuOpened">
        <li
          nz-menu-item
          *ngFor="let item of items"
          class="ant-tabs-dropdown-menu-item"
          [class.ant-tabs-dropdown-menu-item-disabled]="item.disabled"
          [nzSelected]="item.active"
          [nzDisabled]="item.disabled"
          (click)="onSelect(item)"
          (contextmenu)="onContextmenu(item, $event)"
        >
          <ng-container *nzStringTemplateOutlet="item.tab.label; context: { visible: false }">
            {{ item.tab.label }}
          </ng-container>
        </li>
      </ul>
    </nz-dropdown-menu>
    <button *ngIf="addable" nz-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
  `,
      host: {
        class: "ant-tabs-nav-operations",
        "[class.ant-tabs-nav-operations-hidden]": "items.length === 0"
      },
      imports: [NzIconModule, NgIf, NgForOf, NzOutletModule, NzTabAddButtonComponent, NzDropdownMenuComponent, NzMenuModule, NzDropDownDirective],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }], {
    items: [{
      type: Input
    }],
    addable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    addIcon: [{
      type: Input
    }],
    addClicked: [{
      type: Output
    }],
    selected: [{
      type: Output
    }]
  });
})();
var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = 0.995 ** REFRESH_INTERVAL;
var _NzTabScrollListDirective = class _NzTabScrollListDirective {
  constructor(ngZone, elementRef) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.lastWheelDirection = null;
    this.lastWheelTimestamp = 0;
    this.lastTimestamp = 0;
    this.lastTimeDiff = 0;
    this.lastMixedWheel = 0;
    this.lastWheelPrevent = false;
    this.touchPosition = null;
    this.lastOffset = null;
    this.motion = -1;
    this.unsubscribe = () => void 0;
    this.offsetChange = new EventEmitter();
    this.tabScroll = new EventEmitter();
    this.onTouchEnd = (e) => {
      if (!this.touchPosition) {
        return;
      }
      const lastOffset = this.lastOffset;
      const lastTimeDiff = this.lastTimeDiff;
      this.lastOffset = this.touchPosition = null;
      if (lastOffset) {
        const distanceX = lastOffset.x / lastTimeDiff;
        const distanceY = lastOffset.y / lastTimeDiff;
        const absX = Math.abs(distanceX);
        const absY = Math.abs(distanceY);
        if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
          return;
        }
        let currentX = distanceX;
        let currentY = distanceY;
        this.motion = window.setInterval(() => {
          if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
            window.clearInterval(this.motion);
            return;
          }
          currentX *= SPEED_OFF_MULTIPLE;
          currentY *= SPEED_OFF_MULTIPLE;
          this.onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL, e);
        }, REFRESH_INTERVAL);
      }
    };
    this.onTouchMove = (e) => {
      if (!this.touchPosition) {
        return;
      }
      e.preventDefault();
      const {
        screenX,
        screenY
      } = e.touches[0];
      const offsetX = screenX - this.touchPosition.x;
      const offsetY = screenY - this.touchPosition.y;
      this.onOffset(offsetX, offsetY, e);
      const now = Date.now();
      this.lastTimeDiff = now - this.lastTimestamp;
      this.lastTimestamp = now;
      this.lastOffset = {
        x: offsetX,
        y: offsetY
      };
      this.touchPosition = {
        x: screenX,
        y: screenY
      };
    };
    this.onTouchStart = (e) => {
      const {
        screenX,
        screenY
      } = e.touches[0];
      this.touchPosition = {
        x: screenX,
        y: screenY
      };
      window.clearInterval(this.motion);
    };
    this.onWheel = (e) => {
      const {
        deltaX,
        deltaY
      } = e;
      let mixed;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);
      if (absX === absY) {
        mixed = this.lastWheelDirection === "x" ? deltaX : deltaY;
      } else if (absX > absY) {
        mixed = deltaX;
        this.lastWheelDirection = "x";
      } else {
        mixed = deltaY;
        this.lastWheelDirection = "y";
      }
      const now = Date.now();
      const absMixed = Math.abs(mixed);
      if (now - this.lastWheelTimestamp > 100 || absMixed - this.lastMixedWheel > 10) {
        this.lastWheelPrevent = false;
      }
      this.onOffset(-mixed, -mixed, e);
      if (e.defaultPrevented || this.lastWheelPrevent) {
        this.lastWheelPrevent = true;
      }
      this.lastWheelTimestamp = now;
      this.lastMixedWheel = absMixed;
    };
  }
  ngOnInit() {
    this.unsubscribe = this.ngZone.runOutsideAngular(() => {
      const el = this.elementRef.nativeElement;
      const wheel$ = fromEvent(el, "wheel");
      const touchstart$ = fromEvent(el, "touchstart");
      const touchmove$ = fromEvent(el, "touchmove");
      const touchend$ = fromEvent(el, "touchend");
      const subscription = new Subscription();
      subscription.add(this.subscribeWrap("wheel", wheel$, this.onWheel));
      subscription.add(this.subscribeWrap("touchstart", touchstart$, this.onTouchStart));
      subscription.add(this.subscribeWrap("touchmove", touchmove$, this.onTouchMove));
      subscription.add(this.subscribeWrap("touchend", touchend$, this.onTouchEnd));
      return () => {
        subscription.unsubscribe();
      };
    });
  }
  subscribeWrap(type, observable, handler) {
    return observable.subscribe((event) => {
      this.tabScroll.emit({
        type,
        event
      });
      if (!event.defaultPrevented) {
        handler(event);
      }
    });
  }
  onOffset(x, y, event) {
    this.ngZone.run(() => {
      this.offsetChange.emit({
        x,
        y,
        event
      });
    });
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
};
_NzTabScrollListDirective.ɵfac = function NzTabScrollListDirective_Factory(t) {
  return new (t || _NzTabScrollListDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
};
_NzTabScrollListDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTabScrollListDirective,
  selectors: [["", "nzTabScrollList", ""]],
  outputs: {
    offsetChange: "offsetChange",
    tabScroll: "tabScroll"
  },
  standalone: true
});
var NzTabScrollListDirective = _NzTabScrollListDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabScrollListDirective, [{
    type: Directive,
    args: [{
      selector: "[nzTabScrollList]",
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }], {
    offsetChange: [{
      type: Output
    }],
    tabScroll: [{
      type: Output
    }]
  });
})();
var RESIZE_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CSS_TRANSFORM_TIME = 150;
var _NzTabNavBarComponent = class _NzTabNavBarComponent {
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    const newValue = coerceNumberProperty(value);
    if (this._selectedIndex !== newValue) {
      this._selectedIndex = value;
      this.selectedIndexChanged = true;
      if (this.keyManager) {
        this.keyManager.updateActiveItem(value);
      }
    }
  }
  /** Tracks which element has focus; used for keyboard navigation */
  get focusIndex() {
    return this.keyManager ? this.keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */
  set focusIndex(value) {
    if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
      return;
    }
    this.keyManager.setActiveItem(value);
  }
  get showAddButton() {
    return this.hiddenItems.length === 0 && this.addable;
  }
  constructor(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.viewportRuler = viewportRuler;
    this.nzResizeObserver = nzResizeObserver;
    this.dir = dir;
    this.indexFocused = new EventEmitter();
    this.selectFocusedIndex = new EventEmitter();
    this.addClicked = new EventEmitter();
    this.tabScroll = new EventEmitter();
    this.position = "horizontal";
    this.addable = false;
    this.hideBar = false;
    this.addIcon = "plus";
    this.inkBarAnimated = true;
    this.translate = null;
    this.transformX = 0;
    this.transformY = 0;
    this.pingLeft = false;
    this.pingRight = false;
    this.pingTop = false;
    this.pingBottom = false;
    this.hiddenItems = [];
    this.destroy$ = new Subject();
    this._selectedIndex = 0;
    this.wrapperWidth = 0;
    this.wrapperHeight = 0;
    this.scrollListWidth = 0;
    this.scrollListHeight = 0;
    this.operationWidth = 0;
    this.operationHeight = 0;
    this.addButtonWidth = 0;
    this.addButtonHeight = 0;
    this.selectedIndexChanged = false;
  }
  ngAfterViewInit() {
    const dirChange = this.dir ? this.dir.change.asObservable() : of(null);
    const resize = this.viewportRuler.change(150);
    const realign = () => {
      this.updateScrollListPosition();
      this.alignInkBarToSelectedTab();
    };
    this.keyManager = new FocusKeyManager(this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap();
    this.keyManager.updateActiveItem(this.selectedIndex);
    reqAnimFrame(realign);
    merge(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef)).pipe(takeUntil(this.destroy$), auditTime(16, RESIZE_SCHEDULER)).subscribe(() => {
      realign();
    });
    merge(dirChange, resize, this.items.changes).pipe(takeUntil(this.destroy$)).subscribe(() => {
      Promise.resolve().then(realign);
      this.keyManager.withHorizontalOrientation(this.getLayoutDirection());
    });
    this.keyManager.change.pipe(takeUntil(this.destroy$)).subscribe((newFocusIndex) => {
      this.indexFocused.emit(newFocusIndex);
      this.setTabFocus(newFocusIndex);
      this.scrollToTab(this.keyManager.activeItem);
    });
  }
  ngAfterContentChecked() {
    if (this.selectedIndexChanged) {
      this.updateScrollListPosition();
      this.alignInkBarToSelectedTab();
      this.selectedIndexChanged = false;
      this.cdr.markForCheck();
    }
  }
  ngOnDestroy() {
    clearTimeout(this.lockAnimationTimeoutId);
    clearTimeout(this.cssTransformTimeWaitingId);
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSelectedFromMenu(tab) {
    const tabIndex = this.items.toArray().findIndex((e) => e === tab);
    if (tabIndex !== -1) {
      this.keyManager.updateActiveItem(tabIndex);
      if (this.focusIndex !== this.selectedIndex) {
        this.selectFocusedIndex.emit(this.focusIndex);
        this.scrollToTab(tab);
      }
    }
  }
  onOffsetChange(e) {
    if (this.position === "horizontal") {
      if (!this.lockAnimationTimeoutId) {
        if (this.transformX >= 0 && e.x > 0) {
          return;
        }
        if (this.transformX <= this.wrapperWidth - this.scrollListWidth && e.x < 0) {
          return;
        }
      }
      e.event.preventDefault();
      this.transformX = this.clampTransformX(this.transformX + e.x);
      this.setTransform(this.transformX, 0);
    } else {
      if (!this.lockAnimationTimeoutId) {
        if (this.transformY >= 0 && e.y > 0) {
          return;
        }
        if (this.transformY <= this.wrapperHeight - this.scrollListHeight && e.y < 0) {
          return;
        }
      }
      e.event.preventDefault();
      this.transformY = this.clampTransformY(this.transformY + e.y);
      this.setTransform(0, this.transformY);
    }
    this.lockAnimation();
    this.setVisibleRange();
    this.setPingStatus();
  }
  handleKeydown(event) {
    const inNavigationList = this.navWarpRef.nativeElement.contains(event.target);
    if (hasModifierKey(event) || !inNavigationList) {
      return;
    }
    switch (event.keyCode) {
      case LEFT_ARROW:
      case UP_ARROW:
      case RIGHT_ARROW:
      case DOWN_ARROW:
        this.lockAnimation();
        this.keyManager.onKeydown(event);
        break;
      case ENTER:
      case SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          this.selectFocusedIndex.emit(this.focusIndex);
        }
        break;
      default:
        this.keyManager.onKeydown(event);
    }
  }
  isValidIndex(index) {
    if (!this.items) {
      return true;
    }
    const tab = this.items ? this.items.toArray()[index] : null;
    return !!tab && !tab.disabled;
  }
  scrollToTab(tab) {
    if (!this.items.find((e) => e === tab)) {
      return;
    }
    const tabs = this.items.toArray();
    if (this.position === "horizontal") {
      let newTransform = this.transformX;
      if (this.getLayoutDirection() === "rtl") {
        const right = tabs[0].left + tabs[0].width - tab.left - tab.width;
        if (right < this.transformX) {
          newTransform = right;
        } else if (right + tab.width > this.transformX + this.wrapperWidth) {
          newTransform = right + tab.width - this.wrapperWidth;
        }
      } else if (tab.left < -this.transformX) {
        newTransform = -tab.left;
      } else if (tab.left + tab.width > -this.transformX + this.wrapperWidth) {
        newTransform = -(tab.left + tab.width - this.wrapperWidth);
      }
      this.transformX = newTransform;
      this.transformY = 0;
      this.setTransform(newTransform, 0);
    } else {
      let newTransform = this.transformY;
      if (tab.top < -this.transformY) {
        newTransform = -tab.top;
      } else if (tab.top + tab.height > -this.transformY + this.wrapperHeight) {
        newTransform = -(tab.top + tab.height - this.wrapperHeight);
      }
      this.transformY = newTransform;
      this.transformX = 0;
      this.setTransform(0, newTransform);
    }
    clearTimeout(this.cssTransformTimeWaitingId);
    this.cssTransformTimeWaitingId = setTimeout(() => {
      this.setVisibleRange();
    }, CSS_TRANSFORM_TIME);
  }
  lockAnimation() {
    if (!this.lockAnimationTimeoutId) {
      this.ngZone.runOutsideAngular(() => {
        this.navListRef.nativeElement.style.transition = "none";
        this.lockAnimationTimeoutId = setTimeout(() => {
          this.navListRef.nativeElement.style.transition = "";
          this.lockAnimationTimeoutId = void 0;
        }, CSS_TRANSFORM_TIME);
      });
    }
  }
  setTransform(x, y) {
    this.navListRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
  }
  clampTransformX(transform) {
    const scrollWidth = this.wrapperWidth - this.scrollListWidth;
    if (this.getLayoutDirection() === "rtl") {
      return Math.max(Math.min(scrollWidth, transform), 0);
    } else {
      return Math.min(Math.max(scrollWidth, transform), 0);
    }
  }
  clampTransformY(transform) {
    return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
  }
  updateScrollListPosition() {
    this.resetSizes();
    this.transformX = this.clampTransformX(this.transformX);
    this.transformY = this.clampTransformY(this.transformY);
    this.setVisibleRange();
    this.setPingStatus();
    if (this.keyManager) {
      this.keyManager.updateActiveItem(this.keyManager.activeItemIndex);
      if (this.keyManager.activeItem) {
        this.scrollToTab(this.keyManager.activeItem);
      }
    }
  }
  resetSizes() {
    this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
    this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
    this.operationWidth = this.operationRef.getElementWidth();
    this.operationHeight = this.operationRef.getElementHeight();
    this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
    this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
    this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
    this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
  }
  alignInkBarToSelectedTab() {
    const selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
    const selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedItemElement) {
      this.inkBar.alignToElement(selectedItemElement.parentElement);
    }
  }
  setPingStatus() {
    const ping = {
      top: false,
      right: false,
      bottom: false,
      left: false
    };
    const navWarp = this.navWarpRef.nativeElement;
    if (this.position === "horizontal") {
      if (this.getLayoutDirection() === "rtl") {
        ping.right = this.transformX > 0;
        ping.left = this.transformX + this.wrapperWidth < this.scrollListWidth;
      } else {
        ping.left = this.transformX < 0;
        ping.right = -this.transformX + this.wrapperWidth < this.scrollListWidth;
      }
    } else {
      ping.top = this.transformY < 0;
      ping.bottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
    }
    Object.keys(ping).forEach((pos) => {
      const className = `ant-tabs-nav-wrap-ping-${pos}`;
      if (ping[pos]) {
        navWarp.classList.add(className);
      } else {
        navWarp.classList.remove(className);
      }
    });
  }
  setVisibleRange() {
    let unit;
    let position;
    let transformSize;
    let basicSize;
    let tabContentSize;
    let addSize;
    const tabs = this.items.toArray();
    const DEFAULT_SIZE = {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      right: 0
    };
    const getOffset = (index) => {
      let offset;
      const size = tabs[index] || DEFAULT_SIZE;
      if (position === "right") {
        offset = tabs[0].left + tabs[0].width - tabs[index].left - tabs[index].width;
      } else {
        offset = size[position];
      }
      return offset;
    };
    if (this.position === "horizontal") {
      unit = "width";
      basicSize = this.wrapperWidth;
      tabContentSize = this.scrollListWidth - (this.hiddenItems.length ? this.operationWidth : 0);
      addSize = this.addButtonWidth;
      transformSize = Math.abs(this.transformX);
      if (this.getLayoutDirection() === "rtl") {
        position = "right";
        this.pingRight = this.transformX > 0;
        this.pingLeft = this.transformX + this.wrapperWidth < this.scrollListWidth;
      } else {
        this.pingLeft = this.transformX < 0;
        this.pingRight = -this.transformX + this.wrapperWidth < this.scrollListWidth;
        position = "left";
      }
    } else {
      unit = "height";
      basicSize = this.wrapperHeight;
      tabContentSize = this.scrollListHeight - (this.hiddenItems.length ? this.operationHeight : 0);
      addSize = this.addButtonHeight;
      position = "top";
      transformSize = -this.transformY;
      this.pingTop = this.transformY < 0;
      this.pingBottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
    }
    let mergedBasicSize = basicSize;
    if (tabContentSize + addSize > basicSize) {
      mergedBasicSize = basicSize - addSize;
    }
    if (!tabs.length) {
      this.hiddenItems = [];
      this.cdr.markForCheck();
      return;
    }
    const len = tabs.length;
    let endIndex = len;
    for (let i = 0; i < len; i += 1) {
      const offset = getOffset(i);
      const size = tabs[i] || DEFAULT_SIZE;
      if (offset + size[unit] > transformSize + mergedBasicSize) {
        endIndex = i - 1;
        break;
      }
    }
    let startIndex = 0;
    for (let i = len - 1; i >= 0; i -= 1) {
      const offset = getOffset(i);
      if (offset < transformSize) {
        startIndex = i + 1;
        break;
      }
    }
    const startHiddenTabs = tabs.slice(0, startIndex);
    const endHiddenTabs = tabs.slice(endIndex + 1);
    this.hiddenItems = [...startHiddenTabs, ...endHiddenTabs];
    this.cdr.markForCheck();
  }
  getLayoutDirection() {
    return this.dir && this.dir.value === "rtl" ? "rtl" : "ltr";
  }
  setTabFocus(_tabIndex) {
  }
  ngOnChanges(changes) {
    const {
      position
    } = changes;
    if (position && !position.isFirstChange()) {
      this.alignInkBarToSelectedTab();
      this.lockAnimation();
      this.updateScrollListPosition();
    }
  }
};
_NzTabNavBarComponent.ɵfac = function NzTabNavBarComponent_Factory(t) {
  return new (t || _NzTabNavBarComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(Directionality, 8));
};
_NzTabNavBarComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTabNavBarComponent,
  selectors: [["nz-tabs-nav"]],
  contentQueries: function NzTabNavBarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzTabNavItemDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  viewQuery: function NzTabNavBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c2, 7);
      ɵɵviewQuery(_c3, 7);
      ɵɵviewQuery(NzTabNavOperationComponent, 7);
      ɵɵviewQuery(NzTabAddButtonComponent, 5);
      ɵɵviewQuery(NzTabsInkBarDirective, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navWarpRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.navListRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.operationRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.addBtnRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inkBar = _t.first);
    }
  },
  hostAttrs: [1, "ant-tabs-nav"],
  hostBindings: function NzTabNavBarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function NzTabNavBarComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      });
    }
  },
  inputs: {
    position: "position",
    addable: [2, "addable", "addable", booleanAttribute],
    hideBar: [2, "hideBar", "hideBar", booleanAttribute],
    addIcon: "addIcon",
    inkBarAnimated: "inkBarAnimated",
    extraTemplate: "extraTemplate",
    selectedIndex: "selectedIndex"
  },
  outputs: {
    indexFocused: "indexFocused",
    selectFocusedIndex: "selectFocusedIndex",
    addClicked: "addClicked",
    tabScroll: "tabScroll"
  },
  exportAs: ["nzTabsNav"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c4,
  decls: 9,
  vars: 16,
  consts: [["navWarp", ""], ["navList", ""], [1, "ant-tabs-nav-wrap"], ["nzTabScrollList", "", "role", "tablist", 1, "ant-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["role", "tab", "nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addClicked", "selected", "addIcon", "addable", "items"], ["class", "ant-tabs-extra-content", 4, "ngIf"], ["role", "tab", "nz-tab-add-button", "", 3, "click", "addIcon"], [1, "ant-tabs-extra-content"], [3, "ngTemplateOutlet"]],
  template: function NzTabNavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 2, 0)(2, "div", 3, 1);
      ɵɵlistener("offsetChange", function NzTabNavBarComponent_Template_div_offsetChange_2_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onOffsetChange($event));
      })("tabScroll", function NzTabNavBarComponent_Template_div_tabScroll_2_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.tabScroll.emit($event));
      });
      ɵɵprojection(4);
      ɵɵtemplate(5, NzTabNavBarComponent_button_5_Template, 1, 2, "button", 4);
      ɵɵelement(6, "div", 5);
      ɵɵelementEnd()();
      ɵɵelementStart(7, "nz-tab-nav-operation", 6);
      ɵɵlistener("addClicked", function NzTabNavBarComponent_Template_nz_tab_nav_operation_addClicked_7_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.addClicked.emit());
      })("selected", function NzTabNavBarComponent_Template_nz_tab_nav_operation_selected_7_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onSelectedFromMenu($event));
      });
      ɵɵelementEnd();
      ɵɵtemplate(8, NzTabNavBarComponent_div_8_Template, 2, 1, "div", 7);
    }
    if (rf & 2) {
      ɵɵclassProp("ant-tabs-nav-wrap-ping-left", ctx.pingLeft)("ant-tabs-nav-wrap-ping-right", ctx.pingRight)("ant-tabs-nav-wrap-ping-top", ctx.pingTop)("ant-tabs-nav-wrap-ping-bottom", ctx.pingBottom);
      ɵɵadvance(5);
      ɵɵproperty("ngIf", ctx.showAddButton);
      ɵɵadvance();
      ɵɵproperty("hidden", ctx.hideBar)("position", ctx.position)("animated", ctx.inkBarAnimated);
      ɵɵadvance();
      ɵɵproperty("addIcon", ctx.addIcon)("addable", ctx.addable)("items", ctx.hiddenItems);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.extraTemplate);
    }
  },
  dependencies: [NzTabScrollListDirective, NgIf, NzTabAddButtonComponent, NzTabsInkBarDirective, NzTabNavOperationComponent, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzTabNavBarComponent = _NzTabNavBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabNavBarComponent, [{
    type: Component,
    args: [{
      selector: "nz-tabs-nav",
      exportAs: "nzTabsNav",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <div
      class="ant-tabs-nav-wrap"
      [class.ant-tabs-nav-wrap-ping-left]="pingLeft"
      [class.ant-tabs-nav-wrap-ping-right]="pingRight"
      [class.ant-tabs-nav-wrap-ping-top]="pingTop"
      [class.ant-tabs-nav-wrap-ping-bottom]="pingBottom"
      #navWarp
    >
      <div
        class="ant-tabs-nav-list"
        #navList
        nzTabScrollList
        (offsetChange)="onOffsetChange($event)"
        (tabScroll)="tabScroll.emit($event)"
        role="tablist"
      >
        <ng-content></ng-content>
        <button
          role="tab"
          [attr.tabindex]="-1"
          *ngIf="showAddButton"
          nz-tab-add-button
          [addIcon]="addIcon"
          (click)="addClicked.emit()"
        ></button>
        <div nz-tabs-ink-bar [hidden]="hideBar" [position]="position" [animated]="inkBarAnimated"></div>
      </div>
    </div>
    <nz-tab-nav-operation
      (addClicked)="addClicked.emit()"
      (selected)="onSelectedFromMenu($event)"
      [addIcon]="addIcon"
      [addable]="addable"
      [items]="hiddenItems"
    ></nz-tab-nav-operation>
    <div class="ant-tabs-extra-content" *ngIf="extraTemplate">
      <ng-template [ngTemplateOutlet]="extraTemplate"></ng-template>
    </div>
  `,
      host: {
        class: "ant-tabs-nav",
        "(keydown)": "handleKeydown($event)"
      },
      imports: [NzTabScrollListDirective, NgIf, NzTabAddButtonComponent, NzTabsInkBarDirective, NzTabNavOperationComponent, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: ViewportRuler
  }, {
    type: NzResizeObserver
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    indexFocused: [{
      type: Output
    }],
    selectFocusedIndex: [{
      type: Output
    }],
    addClicked: [{
      type: Output
    }],
    tabScroll: [{
      type: Output
    }],
    position: [{
      type: Input
    }],
    addable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideBar: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    addIcon: [{
      type: Input
    }],
    inkBarAnimated: [{
      type: Input
    }],
    extraTemplate: [{
      type: Input
    }],
    selectedIndex: [{
      type: Input
    }],
    navWarpRef: [{
      type: ViewChild,
      args: ["navWarp", {
        static: true
      }]
    }],
    navListRef: [{
      type: ViewChild,
      args: ["navList", {
        static: true
      }]
    }],
    operationRef: [{
      type: ViewChild,
      args: [NzTabNavOperationComponent, {
        static: true
      }]
    }],
    addBtnRef: [{
      type: ViewChild,
      args: [NzTabAddButtonComponent, {
        static: false
      }]
    }],
    inkBar: [{
      type: ViewChild,
      args: [NzTabsInkBarDirective, {
        static: true
      }]
    }],
    items: [{
      type: ContentChildren,
      args: [NzTabNavItemDirective, {
        descendants: true
      }]
    }]
  });
})();
var _NzTabBodyComponent = class _NzTabBodyComponent {
  constructor() {
    this.content = null;
    this.active = false;
    this.animated = true;
    this.forceRender = false;
    this.hasBeenActive = false;
  }
  ngOnChanges(changes) {
    const {
      active
    } = changes;
    if (active?.currentValue) {
      this.hasBeenActive = true;
    }
  }
};
_NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) {
  return new (t || _NzTabBodyComponent)();
};
_NzTabBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTabBodyComponent,
  selectors: [["", "nz-tab-body", ""]],
  hostAttrs: [1, "ant-tabs-tabpane"],
  hostVars: 10,
  hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@tabSwitchMotion", ctx.active ? "enter" : "leave")("@.disabled", !ctx.animated);
      ɵɵattribute("tabindex", ctx.active ? 0 : -1)("aria-hidden", !ctx.active);
      ɵɵstyleProp("overflow-y", ctx.animated ? ctx.active ? null : "none" : null);
      ɵɵclassProp("ant-tabs-tabpane-active", ctx.active)("ant-tabs-tabpane-hidden", ctx.animated ? null : !ctx.active);
    }
  },
  inputs: {
    content: "content",
    active: "active",
    animated: "animated",
    forceRender: "forceRender"
  },
  exportAs: ["nzTabBody"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c5,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]],
  template: function NzTabBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.hasBeenActive || ctx.forceRender);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2,
  data: {
    animation: [tabSwitchMotion]
  },
  changeDetection: 0
});
var NzTabBodyComponent = _NzTabBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabBodyComponent, [{
    type: Component,
    args: [{
      selector: "[nz-tab-body]",
      exportAs: "nzTabBody",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *ngIf="hasBeenActive || forceRender">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>
  `,
      host: {
        class: "ant-tabs-tabpane",
        "[class.ant-tabs-tabpane-active]": "active",
        "[class.ant-tabs-tabpane-hidden]": "animated ? null : !active",
        "[attr.tabindex]": "active ? 0 : -1",
        "[attr.aria-hidden]": "!active",
        "[style.overflow-y]": 'animated ? active ? null : "none" : null',
        "[@tabSwitchMotion]": `active ? 'enter' : 'leave'`,
        "[@.disabled]": `!animated`
      },
      imports: [NgIf, NgTemplateOutlet],
      standalone: true,
      animations: [tabSwitchMotion]
    }]
  }], null, {
    content: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    animated: [{
      type: Input
    }],
    forceRender: [{
      type: Input
    }]
  });
})();
var _NzTabCloseButtonComponent = class _NzTabCloseButtonComponent {
  constructor() {
    this.closeIcon = "close";
  }
};
_NzTabCloseButtonComponent.ɵfac = function NzTabCloseButtonComponent_Factory(t) {
  return new (t || _NzTabCloseButtonComponent)();
};
_NzTabCloseButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTabCloseButtonComponent,
  selectors: [["nz-tab-close-button"], ["button", "nz-tab-close-button", ""]],
  hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-tabs-tab-remove"],
  inputs: {
    closeIcon: "closeIcon"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]],
  template: function NzTabCloseButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTabCloseButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("nzStringTemplateOutlet", ctx.closeIcon);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
  encapsulation: 2
});
var NzTabCloseButtonComponent = _NzTabCloseButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabCloseButtonComponent, [{
    type: Component,
    args: [{
      selector: "nz-tab-close-button, button[nz-tab-close-button]",
      template: `
    <ng-container *nzStringTemplateOutlet="closeIcon; let icon">
      <span nz-icon [nzType]="icon" nzTheme="outline"></span>
    </ng-container>
  `,
      host: {
        class: "ant-tabs-tab-remove",
        "aria-label": "Close tab",
        type: "button"
      },
      imports: [NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [], {
    closeIcon: [{
      type: Input
    }]
  });
})();
var _NzTabLinkTemplateDirective = class _NzTabLinkTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
_NzTabLinkTemplateDirective.ɵfac = function NzTabLinkTemplateDirective_Factory(t) {
  return new (t || _NzTabLinkTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 1));
};
_NzTabLinkTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTabLinkTemplateDirective,
  selectors: [["ng-template", "nzTabLink", ""]],
  exportAs: ["nzTabLinkTemplate"],
  standalone: true
});
var NzTabLinkTemplateDirective = _NzTabLinkTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabLinkTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[nzTabLink]",
      exportAs: "nzTabLinkTemplate",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef,
    decorators: [{
      type: Host
    }]
  }], null);
})();
var _NzTabLinkDirective = class _NzTabLinkDirective {
  constructor(elementRef, routerLink) {
    this.elementRef = elementRef;
    this.routerLink = routerLink;
  }
};
_NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) {
  return new (t || _NzTabLinkDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(RouterLink, 10));
};
_NzTabLinkDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTabLinkDirective,
  selectors: [["a", "nz-tab-link", ""]],
  exportAs: ["nzTabLink"],
  standalone: true
});
var NzTabLinkDirective = _NzTabLinkDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabLinkDirective, [{
    type: Directive,
    args: [{
      selector: "a[nz-tab-link]",
      exportAs: "nzTabLink",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var _NzTabDirective = class _NzTabDirective {
};
_NzTabDirective.ɵfac = function NzTabDirective_Factory(t) {
  return new (t || _NzTabDirective)();
};
_NzTabDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTabDirective,
  selectors: [["", "nz-tab", ""]],
  exportAs: ["nzTab"],
  standalone: true
});
var NzTabDirective = _NzTabDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-tab]",
      exportAs: "nzTab",
      standalone: true
    }]
  }], null, null);
})();
var NZ_TAB_SET = new InjectionToken("NZ_TAB_SET");
var _NzTabComponent = class _NzTabComponent {
  get content() {
    return this.template || this.contentTemplate;
  }
  get label() {
    return this.nzTitle || this.nzTabLinkTemplateDirective?.templateRef;
  }
  constructor(closestTabSet) {
    this.closestTabSet = closestTabSet;
    this.nzTitle = "";
    this.nzClosable = false;
    this.nzCloseIcon = "close";
    this.nzDisabled = false;
    this.nzForceRender = false;
    this.nzSelect = new EventEmitter();
    this.nzDeselect = new EventEmitter();
    this.nzClick = new EventEmitter();
    this.nzContextmenu = new EventEmitter();
    this.template = null;
    this.isActive = false;
    this.position = null;
    this.origin = null;
    this.stateChanges = new Subject();
  }
  ngOnChanges(changes) {
    const {
      nzTitle,
      nzDisabled,
      nzForceRender
    } = changes;
    if (nzTitle || nzDisabled || nzForceRender) {
      this.stateChanges.next();
    }
  }
  ngOnDestroy() {
    this.stateChanges.complete();
  }
};
_NzTabComponent.ɵfac = function NzTabComponent_Factory(t) {
  return new (t || _NzTabComponent)(ɵɵdirectiveInject(NZ_TAB_SET));
};
_NzTabComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTabComponent,
  selectors: [["nz-tab"]],
  contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzTabLinkTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, NzTabDirective, 5, TemplateRef);
      ɵɵcontentQuery(dirIndex, NzTabLinkDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTabLinkTemplateDirective = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.linkDirective = _t.first);
    }
  },
  viewQuery: function NzTabComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c6, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    }
  },
  inputs: {
    nzTitle: "nzTitle",
    nzClosable: [2, "nzClosable", "nzClosable", booleanAttribute],
    nzCloseIcon: "nzCloseIcon",
    nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
    nzForceRender: [2, "nzForceRender", "nzForceRender", booleanAttribute]
  },
  outputs: {
    nzSelect: "nzSelect",
    nzDeselect: "nzDeselect",
    nzClick: "nzClick",
    nzContextmenu: "nzContextmenu"
  },
  exportAs: ["nzTab"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c8,
  decls: 4,
  vars: 0,
  consts: [["tabLinkTemplate", ""], ["contentTemplate", ""]],
  template: function NzTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c7);
      ɵɵtemplate(0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzTabComponent = _NzTabComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabComponent, [{
    type: Component,
    args: [{
      selector: "nz-tab",
      exportAs: "nzTab",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template #tabLinkTemplate>
      <ng-content select="[nz-tab-link]"></ng-content>
    </ng-template>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `,
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NZ_TAB_SET]
    }]
  }], {
    nzTitle: [{
      type: Input
    }],
    nzClosable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCloseIcon: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzForceRender: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelect: [{
      type: Output
    }],
    nzDeselect: [{
      type: Output
    }],
    nzClick: [{
      type: Output
    }],
    nzContextmenu: [{
      type: Output
    }],
    nzTabLinkTemplateDirective: [{
      type: ContentChild,
      args: [NzTabLinkTemplateDirective, {
        static: false
      }]
    }],
    template: [{
      type: ContentChild,
      args: [NzTabDirective, {
        static: false,
        read: TemplateRef
      }]
    }],
    linkDirective: [{
      type: ContentChild,
      args: [NzTabLinkDirective, {
        static: false
      }]
    }],
    contentTemplate: [{
      type: ViewChild,
      args: ["contentTemplate", {
        static: true
      }]
    }]
  });
})();
var NzTabChangeEvent = class {
};
var NZ_CONFIG_MODULE_NAME = "tabs";
var nextId2 = 0;
var _NzTabSetComponent = class _NzTabSetComponent {
  get nzSelectedIndex() {
    return this.selectedIndex;
  }
  set nzSelectedIndex(value) {
    this.indexToSelect = coerceNumberProperty(value, null);
  }
  get position() {
    return ["top", "bottom"].indexOf(this.nzTabPosition) === -1 ? "vertical" : "horizontal";
  }
  get addable() {
    return this.nzType === "editable-card" && !this.nzHideAdd;
  }
  get closable() {
    return this.nzType === "editable-card";
  }
  get line() {
    return this.nzType === "line";
  }
  get inkBarAnimated() {
    return this.line && (typeof this.nzAnimated === "boolean" ? this.nzAnimated : this.nzAnimated.inkBar);
  }
  get tabPaneAnimated() {
    return typeof this.nzAnimated === "boolean" ? this.nzAnimated : this.nzAnimated.tabPane;
  }
  constructor(nzConfigService, ngZone, cdr, directionality, router) {
    this.nzConfigService = nzConfigService;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.directionality = directionality;
    this.router = router;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzTabPosition = "top";
    this.nzCanDeactivate = null;
    this.nzAddIcon = "plus";
    this.nzTabBarStyle = null;
    this.nzType = "line";
    this.nzSize = "default";
    this.nzAnimated = true;
    this.nzTabBarGutter = void 0;
    this.nzHideAdd = false;
    this.nzCentered = false;
    this.nzHideAll = false;
    this.nzLinkRouter = false;
    this.nzLinkExact = true;
    this.nzSelectChange = new EventEmitter(true);
    this.nzSelectedIndexChange = new EventEmitter();
    this.nzTabListScroll = new EventEmitter();
    this.nzClose = new EventEmitter();
    this.nzAdd = new EventEmitter();
    this.allTabs = new QueryList();
    this.tabs = new QueryList();
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.indexToSelect = 0;
    this.selectedIndex = null;
    this.tabLabelSubscription = Subscription.EMPTY;
    this.tabsSubscription = Subscription.EMPTY;
    this.canDeactivateSubscription = Subscription.EMPTY;
    this.tabSetId = nextId2++;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.tabs.destroy();
    this.tabLabelSubscription.unsubscribe();
    this.tabsSubscription.unsubscribe();
    this.canDeactivateSubscription.unsubscribe();
  }
  ngAfterContentInit() {
    this.ngZone.runOutsideAngular(() => {
      Promise.resolve().then(() => this.setUpRouter());
    });
    this.subscribeToTabLabels();
    this.subscribeToAllTabChanges();
    this.tabsSubscription = this.tabs.changes.subscribe(() => {
      const indexToSelect = this.clampTabIndex(this.indexToSelect);
      if (indexToSelect === this.selectedIndex) {
        const tabs = this.tabs.toArray();
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            this.indexToSelect = this.selectedIndex = i;
            break;
          }
        }
      }
      this.subscribeToTabLabels();
      this.cdr.markForCheck();
    });
  }
  ngAfterContentChecked() {
    const indexToSelect = this.indexToSelect = this.clampTabIndex(this.indexToSelect);
    if (this.selectedIndex !== indexToSelect) {
      const isFirstRun = this.selectedIndex == null;
      if (!isFirstRun) {
        this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
      }
      Promise.resolve().then(() => {
        this.tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.nzSelectedIndexChange.emit(indexToSelect);
        }
      });
    }
    this.tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      if (this.selectedIndex != null && tab.position === 0 && !tab.origin) {
        tab.origin = indexToSelect - this.selectedIndex;
      }
    });
    if (this.selectedIndex !== indexToSelect) {
      this.selectedIndex = indexToSelect;
      this.cdr.markForCheck();
    }
  }
  onClose(index, e) {
    e.preventDefault();
    e.stopPropagation();
    this.nzClose.emit({
      index
    });
  }
  onAdd() {
    this.nzAdd.emit();
  }
  clampTabIndex(index) {
    return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
  }
  createChangeEvent(index) {
    const event = new NzTabChangeEvent();
    event.index = index;
    if (this.tabs && this.tabs.length) {
      event.tab = this.tabs.toArray()[index];
      this.tabs.forEach((tab, i) => {
        if (i !== index) {
          tab.nzDeselect.emit();
        }
      });
      event.tab.nzSelect.emit();
    }
    return event;
  }
  subscribeToTabLabels() {
    if (this.tabLabelSubscription) {
      this.tabLabelSubscription.unsubscribe();
    }
    this.tabLabelSubscription = merge(...this.tabs.map((tab) => tab.stateChanges)).subscribe(() => this.cdr.markForCheck());
  }
  subscribeToAllTabChanges() {
    this.allTabs.changes.pipe(startWith(this.allTabs)).subscribe((tabs) => {
      this.tabs.reset(tabs.filter((tab) => tab.closestTabSet === this));
      this.tabs.notifyOnChanges();
    });
  }
  canDeactivateFun(pre, next) {
    if (typeof this.nzCanDeactivate === "function") {
      const observable = wrapIntoObservable(this.nzCanDeactivate(pre, next));
      return observable.pipe(first(), takeUntil(this.destroy$));
    } else {
      return of(true);
    }
  }
  clickNavItem(tab, index, e) {
    if (!tab.nzDisabled) {
      tab.nzClick.emit();
      if (!this.isRouterLinkClickEvent(index, e)) {
        this.setSelectedIndex(index);
      }
    }
  }
  isRouterLinkClickEvent(index, event) {
    const target = event.target;
    if (this.nzLinkRouter) {
      return !!this.tabs.toArray()[index]?.linkDirective?.elementRef.nativeElement.contains(target);
    } else {
      return false;
    }
  }
  contextmenuNavItem(tab, e) {
    if (!tab.nzDisabled) {
      tab.nzContextmenu.emit(e);
    }
  }
  setSelectedIndex(index) {
    this.canDeactivateSubscription.unsubscribe();
    this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe((can) => {
      if (can) {
        this.nzSelectedIndex = index;
        this.tabNavBarRef.focusIndex = index;
        this.cdr.markForCheck();
      }
    });
  }
  getTabIndex(tab, index) {
    if (tab.nzDisabled) {
      return null;
    }
    return this.selectedIndex === index ? 0 : -1;
  }
  getTabContentId(i) {
    return `nz-tabs-${this.tabSetId}-tab-${i}`;
  }
  setUpRouter() {
    if (this.nzLinkRouter) {
      if (!this.router) {
        throw new Error(`${PREFIX} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
      }
      this.router.events.pipe(takeUntil(this.destroy$), filter((e) => e instanceof NavigationEnd), startWith(true), delay(0)).subscribe(() => {
        this.updateRouterActive();
        this.cdr.markForCheck();
      });
    }
  }
  updateRouterActive() {
    if (this.router.navigated) {
      const index = this.findShouldActiveTabIndex();
      if (index !== this.selectedIndex) {
        this.setSelectedIndex(index);
      }
      this.nzHideAll = index === -1;
    }
  }
  findShouldActiveTabIndex() {
    const tabs = this.tabs.toArray();
    const isActive = this.isLinkActive(this.router);
    return tabs.findIndex((tab) => {
      const c = tab.linkDirective;
      return c ? isActive(c.routerLink) : false;
    });
  }
  isLinkActive(router) {
    return (link) => link ? router.isActive(link.urlTree || "", {
      paths: this.nzLinkExact ? "exact" : "subset",
      queryParams: this.nzLinkExact ? "exact" : "subset",
      fragment: "ignored",
      matrixParams: "ignored"
    }) : false;
  }
};
_NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) {
  return new (t || _NzTabSetComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(Router, 8));
};
_NzTabSetComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTabSetComponent,
  selectors: [["nz-tabset"]],
  contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzTabComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.allTabs = _t);
    }
  },
  viewQuery: function NzTabSetComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NzTabNavBarComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabNavBarRef = _t.first);
    }
  },
  hostAttrs: [1, "ant-tabs"],
  hostVars: 24,
  hostBindings: function NzTabSetComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-tabs-card", ctx.nzType === "card" || ctx.nzType === "editable-card")("ant-tabs-editable", ctx.nzType === "editable-card")("ant-tabs-editable-card", ctx.nzType === "editable-card")("ant-tabs-centered", ctx.nzCentered)("ant-tabs-rtl", ctx.dir === "rtl")("ant-tabs-top", ctx.nzTabPosition === "top")("ant-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-left", ctx.nzTabPosition === "left")("ant-tabs-right", ctx.nzTabPosition === "right")("ant-tabs-default", ctx.nzSize === "default")("ant-tabs-small", ctx.nzSize === "small")("ant-tabs-large", ctx.nzSize === "large");
    }
  },
  inputs: {
    nzSelectedIndex: "nzSelectedIndex",
    nzTabPosition: "nzTabPosition",
    nzTabBarExtraContent: "nzTabBarExtraContent",
    nzCanDeactivate: "nzCanDeactivate",
    nzAddIcon: "nzAddIcon",
    nzTabBarStyle: "nzTabBarStyle",
    nzType: "nzType",
    nzSize: "nzSize",
    nzAnimated: "nzAnimated",
    nzTabBarGutter: "nzTabBarGutter",
    nzHideAdd: [2, "nzHideAdd", "nzHideAdd", booleanAttribute],
    nzCentered: [2, "nzCentered", "nzCentered", booleanAttribute],
    nzHideAll: [2, "nzHideAll", "nzHideAll", booleanAttribute],
    nzLinkRouter: [2, "nzLinkRouter", "nzLinkRouter", booleanAttribute],
    nzLinkExact: [2, "nzLinkExact", "nzLinkExact", booleanAttribute]
  },
  outputs: {
    nzSelectChange: "nzSelectChange",
    nzSelectedIndexChange: "nzSelectedIndexChange",
    nzTabListScroll: "nzTabListScroll",
    nzClose: "nzClose",
    nzAdd: "nzAdd"
  },
  exportAs: ["nzTabset"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NZ_TAB_SET,
    useExisting: _NzTabSetComponent
  }]), ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 12,
  consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-tabs-content-holder"], [1, "ant-tabs-content"], ["role", "tabpanel", "nz-tab-body", "", 3, "id", "active", "content", "forceRender", "animated", 4, "ngFor", "ngForOf"], [3, "tabScroll", "selectFocusedIndex", "addClicked", "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate"], ["class", "ant-tabs-tab", 3, "margin-right", "margin-bottom", "ant-tabs-tab-active", "ant-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-tabs-tab", 3, "click", "contextmenu"], ["type", "button", "role", "tab", "nzTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-tabs-tab-btn", 3, "id", "disabled", "tab", "active"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["type", "button", "nz-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], ["type", "button", "nz-tab-close-button", "", 3, "click", "closeIcon"], ["role", "tabpanel", "nz-tab-body", "", 3, "id", "active", "content", "forceRender", "animated"]],
  template: function NzTabSetComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTabSetComponent_nz_tabs_nav_0_Template, 2, 9, "nz-tabs-nav", 0);
      ɵɵelementStart(1, "div", 1)(2, "div", 2);
      ɵɵtemplate(3, NzTabSetComponent_div_3_Template, 1, 6, "div", 3);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.tabs.length || ctx.addable);
      ɵɵadvance(2);
      ɵɵclassProp("ant-tabs-content-top", ctx.nzTabPosition === "top")("ant-tabs-content-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-content-left", ctx.nzTabPosition === "left")("ant-tabs-content-right", ctx.nzTabPosition === "right")("ant-tabs-content-animated", ctx.tabPaneAnimated);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.tabs);
    }
  },
  dependencies: [NzTabNavBarComponent, NgIf, NgStyle, NgForOf, NzTabNavItemDirective, A11yModule, CdkMonitorFocus, NzOutletModule, NzStringTemplateOutletDirective, NzTabCloseButtonComponent, NzTabBodyComponent],
  encapsulation: 2
});
var NzTabSetComponent = _NzTabSetComponent;
__decorate([WithConfig()], NzTabSetComponent.prototype, "nzType", void 0);
__decorate([WithConfig()], NzTabSetComponent.prototype, "nzSize", void 0);
__decorate([WithConfig()], NzTabSetComponent.prototype, "nzAnimated", void 0);
__decorate([WithConfig()], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabSetComponent, [{
    type: Component,
    args: [{
      selector: "nz-tabset",
      exportAs: "nzTabset",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: NZ_TAB_SET,
        useExisting: NzTabSetComponent
      }],
      template: `
    <nz-tabs-nav
      *ngIf="tabs.length || addable"
      [ngStyle]="nzTabBarStyle"
      [selectedIndex]="nzSelectedIndex || 0"
      [inkBarAnimated]="inkBarAnimated"
      [addable]="addable"
      [addIcon]="nzAddIcon"
      [hideBar]="nzHideAll"
      [position]="position"
      [extraTemplate]="nzTabBarExtraContent"
      (tabScroll)="nzTabListScroll.emit($event)"
      (selectFocusedIndex)="setSelectedIndex($event)"
      (addClicked)="onAdd()"
    >
      <div
        class="ant-tabs-tab"
        [style.margin-right.px]="position === 'horizontal' ? nzTabBarGutter : null"
        [style.margin-bottom.px]="position === 'vertical' ? nzTabBarGutter : null"
        [class.ant-tabs-tab-active]="nzSelectedIndex === i"
        [class.ant-tabs-tab-disabled]="tab.nzDisabled"
        (click)="clickNavItem(tab, i, $event)"
        (contextmenu)="contextmenuNavItem(tab, $event)"
        *ngFor="let tab of tabs; let i = index"
      >
        <button
          type="button"
          role="tab"
          [id]="getTabContentId(i)"
          [attr.tabIndex]="getTabIndex(tab, i)"
          [attr.aria-disabled]="tab.nzDisabled"
          [attr.aria-selected]="nzSelectedIndex === i && !nzHideAll"
          [attr.aria-controls]="getTabContentId(i)"
          [disabled]="tab.nzDisabled"
          [tab]="tab"
          [active]="nzSelectedIndex === i"
          class="ant-tabs-tab-btn"
          nzTabNavItem
          cdkMonitorElementFocus
        >
          <ng-container *nzStringTemplateOutlet="tab.label; context: { visible: true }">{{ tab.label }}</ng-container>
          <button
            type="button"
            nz-tab-close-button
            *ngIf="tab.nzClosable && closable && !tab.nzDisabled"
            [closeIcon]="tab.nzCloseIcon"
            (click)="onClose(i, $event)"
          ></button>
        </button>
      </div>
    </nz-tabs-nav>
    <div class="ant-tabs-content-holder">
      <div
        class="ant-tabs-content"
        [class.ant-tabs-content-top]="nzTabPosition === 'top'"
        [class.ant-tabs-content-bottom]="nzTabPosition === 'bottom'"
        [class.ant-tabs-content-left]="nzTabPosition === 'left'"
        [class.ant-tabs-content-right]="nzTabPosition === 'right'"
        [class.ant-tabs-content-animated]="tabPaneAnimated"
      >
        <div
          role="tabpanel"
          [id]="getTabContentId(i)"
          [attr.aria-labelledby]="getTabContentId(i)"
          nz-tab-body
          *ngFor="let tab of tabs; let i = index"
          [active]="nzSelectedIndex === i && !nzHideAll"
          [content]="tab.content"
          [forceRender]="tab.nzForceRender"
          [animated]="tabPaneAnimated"
        ></div>
      </div>
    </div>
  `,
      host: {
        class: "ant-tabs",
        "[class.ant-tabs-card]": `nzType === 'card' || nzType === 'editable-card'`,
        "[class.ant-tabs-editable]": `nzType === 'editable-card'`,
        "[class.ant-tabs-editable-card]": `nzType === 'editable-card'`,
        "[class.ant-tabs-centered]": `nzCentered`,
        "[class.ant-tabs-rtl]": `dir === 'rtl'`,
        "[class.ant-tabs-top]": `nzTabPosition === 'top'`,
        "[class.ant-tabs-bottom]": `nzTabPosition === 'bottom'`,
        "[class.ant-tabs-left]": `nzTabPosition === 'left'`,
        "[class.ant-tabs-right]": `nzTabPosition === 'right'`,
        "[class.ant-tabs-default]": `nzSize === 'default'`,
        "[class.ant-tabs-small]": `nzSize === 'small'`,
        "[class.ant-tabs-large]": `nzSize === 'large'`
      },
      imports: [NzTabNavBarComponent, NgIf, NgStyle, NgForOf, NzTabNavItemDirective, A11yModule, NzOutletModule, NzTabCloseButtonComponent, NzTabBodyComponent],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Router,
    decorators: [{
      type: Optional
    }]
  }], {
    nzSelectedIndex: [{
      type: Input
    }],
    nzTabPosition: [{
      type: Input
    }],
    nzTabBarExtraContent: [{
      type: Input
    }],
    nzCanDeactivate: [{
      type: Input
    }],
    nzAddIcon: [{
      type: Input
    }],
    nzTabBarStyle: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzAnimated: [{
      type: Input
    }],
    nzTabBarGutter: [{
      type: Input
    }],
    nzHideAdd: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCentered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHideAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLinkRouter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLinkExact: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSelectChange: [{
      type: Output
    }],
    nzSelectedIndexChange: [{
      type: Output
    }],
    nzTabListScroll: [{
      type: Output
    }],
    nzClose: [{
      type: Output
    }],
    nzAdd: [{
      type: Output
    }],
    allTabs: [{
      type: ContentChildren,
      args: [NzTabComponent, {
        descendants: true
      }]
    }],
    tabNavBarRef: [{
      type: ViewChild,
      args: [NzTabNavBarComponent, {
        static: false
      }]
    }]
  });
})();
var DIRECTIVES = [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective];
var _NzTabsModule = class _NzTabsModule {
};
_NzTabsModule.ɵfac = function NzTabsModule_Factory(t) {
  return new (t || _NzTabsModule)();
};
_NzTabsModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTabsModule,
  imports: [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective],
  exports: [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective]
});
_NzTabsModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTabSetComponent, NzTabNavBarComponent, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent]
});
var NzTabsModule = _NzTabsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTabsModule, [{
    type: NgModule,
    args: [{
      imports: [DIRECTIVES],
      exports: [DIRECTIVES]
    }]
  }], null, null);
})();
export {
  NZ_TAB_SET,
  NzTabChangeEvent,
  NzTabComponent,
  NzTabDirective,
  NzTabLinkDirective,
  NzTabLinkTemplateDirective,
  NzTabSetComponent,
  NzTabsModule,
  NzTabAddButtonComponent as ɵNzTabAddButtonComponent,
  NzTabBodyComponent as ɵNzTabBodyComponent,
  NzTabCloseButtonComponent as ɵNzTabCloseButtonComponent,
  NzTabNavBarComponent as ɵNzTabNavBarComponent,
  NzTabNavItemDirective as ɵNzTabNavItemDirective,
  NzTabNavOperationComponent as ɵNzTabNavOperationComponent,
  NzTabScrollListDirective as ɵNzTabScrollListDirective,
  NzTabsInkBarDirective as ɵNzTabsInkBarDirective
};
//# sourceMappingURL=ng-zorro-antd_tabs.js.map
