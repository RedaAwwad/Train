(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{578:function(n,t,e){var o,r,a;a=function(a){function n(a,n,t,e){a.hasOwnProperty(n)||(a[n]=e.apply(null,t),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:n,module:a[n]}})))}n(a=a?a._modules:{},"Extensions/Sonification/MusicalFrequencies.js",[],(function(){return[16.351597831287414,17.323914436054505,18.354047994837977,19.445436482630058,20.601722307054366,21.826764464562746,23.12465141947715,24.499714748859326,25.956543598746574,27.5,29.13523509488062,30.86770632850775,32.70319566257483,34.64782887210901,36.70809598967594,38.890872965260115,41.20344461410875,43.653528929125486,46.2493028389543,48.999429497718666,51.91308719749314,55,58.27047018976124,61.7354126570155,65.40639132514966,69.29565774421802,73.41619197935188,77.78174593052023,82.4068892282175,87.30705785825097,92.4986056779086,97.99885899543733,103.82617439498628,110,116.54094037952248,123.47082531403103,130.8127826502993,138.59131548843604,146.8323839587038,155.56349186104046,164.81377845643496,174.61411571650194,184.9972113558172,195.99771799087463,207.65234878997256,220,233.08188075904496,246.94165062806206,261.6255653005986,277.1826309768721,293.6647679174076,311.1269837220809,329.6275569128699,349.2282314330039,369.9944227116344,391.99543598174927,415.3046975799451,440,466.1637615180899,493.8833012561241,523.2511306011972,554.3652619537442,587.3295358348151,622.2539674441618,659.2551138257398,698.4564628660078,739.9888454232688,783.9908719634985,830.6093951598903,880,932.3275230361799,987.7666025122483,1046.5022612023945,1108.7305239074883,1174.6590716696303,1244.5079348883237,1318.5102276514797,1396.9129257320155,1479.9776908465376,1567.981743926997,1661.2187903197805,1760,1864.6550460723597,1975.533205024496,2093.004522404789,2217.4610478149766,2349.31814333926,2489.0158697766474,2637.02045530296,2793.825851464031,2959.955381693075,3135.9634878539946,3322.437580639561,3520,3729.3100921447194,3951.066410048992,4186.009044809578]})),n(a,"Extensions/Sonification/SignalHandler.js",[],(function(){return function(){function a(a){this.supportedSignals=this.signals=void 0,this.init(a||[])}return a.prototype.init=function(a){this.supportedSignals=a,this.signals={}},a.prototype.registerSignalCallbacks=function(a){var n=this;n.supportedSignals.forEach((function(t){var e=a[t];e&&(n.signals[t]=n.signals[t]||[]).push(e)}))},a.prototype.clearSignalCallbacks=function(a){var n=this;a?a.forEach((function(a){n.signals[a]&&delete n.signals[a]})):n.signals={}},a.prototype.emitSignal=function(a,n){var t;return this.signals[a]&&this.signals[a].forEach((function(a){a=a(n),t=void 0!==a?a:t})),t},a}()})),n(a,"Extensions/Sonification/SonificationUtilities.js",[a["Extensions/Sonification/MusicalFrequencies.js"],a["Extensions/Sonification/SignalHandler.js"],a["Core/Utilities.js"]],(function(a,n,t){var e=t.clamp,o=t.merge,g={musicalFrequencies:a,SignalHandler:n,getExtremesForInstrumentProps:function(a,b,n){var t=a.options.sonification&&a.options.sonification.defaultInstrumentOptions,q=function(a){return{instrumentMapping:a.mapping}},e=(b||[]).slice(0);return t&&e.push(q(t)),a.series.forEach((function(a){(a=a.options.sonification&&a.options.sonification.instruments)&&(e=e.concat(a.map(q)))})),e.reduce((function(n,b){return Object.keys(b.instrumentMapping||{}).forEach((function(q){"string"!=typeof(q=b.instrumentMapping[q])||n[q]||(n[q]=g.calculateDataExtremes(a,q))})),n}),o(n))},getMusicalScale:function(n){return a.filter((function(a,t){var b=t%12+1;return n.some((function(a){return a===b}))}))},calculateDataExtremes:function(a,b){return a.series.reduce((function(a,n){return n.points.forEach((function(n){n=void 0!==n[b]?n[b]:n.options[b],a.min=Math.min(a.min,n),a.max=Math.max(a.max,n)})),a}),{min:1/0,max:-1/0})},virtualAxisTranslate:function(a,b,n,t){var o=b.max-b.min;return a=n.min+Math.abs(n.max-n.min)*(t?b.max-a:a-b.min)/o,0<o?e(a,n.min,n.max):n.min}};return g})),n(a,"Extensions/Sonification/Options.js",[],(function(){return{sonification:{enabled:!1,duration:2500,afterSeriesWait:700,masterVolume:1,order:"sequential",defaultInstrumentOptions:{instrument:"sineMusical",minFrequency:392,maxFrequency:1046,mapping:{pointPlayTime:"x",duration:200,frequency:"y"}}}}})),n(a,"Extensions/Sonification/Sonification.js",[a["Core/Defaults.js"],a["Core/Utilities.js"],a["Extensions/Sonification/SonificationUtilities.js"],a["Extensions/Sonification/Options.js"]],(function(a,n,t,e){return(n=n.merge)(!0,a.defaultOptions,e),a={fadeOutDuration:20,utilities:t}})),n(a,"Extensions/Sonification/Instrument.js",[a["Core/Globals.js"],a["Extensions/Sonification/Sonification.js"],a["Extensions/Sonification/SonificationUtilities.js"],a["Core/Utilities.js"]],(function(a,n,t,e){var o=a.win,g=e.error,r=e.merge,b=e.pick,c=e.uniqueKey,l=function(){function a(a){this.playCallbackTimers=this.options=this.masterVolume=this.id=void 0,this.init(a)}return a.prototype.init=function(b){if(this.initAudioContext()){this.options=r(a.defaultOptions,b),this.id=this.options.id=b&&b.id||c(),this.masterVolume=this.options.masterVolume||0,b=a.audioContext;var n=this.destinationNode||b.destination;this.gainNode=b.createGain(),this.setGain(0),(this.panNode=b.createStereoPanner&&b.createStereoPanner())?(this.setPan(0),this.gainNode.connect(this.panNode),this.panNode.connect(n)):this.gainNode.connect(n),"oscillator"===this.options.type&&this.initOscillator(this.options.oscillator),this.playCallbackTimers=[]}else g(29)},a.prototype.copy=function(b){return new a(r(this.options,{id:null},b))},a.prototype.initAudioContext=function(){var b=o.AudioContext||o.webkitAudioContext,n=!!a.audioContext;return!!b&&(a.audioContext=a.audioContext||new b,!n&&a.audioContext&&"running"===a.audioContext.state&&a.audioContext.suspend(),!!(a.audioContext&&a.audioContext.createOscillator&&a.audioContext.createGain))},a.prototype.initOscillator=function(b){this.oscillator=a.audioContext.createOscillator(),this.oscillator.type=b.waveformShape,this.oscillator.connect(this.gainNode),this.oscillatorStarted=!1},a.prototype.setPan=function(b){this.panNode&&this.panNode.pan.setValueAtTime(b,a.audioContext.currentTime)},a.prototype.setGain=function(b,n){var t=this.gainNode;b*=this.masterVolume,t&&(1.2<b&&(console.warn("Highcharts sonification warning: Volume of instrument set too high."),b=1.2),n?(t.gain.setValueAtTime(t.gain.value,a.audioContext.currentTime),t.gain.linearRampToValueAtTime(b,a.audioContext.currentTime+n/1e3)):t.gain.setValueAtTime(b,a.audioContext.currentTime))},a.prototype.cancelGainRamp=function(){this.gainNode&&this.gainNode.gain.cancelScheduledValues(0)},a.prototype.setMasterVolume=function(a){this.masterVolume=a||0},a.prototype.getValidFrequency=function(a,n,t){var e=this.options.allowedFrequencies,o=b(t,1/0),r=b(n,-1/0);return e&&e.length?e.reduce((function(b,n){return Math.abs(n-a)<Math.abs(b-a)&&n<o&&n>r?n:b}),1/0):a},a.prototype.clearPlayCallbackTimers=function(){this.playCallbackTimers.forEach((function(a){clearInterval(a)})),this.playCallbackTimers=[]},a.prototype.setFrequency=function(a,b){b=b||{},a=this.getValidFrequency(a,b.min,b.max),"oscillator"===this.options.type&&this.oscillatorPlay(a)},a.prototype.oscillatorPlay=function(b){this.oscillatorStarted||(this.oscillator.start(),this.oscillatorStarted=!0),this.oscillator.frequency.setValueAtTime(b,a.audioContext.currentTime)},a.prototype.preparePlay=function(){this.setGain(.001),"suspended"===a.audioContext.state&&a.audioContext.resume(),this.oscillator&&!this.oscillatorStarted&&(this.oscillator.start(),this.oscillatorStarted=!0)},a.prototype.play=function(t){var e=this,o=t.duration||0,r=function(a,b,n){var o=t.duration,r=e.options.playCallbackInterval,g=0;if("function"==typeof a){var c=setInterval((function(){var t=++g*r/o;1<=t?(e[b](a(1),n),clearInterval(c)):e[b](a(t),n)}),r);e.playCallbackTimers.push(c)}else e[b](a,n)};if(e.id)if("suspended"===a.audioContext.state||this.oscillator&&!this.oscillatorStarted)e.preparePlay(),setTimeout((function(){e.play(t)}),10);else{e.playCallbackTimers.length&&e.clearPlayCallbackTimers(),e.cancelGainRamp(),e.stopOscillatorTimeout&&(clearTimeout(e.stopOscillatorTimeout),delete e.stopOscillatorTimeout),e.stopTimeout&&(clearTimeout(e.stopTimeout),delete e.stopTimeout,e.stopCallback&&(e._play=e.play,e.play=function(){},e.stopCallback("cancelled"),e.play=e._play));var g=o<n.fadeOutDuration+20;e.stopCallback=t.onEnd;var c=function(){delete e.stopTimeout,e.stop(g)};o?(e.stopTimeout=setTimeout(c,g?o:o-n.fadeOutDuration),r(t.frequency,"setFrequency",{minFrequency:t.minFrequency,maxFrequency:t.maxFrequency}),r(b(t.volume,1),"setGain",4),r(b(t.pan,0),"setPan")):c()}},a.prototype.mute=function(){this.setGain(1e-4,.8*n.fadeOutDuration)},a.prototype.stop=function(a,b,t){var e=this,o=function(){if(e.stopOscillatorTimeout&&delete e.stopOscillatorTimeout,e.oscillator&&e.options.oscillator){try{e.oscillator.stop()}catch(n){}e.gainNode&&e.oscillator.disconnect(e.gainNode),e.initOscillator(e.options.oscillator)}b&&b(t),e.stopCallback&&e.stopCallback(t)};e.playCallbackTimers.length&&e.clearPlayCallbackTimers(),e.stopTimeout&&clearTimeout(e.stopTimeout),a?(e.setGain(0),o()):(e.mute(),e.stopOscillatorTimeout=setTimeout(o,n.fadeOutDuration+100))},a.defaultOptions={type:"oscillator",playCallbackInterval:20,masterVolume:1,oscillator:{waveformShape:"sine"}},a.definitions={},a}();return["sine","square","triangle","sawtooth"].forEach((function(a){l.definitions[a]=new l({oscillator:{waveformShape:a}}),l.definitions[a+"Musical"]=new l({allowedFrequencies:t.musicalFrequencies,oscillator:{waveformShape:a}}),l.definitions[a+"Major"]=new l({allowedFrequencies:t.getMusicalScale([1,3,5,6,8,10,12]),oscillator:{waveformShape:a}})})),l})),n(a,"Extensions/Sonification/Earcon.js",[a["Extensions/Sonification/Instrument.js"],a["Core/Utilities.js"]],(function(a,n){var t=n.error,e=n.merge,o=n.pick,g=n.uniqueKey;return n=function(){function n(a){this.options=this.instrumentsPlaying=this.id=void 0,this.init(a||{})}return n.prototype.init=function(a){this.options=a,this.options.id||(this.options.id=this.id=g()),this.instrumentsPlaying={}},n.prototype.sonify=function(n){var b=e(this.options,n),r=o(b.volume,1),g=b.pan,c=this,l=n&&n.onEnd,f=c.options.onEnd;b.instruments.forEach((function(n){var b="string"==typeof n.instrument?a.definitions[n.instrument]:n.instrument,m=e(n.playOptions),q="";if(b&&b.play){if(n.playOptions){m.pan=o(g,m.pan);var h=m.onEnd;m.onEnd=function(){delete c.instrumentsPlaying[q],h&&h.apply(this,arguments),Object.keys(c.instrumentsPlaying).length||(l&&l.apply(this,arguments),f&&f.apply(this,arguments))},(n=b.copy()).setMasterVolume(r),q=n.id,c.instrumentsPlaying[q]=n,n.play(m)}}else t(30)}))},n.prototype.cancelSonify=function(a){var n=this.instrumentsPlaying,b=n&&Object.keys(n);b&&b.length&&(b.forEach((function(b){n[b].stop(!a,null,"cancelled")})),this.instrumentsPlaying={})},n}(),n})),n(a,"Extensions/Sonification/Timeline.js",[a["Extensions/Sonification/Sonification.js"],a["Core/Utilities.js"],a["Extensions/Sonification/SonificationUtilities.js"]],(function(a,n,t){var e=n.merge,o=n.splat;return n=function(){function n(a){this.signalHandler=this.pathsPlaying=this.paths=this.options=this.cursor=void 0,this.init(a||{})}return n.prototype.init=function(a){this.options=a,this.cursor=0,this.paths=a.paths||[],this.pathsPlaying={},this.signalHandler=new t.SignalHandler(["playOnEnd","masterOnEnd","onPathStart","onPathEnd"]),this.signalHandler.registerSignalCallbacks(e(a,{masterOnEnd:a.onEnd}))},n.prototype.play=function(a){this.pause(),this.signalHandler.clearSignalCallbacks(["playOnEnd"]),this.signalHandler.registerSignalCallbacks({playOnEnd:a}),this.playPaths(1)},n.prototype.rewind=function(a){this.pause(),this.signalHandler.clearSignalCallbacks(["playOnEnd"]),this.signalHandler.registerSignalCallbacks({playOnEnd:a}),this.playPaths(-1)},n.prototype.playPaths=function(n){var b=this,t=b.signalHandler;if(b.paths.length){var g=o(this.paths[this.cursor]),e=this.paths[this.cursor+n],r=function(a){t.emitSignal("onPathStart",a),b.pathsPlaying[a.id]=a,a[0<n?"play":"rewind"]((function(r){r=r&&r.cancelled;var c={path:a,cancelled:r};delete b.pathsPlaying[a.id],t.emitSignal("onPathEnd",c),1>=g.length&&(e&&!r?(b.cursor+=n,o(e).forEach((function(a){a[0<n?"resetCursor":"resetCursorEnd"]()})),b.playPaths(n)):(t.emitSignal("playOnEnd",c),t.emitSignal("masterOnEnd",c)))}))};g.forEach((function(n){n&&(n.timeline=b,setTimeout((function(){r(n)}),a.fadeOutDuration))}))}else{var c={cancelled:!1};t.emitSignal("playOnEnd",c),t.emitSignal("masterOnEnd",c)}},n.prototype.pause=function(a){var n=this;Object.keys(n.pathsPlaying).forEach((function(b){n.pathsPlaying[b]&&n.pathsPlaying[b].pause(a)})),n.pathsPlaying={}},n.prototype.resetCursor=function(){this.paths.forEach((function(a){o(a).forEach((function(a){a.resetCursor()}))})),this.cursor=0},n.prototype.resetCursorEnd=function(){this.paths.forEach((function(a){o(a).forEach((function(a){a.resetCursorEnd()}))})),this.cursor=this.paths.length-1},n.prototype.setCursor=function(a){return this.paths.some((function(n){return o(n).some((function(n){return n.setCursor(a)}))}))},n.prototype.getCursor=function(){return this.getCurrentPlayingPaths().reduce((function(a,b){return a[b.id]=b.getCursor(),a}),{})},n.prototype.atStart=function(){return!this.cursor&&!o(this.paths[0]).some((function(a){return a.cursor}))},n.prototype.getCurrentPlayingPaths=function(){return this.paths.length?o(this.paths[this.cursor]):[]},n}(),n})),n(a,"Extensions/Sonification/TimelineEvent.js",[a["Core/Utilities.js"]],(function(a){var n=a.merge,t=a.uniqueKey;return a=function(){function a(a){this.time=this.options=this.id=void 0,this.init(a)}return a.prototype.init=function(a){this.options=a,this.time=a.time||0,this.id=this.options.id=a.id||t()},a.prototype.play=function(a){var g=this.options.eventObject,t=this.options.onEnd,b=a&&a.onEnd,e=this.options.playOptions&&this.options.playOptions.onEnd;a=n(this.options.playOptions,a),g&&g.sonify?(a.onEnd=t||b||e?function(){var a=arguments;[t,b,e].forEach((function(n){n&&n.apply(this,a)}))}:void 0,g.sonify(a)):(b&&b(),t&&t())},a.prototype.cancel=function(a){var n=this.options.eventObject;n&&n.cancelSonify(a)},a}(),a})),n(a,"Extensions/Sonification/TimelinePath.js",[a["Extensions/Sonification/TimelineEvent.js"],a["Extensions/Sonification/SonificationUtilities.js"],a["Core/Utilities.js"]],(function(a,n,t){var e=t.merge,o=t.uniqueKey;return t=function(){function g(a){this.signalHandler=this.options=this.id=this.eventsPlaying=this.eventIdMap=this.events=this.cursor=void 0,this.init(a)}return g.prototype.init=function(t){this.options=t,this.id=this.options.id=t.id||o(),this.cursor=0,this.eventsPlaying={},this.events=t.silentWait?[new a({time:0}),new a({time:t.silentWait})]:this.options.events,this.targetDuration=t.targetDuration||t.silentWait,this.sortEvents(),this.updateEventIdMap(),this.signalHandler=new n.SignalHandler(["playOnEnd","masterOnEnd","onStart","onEventStart","onEventEnd"]),this.signalHandler.registerSignalCallbacks(e(t,{masterOnEnd:t.onEnd}))},g.prototype.sortEvents=function(){this.events=this.events.sort((function(a,b){return a.time-b.time}))},g.prototype.updateEventIdMap=function(){this.eventIdMap=this.events.reduce((function(a,b,n){return a[b.id]=n,a}),{})},g.prototype.addTimelineEvents=function(a){this.events=this.events.concat(a),this.sortEvents(),this.updateEventIdMap()},g.prototype.getCursor=function(){return this.events[this.cursor]},g.prototype.setCursor=function(a){return void 0!==(a=this.eventIdMap[a])&&(this.cursor=a,!0)},g.prototype.play=function(a){this.pause(),this.signalHandler.emitSignal("onStart"),this.signalHandler.clearSignalCallbacks(["playOnEnd"]),this.signalHandler.registerSignalCallbacks({playOnEnd:a}),this.playEvents(1)},g.prototype.rewind=function(a){this.pause(),this.signalHandler.emitSignal("onStart"),this.signalHandler.clearSignalCallbacks(["playOnEnd"]),this.signalHandler.registerSignalCallbacks({playOnEnd:a}),this.playEvents(-1)},g.prototype.resetCursor=function(){this.cursor=0},g.prototype.resetCursorEnd=function(){this.cursor=this.events.length-1},g.prototype.pause=function(a){var b=this;clearTimeout(b.nextScheduledPlay),Object.keys(b.eventsPlaying).forEach((function(n){b.eventsPlaying[n]&&b.eventsPlaying[n].cancel(a)})),b.eventsPlaying={}},g.prototype.playEvents=function(a){var b=this,n=b.events[this.cursor],t=b.events[this.cursor+a],g=function(a){b.signalHandler.emitSignal("masterOnEnd",a),b.signalHandler.emitSignal("playOnEnd",a)};if(n.timelinePath=b,!1===b.signalHandler.emitSignal("onEventStart",n))g({event:n,cancelled:!0});else if(b.eventsPlaying[n.id]=n,n.play({onEnd:function(a){a={event:n,cancelled:!!a},delete b.eventsPlaying[n.id],b.signalHandler.emitSignal("onEventEnd",a),t||g(a)}}),t){var e=Math.abs(t.time-n.time);1>e?(b.cursor+=a,b.playEvents(a)):this.nextScheduledPlay=setTimeout((function(){b.cursor+=a,b.playEvents(a)}),e)}},g}()})),n(a,"Extensions/Sonification/SeriesSonify.js",[a["Extensions/Sonification/Earcon.js"],a["Extensions/Sonification/Instrument.js"],a["Core/Series/Point.js"],a["Extensions/Sonification/SonificationUtilities.js"],a["Extensions/Sonification/Timeline.js"],a["Extensions/Sonification/TimelineEvent.js"],a["Extensions/Sonification/TimelinePath.js"],a["Core/Utilities.js"]],(function(a,n,t,e,o,g,r,b){var u,c=e.getExtremesForInstrumentProps,l=e.virtualAxisTranslate,q=b.extend,f=b.find,m=b.isArray,h=b.merge,d=b.objectEach,y=b.pick;return function(b){function e(a,b){var n=b.timeExtremes||P(a,b.pointPlayTime),p=c(a.chart,b.instruments,b.dataExtremes),e=function(a,b,n){var t=a.points[a.points.length-1];return b.reduce((function(a,b){return b="string"==typeof(b=b.instrumentMapping.duration)?0:"function"==typeof b?b(t,n):b,Math.max(a,b)}),0)}(a,b.instruments,p),o=y(b.masterVolume,1),f=C(b.instruments),m=function(a,b){return a.forEach((function(a){"string"!=typeof(a=a.instrument)&&a.setMasterVolume(b)})),a}(f,o);return f=a.points.reduce((function(a,t){var r=v(t,b.earcons||[]),c=l(S(t,b.pointPlayTime),n,{min:0,max:Math.max(b.duration-e,10)});return a.concat(new g({eventObject:t,time:c,id:t.id,playOptions:{instruments:m,dataExtremes:p,masterVolume:o}}),r.map((function(a){return new g({eventObject:a,time:c,playOptions:{volume:o}})})))}),[]),new r({events:f,onStart:function(){b.onStart&&b.onStart(a)},onEventStart:function(a){var n=a.options&&a.options.eventObject;if(n instanceof t){if(!n.series.visible&&!n.series.chart.series.some((function(a){return a.visible})))return a.timelinePath.timeline.pause(),a.timelinePath.timeline.resetCursor(),!1;b.onPointStart&&b.onPointStart(a,n)}},onEventEnd:function(a){var n=a.event&&a.event.options&&a.event.options.eventObject;n instanceof t&&b.onPointEnd&&b.onPointEnd(a.event,n)},onEnd:function(){b.onEnd&&b.onEnd(a)},targetDuration:b.duration})}function E(a){var b=a.options.sonification||{},n=a.chart.options.sonification||{},t=n.events||{},e=b.events||{};return{onEnd:e.onSeriesEnd||t.onSeriesEnd,onStart:e.onSeriesStart||t.onSeriesStart,onPointEnd:e.onPointEnd||t.onPointEnd,onPointStart:e.onPointStart||t.onPointStart,pointPlayTime:n.defaultInstrumentOptions&&n.defaultInstrumentOptions.mapping&&n.defaultInstrumentOptions.mapping.pointPlayTime,masterVolume:n.masterVolume,instruments:x(a),earcons:b.earcons||n.earcons}}function v(b,n){return n.reduce((function(n,t){var e=t.earcon;return t.condition?(t=t.condition(b))instanceof a?n.push(t):t&&n.push(e):t.onPoint&&b.id===t.onPoint&&n.push(e),n}),[])}function S(a,b){return"function"==typeof b?b(a):y(a[b],a.options[b])}function x(a,b){if(b&&b.instruments)return b.instruments;var n=a.chart.options.sonification&&a.chart.options.sonification.defaultInstrumentOptions||{},t=function(a){d(a,(function(b,n){null===b&&delete a[n]}))};return(a.options.sonification&&a.options.sonification.instruments||[{}]).map((function(a){return t(a.mapping||{}),t(a),{instrument:a.instrument||n.instrument,instrumentOptions:h(n,a,{mapping:void 0,instrument:void 0}),instrumentMapping:h(n.mapping,a.mapping)}}))}function P(a,b){return a.points.reduce((function(a,n){return n=S(n,b),a.min=Math.min(a.min,n),a.max=Math.max(a.max,n),a}),{min:1/0,max:-1/0})}function C(a){return a.map((function(a){var b=a.instrument;return b=("string"==typeof b?n.definitions[b]:b).copy(),h(a,{instrument:b})}))}function O(a){var b=this.chart.options.sonification,n=this.options.sonification;b=e(this,a=h({duration:n&&n.duration||b&&b.duration},E(this),a)),(n=this.chart.sonification)&&(n.timeline&&n.timeline.pause(),n.duration=a.duration,n.timeline=new o({paths:[b]}),n.timeline.play())}var j=[];b.compose=function(a){return-1===j.indexOf(a)&&(j.push(a),q(a.prototype,{sonify:O})),a},b.buildChartSonifySeriesOptions=function(a,b,n){var t=n.seriesOptions||{},e=a.chart.options.sonification;e=e&&e.defaultInstrumentOptions&&e.defaultInstrumentOptions.mapping&&e.defaultInstrumentOptions.mapping.pointPlayTime||"x";var g=E(a);return h(g,{dataExtremes:b,timeExtremes:P(a,e),instruments:n.instruments||g.instruments,onStart:n.onSeriesStart||g.onStart,onEnd:n.onSeriesEnd||g.onEnd,earcons:n.earcons||g.earcons,masterVolume:y(n.masterVolume,g.masterVolume)},m(t)?f(t,(function(b){return b.id===y(a.id,a.options.id)}))||{}:t,{pointPlayTime:e})},b.buildTimelinePathFromSeries=e}(u||(u={})),u})),n(a,"Extensions/Sonification/ChartSonify.js",[a["Extensions/Sonification/Earcon.js"],a["Core/Series/Point.js"],a["Extensions/Sonification/SeriesSonify.js"],a["Extensions/Sonification/SonificationUtilities.js"],a["Extensions/Sonification/Timeline.js"],a["Extensions/Sonification/TimelineEvent.js"],a["Extensions/Sonification/TimelinePath.js"],a["Core/Utilities.js"]],(function(a,n,t,e,o,g,r,b){function c(b,n,t){if("sequential"===b||"simultaneous"===b){var p=n.series.reduce((function(a,b){return b.visible&&!1!==(b.options.sonification&&b.options.sonification.enabled)&&a.push({series:b,seriesOptions:t(b)}),a}),[]);"simultaneous"===b&&(p=[p])}else p=b.reduce((function(b,p){return p=k(p).reduce((function(b,p){var e;if("string"==typeof p){var o=n.get(p);o.visible&&(e={series:o,seriesOptions:t(o)})}else p instanceof a&&(e=new r({events:[new g({eventObject:p})]}));return p.silentWait&&(e=new r({silentWait:p.silentWait})),e&&b.push(e),b}),[]),p.length&&b.push(p),b}),[]);return p}function l(a,b){return b?a.reduce((function(n,t,p){return t=k(t),n.push(t),p<a.length-1&&t.some((function(a){return a.series}))&&n.push(new r({silentWait:b})),n}),[]):a}function f(a,b){var n=Math.max(b-function(a){return a.reduce((function(a,b){return a+(1===(b=k(b)).length&&b[0].options&&b[0].options.silentWait||0)}),0)}(a),0),p=function(a){return a.reduce((function(a,b){return a+k(b).reduce((function(a,b){return(b=b.series&&b.seriesOptions&&b.seriesOptions.timeExtremes)?Math.max(a,b.max-b.min):a}),0)}),0)}(a);return a.reduce((function(a,b){return b=k(b).reduce((function(a,b){return b instanceof r?a.push(b):b.series&&(b.seriesOptions.duration=b.seriesOptions.duration||C(b.seriesOptions.timeExtremes.max-b.seriesOptions.timeExtremes.min,{min:0,max:p},{min:0,max:n}),a.push(t.buildTimelinePathFromSeries(b.series,b.seriesOptions))),a}),[]),a.push(b),a}),[])}function m(a){var b=function(a,b){return a=a.options.sonification||{},T({duration:a.duration,afterSeriesWait:a.afterSeriesWait,pointPlayTime:a.defaultInstrumentOptions&&a.defaultInstrumentOptions.mapping&&a.defaultInstrumentOptions.mapping.pointPlayTime,order:a.order,onSeriesStart:a.events&&a.events.onSeriesStart,onSeriesEnd:a.events&&a.events.onSeriesEnd,onEnd:a.events&&a.events.onEnd},b)}(this,a);this.sonification.timeline&&this.sonification.timeline.pause(),this.sonification.duration=b.duration;var n=P(this,b.instruments,b.dataExtremes);(a=f(a=l(a=c(b.order,this,(function(a){return t.buildChartSonifySeriesOptions(a,n,b)})),b.afterSeriesWait||0),b.duration)).forEach((function(a){!function(a){var b=a.reduce((function(a,b){return(b=b.events)&&b.length&&(a.min=Math.min(b[0].time,a.min),a.max=Math.max(b[b.length-1].time,a.max)),a}),{min:1/0,max:-1/0});a.forEach((function(a){var n=a.events,t=n&&n.length,e=[];t&&n[0].time<=b.min||e.push(new g({time:b.min})),t&&n[n.length-1].time>=b.max||e.push(new g({time:b.max})),e.length&&a.addTimelineEvents(e)}))}(a)})),this.sonification.timeline=new o({paths:a,onEnd:b.onEnd}),this.sonification.timeline.play()}function u(){if(this.sonification.timeline){var a=this.sonification.timeline.getCursor();return Object.keys(a).map((function(b){return a[b].options.eventObject})).filter((function(a){return a instanceof n}))}return[]}function h(a){var b=this.sonification.timeline;b&&k(a).forEach((function(a){b.setCursor(a.id)}))}function d(a){this.sonification.timeline?this.sonification.timeline.pause(w(a,!0)):this.sonification.currentlyPlayingPoint&&this.sonification.currentlyPlayingPoint.cancelSonify(a)}function y(a){this.sonification.timeline&&this.sonification.timeline.play(a)}function E(a){this.sonification.timeline&&this.sonification.timeline.rewind(a)}function v(a){this.pauseSonify(a),this.resetSonifyCursor()}function S(){this.sonification.timeline&&this.sonification.timeline.resetCursor()}function x(){this.sonification.timeline&&this.sonification.timeline.resetCursorEnd()}var P=e.getExtremesForInstrumentProps,C=e.virtualAxisTranslate,O=b.addEvent,j=b.extend,T=b.merge,w=b.pick,k=b.splat,M=[];return e={chartSonify:m,compose:function(a){return-1===M.indexOf(a)&&(M.push(a),j(a.prototype,{sonify:m,pauseSonify:d,resumeSonify:y,rewindSonify:E,cancelSonify:v,getCurrentSonifyPoints:u,setSonifyCursor:h,resetSonifyCursor:S,resetSonifyCursorEnd:x}),O(a,"init",(function(){this.sonification={}})),O(a,"update",(function(a){(a=a.options.sonification)&&T(!0,this.options.sonification,a)}))),a},pause:d,resume:y,rewind:E,cancel:v,getCurrentPoints:u,setCursor:h,resetCursor:S,resetCursorEnd:x},e})),n(a,"Extensions/Sonification/PointSonify.js",[a["Extensions/Sonification/Instrument.js"],a["Core/Utilities.js"],a["Extensions/Sonification/SonificationUtilities.js"]],(function(a,n,t){var e,o=n.error,r=n.merge,g=n.pick,c=[],b={minDuration:20,maxDuration:2e3,minVolume:.1,maxVolume:1,minPan:-1,maxPan:1,minFrequency:220,maxFrequency:2200};return function(n){function e(n){var e=this,c=e.series.chart,l=g(n.masterVolume,c.options.sonification&&c.options.sonification.masterVolume),f=n.dataExtremes||{},q=function(a,b,n){if("function"==typeof a)return b?function(b){return a(e,f,b)}:a(e,f);if("string"==typeof a){var o=(b="-"===a.charAt(0))?a.slice(1):a,r=g(e[o],e.options[o]);return f[o]=f[o]||t.calculateDataExtremes(e.series.chart,o),t.virtualAxisTranslate(r,f[o],n,b)}return a};c.sonification.currentlyPlayingPoint=e,e.sonification=e.sonification||{},e.sonification.instrumentsPlaying=e.sonification.instrumentsPlaying||{};var m=e.sonification.signalHandler=e.sonification.signalHandler||new t.SignalHandler(["onEnd"]);m.clearSignalCallbacks(),m.registerSignalCallbacks({onEnd:n.onEnd}),!e.isNull&&e.visible&&e.series.visible?n.instruments.forEach((function(n){var g="string"==typeof n.instrument?a.definitions[n.instrument]:n.instrument,t=n.instrumentMapping||{},f=r(b,n.instrumentOptions),h=g.id;g&&g.play?(void 0!==l&&g.setMasterVolume(l),e.sonification.instrumentsPlaying[g.id]=g,g.play({frequency:q(t.frequency,!0,{min:f.minFrequency,max:f.maxFrequency}),duration:q(t.duration,!1,{min:f.minDuration,max:f.maxDuration}),pan:q(t.pan,!0,{min:f.minPan,max:f.maxPan}),volume:q(t.volume,!0,{min:f.minVolume,max:f.maxVolume}),onEnd:function(a){n.onEnd&&n.onEnd.apply(this,arguments),c.sonification&&c.sonification.currentlyPlayingPoint&&delete c.sonification.currentlyPlayingPoint,e.sonification&&e.sonification.instrumentsPlaying&&(delete e.sonification.instrumentsPlaying[h],Object.keys(e.sonification.instrumentsPlaying).length||m.emitSignal("onEnd",a))},minFrequency:f.minFrequency,maxFrequency:f.maxFrequency})):o(30)})):m.emitSignal("onEnd")}function l(a){var b=this.sonification&&this.sonification.instrumentsPlaying,n=b&&Object.keys(b);n&&n.length&&(n.forEach((function(n){b[n].stop(!a,null,"cancelled")})),this.sonification.instrumentsPlaying={},this.sonification.signalHandler.emitSignal("onEnd","cancelled"))}n.compose=function(a){if(-1===c.indexOf(a)){c.push(a);var b=a.prototype;b.sonify=e,b.cancelSonify=l}return a}}(e||(e={})),e})),n(a,"masters/modules/sonification.src.js",[a["Core/Globals.js"],a["Extensions/Sonification/ChartSonify.js"],a["Extensions/Sonification/Earcon.js"],a["Extensions/Sonification/Instrument.js"],a["Extensions/Sonification/PointSonify.js"],a["Extensions/Sonification/SeriesSonify.js"],a["Extensions/Sonification/Sonification.js"],a["Extensions/Sonification/Timeline.js"],a["Extensions/Sonification/TimelineEvent.js"],a["Extensions/Sonification/TimelinePath.js"]],(function(a,n,t,e,o,g,r,b,c,l){var f=this&&this.__assign||function(){return f=Object.assign||function(a){for(var b,n=1,t=arguments.length;n<t;n++)for(var e in b=arguments[n])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a},f.apply(this,arguments)};a.sonification=f(f({},r),{instruments:e.definitions,Earcon:t,Instrument:e,Timeline:b,TimelineEvent:c,TimelinePath:l}),a.Earcon=t,a.Instrument=e,n.compose(a.Chart),g.compose(a.Series),o.compose(a.Point)}))},n.exports?(a.default=a,n.exports=a):(o=[e(219)],void 0===(r=function(n){return a(n),a.Highcharts=n,a}.apply(t,o))||(n.exports=r))}}]);