(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2197:function(t,e,s){Promise.resolve().then(s.t.bind(s,3649,23)),Promise.resolve().then(s.t.bind(s,3385,23)),Promise.resolve().then(s.bind(s,8762))},8762:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return v}});var i=s(7437),a=s(6063),r=s(4668),n=s(5139),u=s(4614),o=class extends u.l{constructor(t={}){super(),this.config=t,this.#t=new Map}#t;build(t,e,s){let i=e.queryKey,n=e.queryHash??(0,a.Rm)(i,e),u=this.get(n);return u||(u=new r.A({cache:this,queryKey:i,queryHash:n,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(u)),u}add(t){this.#t.has(t.queryHash)||(this.#t.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#t.get(t.queryHash);e&&(t.destroy(),e===t&&this.#t.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){n.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#t.get(t)}getAll(){return[...this.#t.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,a._x)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,a._x)(t,e)):e}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){n.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},h=s(2041),l=s(326),c=class extends h.F{#e;#s;#i;#a;constructor(t){super(),this.mutationId=t.mutationId,this.#s=t.defaultOptions,this.#i=t.mutationCache,this.#e=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.#s,...t},this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#e.includes(t)||(this.#e.push(t),this.clearGcTimeout(),this.#i.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#e=this.#e.filter(e=>e!==t),this.scheduleGc(),this.#i.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#i.remove(this))}continue(){return this.#a?.continue()??this.execute(this.state.variables)}async execute(t){let e="pending"===this.state.status;try{if(!e){this.#r({type:"pending",variables:t}),await this.#i.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#r({type:"pending",context:e,variables:t})}let s=await (this.#a=(0,l.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#r({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.#a.promise);return await this.#i.config.onSuccess?.(s,t,this.state.context,this),await this.options.onSuccess?.(s,t,this.state.context),await this.#i.config.onSettled?.(s,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(s,null,t,this.state.context),this.#r({type:"success",data:s}),s}catch(e){try{throw await this.#i.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#i.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#r({type:"error",error:e})}}}#r(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,l.Kw)(this.options.networkMode),status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#e.forEach(e=>{e.onMutationUpdate(t)}),this.#i.notify({mutation:this,type:"updated",action:t})})}},d=class extends u.l{constructor(t={}){super(),this.config=t,this.#n=[],this.#u=0}#n;#u;#o;build(t,e,s){let i=new c({mutationCache:this,mutationId:++this.#u,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#n.push(t),this.notify({type:"added",mutation:t})}remove(t){this.#n=this.#n.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){n.V.batch(()=>{this.#n.forEach(t=>{this.remove(t)})})}getAll(){return this.#n}find(t){let e={exact:!0,...t};return this.#n.find(t=>(0,a.X7)(e,t))}findAll(t={}){return this.#n.filter(e=>(0,a.X7)(t,e))}notify(t){n.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){return this.#o=(this.#o??Promise.resolve()).then(()=>{let t=this.#n.filter(t=>t.state.isPaused);return n.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(a.ZT)),Promise.resolve()))}).then(()=>{this.#o=void 0}),this.#o}},f=s(9555),y=s(7211);function p(t,{pages:e,pageParams:s}){let i=e.length-1;return t.getNextPageParam(e[i],e,s[i],s)}var m=class{#h;#i;#s;#l;#c;#d;#f;#y;constructor(t={}){this.#h=t.queryCache||new o,this.#i=t.mutationCache||new d,this.#s=t.defaultOptions||{},this.#l=new Map,this.#c=new Map,this.#d=0}mount(){this.#d++,1===this.#d&&(this.#f=f.j.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#h.onFocus())}),this.#y=y.N.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#h.onOnline())}))}unmount(){this.#d--,0===this.#d&&(this.#f?.(),this.#f=void 0,this.#y?.(),this.#y=void 0)}isFetching(t){return this.#h.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#i.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#h.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let s=this.defaultQueryOptions(t),i=this.#h.build(this,s);return t.revalidateIfStale&&i.isStaleByTime(s.staleTime)&&this.prefetchQuery(s),Promise.resolve(e)}}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let i=this.defaultQueryOptions({queryKey:t}),r=this.#h.get(i.queryHash),n=r?.state.data,u=(0,a.SE)(e,n);if(void 0!==u)return this.#h.build(this,i).setData(u,{...s,manual:!0})}setQueriesData(t,e,s){return n.V.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#h.get(e.queryHash)?.state}removeQueries(t){let e=this.#h;n.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#h,i={type:"active",...t};return n.V.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){let s={revert:!0,...e};return Promise.all(n.V.batch(()=>this.#h.findAll(t).map(t=>t.cancel(s)))).then(a.ZT).catch(a.ZT)}invalidateQueries(t={},e={}){return n.V.batch(()=>{if(this.#h.findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let s={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(s,e)})}refetchQueries(t={},e){let s={...e,cancelRefetch:e?.cancelRefetch??!0};return Promise.all(n.V.batch(()=>this.#h.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(a.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(a.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#h.build(this,e);return s.isStaleByTime(e.staleTime)?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(a.ZT).catch(a.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,s)=>{let i=async()=>{let s;let i=t.options,r=t.fetchOptions?.meta?.fetchMore?.direction,n=t.state.data?.pages||[],u=t.state.data?.pageParams||[],o=!1,h=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?o=!0:t.signal.addEventListener("abort",()=>{o=!0}),t.signal)})},l=t.options.queryFn&&t.options.queryFn!==a.CN?t.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.options.queryHash}'`)),c=async(e,s,i)=>{if(o)return Promise.reject();if(null==s&&e.pages.length)return Promise.resolve(e);let r={queryKey:t.queryKey,pageParam:s,direction:i?"backward":"forward",meta:t.options.meta};h(r);let n=await l(r),{maxPages:u}=t.options,c=i?a.Ht:a.VX;return{pages:c(e.pages,n,u),pageParams:c(e.pageParams,s,u)}};if(r&&n.length){let t="backward"===r,e={pages:n,pageParams:u},a=(t?function(t,{pages:e,pageParams:s}){return t.getPreviousPageParam?.(e[0],e,s[0],s)}:p)(i,e);s=await c(e,a,t)}else{s=await c({pages:[],pageParams:[]},u[0]??i.initialPageParam);let t=e??n.length;for(let e=1;e<t;e++){let t=p(i,s);s=await c(s,t)}}return s};t.options.persister?t.fetchFn=()=>t.options.persister?.(i,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},s):t.fetchFn=i}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(a.ZT).catch(a.ZT)}resumePausedMutations(){return y.N.isOnline()?this.#i.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#h}getMutationCache(){return this.#i}getDefaultOptions(){return this.#s}setDefaultOptions(t){this.#s=t}setQueryDefaults(t,e){this.#l.set((0,a.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#l.values()],s={};return e.forEach(e=>{(0,a.to)(t,e.queryKey)&&(s={...s,...e.defaultOptions})}),s}setMutationDefaults(t,e){this.#c.set((0,a.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#c.values()],s={};return e.forEach(e=>{(0,a.to)(t,e.mutationKey)&&(s={...s,...e.defaultOptions})}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#s.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,a.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===a.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#s.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#h.clear(),this.#i.clear()}},g=s(7082),b=s(2265);function v(t){let{children:e}=t,[s]=(0,b.useState)(()=>new m);return(0,i.jsx)(g.aH,{client:s,children:e})}},3385:function(){},3649:function(t){t.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(t){t.O(0,[618,971,69,744],function(){return t(t.s=2197)}),_N_E=t.O()}]);