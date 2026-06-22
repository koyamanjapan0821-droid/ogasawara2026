const APP = {
  startDate: new Date('2026-08-11T11:00:00+09:00'),
  itinerary: [
    {date:'2026-08-11', title:'8/11 Tue｜出航', events:[
      ['午前','竹芝客船ターミナルへ','乗船券・酔い止め・昼食を確認'],
      ['10:40','最終チェックイン','東京 → 父島 / おがさわら丸'],
      ['11:00','おがさわら丸 東京発','予約番号 5412605296 / 2等和室'],
      ['夜','船内','翌日の到着に備えてのんびり']
    ]},
    {date:'2026-08-12', title:'8/12 Wed｜父島到着', events:[
      ['11:00頃','父島・二見港 到着','港で荷物・レンタカー段取り確認'],
      ['12:00','アイランダーレンタカー','入港後12:00から利用 / 4日間 40,000円'],
      ['午後','ポートロイド チェックイン','203号室 / 3泊4日 / 66,000円'],
      ['夕方','買い出し・軽めの散策','B.I.T.C / 農協 / 小祝商店']
    ]},
    {date:'2026-08-13', title:'8/13 Thu｜南島ツアー', events:[
      ['08:15','ポートロイド前 集合','弁当・飲み物・タオル・水着・酔い止め・日焼け対策'],
      ['09:00','南島ツアー','ドルフィンスイム・シュノーケリング・南島'],
      ['15:00','港解散','体力次第で夕方散策']
    ]},
    {date:'2026-08-14', title:'8/14 Fri｜レンタカー自由日', events:[
      ['午前','展望台・海岸めぐり','長崎展望台 / 旭山展望台 / 境浦など'],
      ['09:00','青灯台','海ツアー集合メモあり'],
      ['午後','中山峠・小港海岸候補','暑さと体力で判断'],
      ['夜','夜の生き物観察','オカヤドカリ・ヤシガニ候補']
    ]},
    {date:'2026-08-15', title:'8/15 Sat｜帰路', events:[
      ['午前','チェックアウト・買い出し','船内飲食物を確保'],
      ['15:10','父島・二見港 最終チェックイン','帰路は早め推奨'],
      ['15:30','おがさわら丸 父島発','父島 → 東京 / 2等寝台 / 予約番号 5412605646'],
      ['18:00','レンタカー返却期限','返却が必要な場合は出航前に完了']
    ]},
    {date:'2026-08-16', title:'8/16 Sun｜東京到着', events:[
      ['15:00頃','東京・竹芝 到着','帰宅ルート確認'],
      ['夜','帰宅','荷ほどきは明日の自分に期待']
    ]}
  ],
  spots: [
    ['ポートロイド','base','宿泊拠点。203号室。','コンドミニアム ポートロイド 小笠原'],
    ['アイランダーレンタカー','base','レンタカー受取・返却。','アイランダーレンタカー 父島'],
    ['長崎展望台','view','父島北部の展望台。夕景候補。','長崎展望台 父島'],
    ['旭山展望台','view','朝や短時間散策向け。','旭山展望台 父島'],
    ['大神山公園メイン展望台','view','港周辺を見下ろせる展望台。','大神山公園メイン展望台 父島'],
    ['ウェザーステーション','view','夕日スポット。去年訪問済み、再訪候補。','ウェザーステーション 父島'],
    ['青灯台（二見港防波堤灯台）','base','海ツアー集合場所メモ。','青灯台 二見港 父島'],
    ['ジニービーチ','beach','父島で美しいビーチ。南島ツアーで寄る可能性。','ジニービーチ 父島'],
    ['境浦海岸','beach','沈船がある海岸。小笠原でも有数の美しいビーチ。','境浦海岸 父島'],
    ['宮之浜','beach','去年訪問済み。シュノーケリング候補。','宮之浜 父島'],
    ['中山峠','nature','小港海岸方面の展望・散策候補。','中山峠 父島'],
    ['小港海岸','beach','中山峠とセット候補。朝の散策にも。','小港海岸 父島'],
    ['小笠原世界遺産センター','nature','周辺の緑道が散策向き。','小笠原世界遺産センター 父島'],
    ['東京島しょ農業協同組合 小笠原父島店','shop','農協。買い出し候補。','東京島しょ農業協同組合 小笠原父島店'],
    ['B.I.T.C 小笠原生協','shop','食い物・飲み物の主力買い出し。13日午後は品薄注意メモ。','B.I.T.C 小笠原生協'],
    ['小祝商店スーパー','shop','買い出し候補。','小祝商店スーパー 父島'],
    ['エムアイシー21 池袋店','shop','事前装備購入メモ。','エムアイシー21 池袋店'],
    ['小笠原観光(有)','base','レンタルバイク屋メモ。','小笠原観光有限会社 父島'],
    ['ゲストハウス 島じかん・自然ガイド','base','現地メモ。','島じかん 父島']
  ].map((s,i)=>({id:'s'+i,name:s[0],category:s[1],memo:s[2],query:s[3]})),
  checklist: ['着替え','野鳥の会ブーツ','双眼鏡','防水スマホケース','フロートストラップ','水着','酔い止め薬','現金','充電器','充電ケーブル','Apple Watch','乗船チケット印刷','保険証／マイナンバーカード','雨具','マリンシューズ','サングラス','日焼け止め','サンダル','ボールペン','弁当・飲み物（ツアー日）','タオル','酔い止め予備'],
  reservations: [
    {title:'おがさわら丸 往路', body:'2026/08/11 東京 11:00発 → 父島。最終チェックイン 10:40。2等和室。予約番号 5412605296。'},
    {title:'おがさわら丸 復路', body:'2026/08/15 父島 15:30発 → 東京。最終チェックイン 15:10。2等寝台。予約番号 5412605646。'},
    {title:'宿泊｜コンドミニアム ポートロイド', body:'8/12チェックイン、8/15チェックアウト。3泊4日、203号室、素泊り66,000円。しまぽ通貨・クレジットカード・現金可。'},
    {title:'レンタカー｜アイランダーレンタカー', body:'8/12入港後12:00〜8/15 18:00まで。10,000円/日×4日＝40,000円。'},
    {title:'南島ツアー', body:'8/13 08:15 ポートロイド前集合、15:00港解散。弁当・飲み物・タオル・水着着用・酔い止め・日焼け対策。'},
    {title:'費用メモ', body:'宿66,000円 / レンタカー40,000円 / 船代支払済み / しまぽ通貨活用予定。'}
  ]
};
const $ = id => document.getElementById(id);
const store = {get:(k,d)=>JSON.parse(localStorage.getItem(k)||JSON.stringify(d)), set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};
let customSpots = store.get('customSpots', []), visited = store.get('visited', {}), checks = store.get('checks', {}), memos = store.get('memos', []);
function switchTab(id){document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));document.querySelectorAll('.tabbar button').forEach(b=>b.classList.toggle('active',b.dataset.tab===id));scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>switchTab(b.dataset.tab));document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>switchTab(b.dataset.jump));
function updateCountdown(){const now=new Date();const diff=APP.startDate-now;if(diff<=0){$('countdown').textContent='出発済';return}const d=Math.ceil(diff/86400000);$('countdown').textContent=`あと${d}日`;}
function renderItinerary(){const wrap=$('itineraryList');wrap.innerHTML=APP.itinerary.map(day=>`<article class="card day-card"><h3>${day.title}</h3><p class="muted">${day.date}</p><div class="timeline">${day.events.map(e=>`<div class="event"><div class="time">${e[0]}</div><div><div class="event-title">${e[1]}</div><div class="muted">${e[2]}</div></div></div>`).join('')}</div></article>`).join(''); const today=APP.itinerary.find(d=>new Date(d.date+'T23:59:59+09:00')>=new Date())||APP.itinerary[0]; $('nextPlan').innerHTML=today.events.slice(0,3).map(e=>`<div class="event"><div class="time">${e[0]}</div><div><div class="event-title">${e[1]}</div><div class="muted">${e[2]}</div></div></div>`).join('');}
function searchMapUrl(s){return s.url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.query || s.name + ' 父島')}`}
function navMapUrl(s){return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.query || s.name + ' 父島')}`}
function renderSpots(){const q=$('spotSearch').value.toLowerCase();const f=$('spotFilter').value;const all=[...APP.spots,...customSpots];const list=all.filter(s=>(f==='all'||s.category===f)&&(`${s.name} ${s.memo}`.toLowerCase().includes(q)));$('spotList').innerHTML=list.map(s=>`<article class="card spot"><div><h3>${escapeHtml(s.name)}</h3><p>${escapeHtml(s.memo||'')}</p><span class="tag">${labelCat(s.category)}</span>${s.category==='custom'?'<span class="tag">旅行中追加</span>':''}<div class="spot-actions"><a class="link-btn" href="${searchMapUrl(s)}" target="_blank" rel="noopener">Mapsで開く</a><a class="link-btn nav-btn" href="${navMapUrl(s)}" target="_blank" rel="noopener">ナビ</a><button class="visit-btn ${visited[s.id]?'done':''}" data-visit="${s.id}">${visited[s.id]?'訪問済':'未訪問'}</button></div></div><div>${visited[s.id]?'✅':'📍'}</div></article>`).join('')||'<p class="muted">該当スポットなし</p>';document.querySelectorAll('[data-visit]').forEach(b=>b.onclick=()=>{visited[b.dataset.visit]=!visited[b.dataset.visit];store.set('visited',visited);renderSpots();renderVisitRate();});}
function labelCat(c){return {view:'展望台',beach:'海岸',shop:'買い物',base:'拠点',nature:'自然',custom:'追加'}[c]||c}
$('spotSearch').oninput=renderSpots;$('spotFilter').onchange=renderSpots;$('addSpotBtn').onclick=()=>$('spotDialog').showModal();$('spotForm').onsubmit=(e)=>{e.preventDefault();const name=$('newSpotName').value.trim();if(!name)return;const s={id:'c'+Date.now(),name,category:$('newSpotCategory').value,memo:$('newSpotMemo').value.trim(),url:$('newSpotUrl').value.trim()};customSpots.push(s);store.set('customSpots',customSpots);$('spotForm').reset();$('spotDialog').close();renderSpots();renderVisitRate();};
function renderVisitRate(){const total=APP.spots.length+customSpots.length;const done=Object.entries(visited).filter(([id,v])=>v && ([...APP.spots,...customSpots].some(s=>s.id===id))).length;$('visitRate').textContent=`${done}/${total}`;}
function renderChecklist(){$('checklistItems').innerHTML=APP.checklist.map((item,i)=>`<label class="check-row"><input type="checkbox" data-check="${i}" ${checks[i]?'checked':''}><span>${item}</span></label>`).join('');document.querySelectorAll('[data-check]').forEach(c=>c.onchange=()=>{checks[c.dataset.check]=c.checked;store.set('checks',checks);renderCheckProgress();});renderCheckProgress();}
function renderCheckProgress(){const total=APP.checklist.length;const done=Object.values(checks).filter(Boolean).length;const pct=total?Math.round(done/total*100):0;$('checkProgress').innerHTML=`<b>準備 ${done}/${total}</b><div class="bar"><i style="width:${pct}%"></i></div><p class="muted">${pct}% 完了</p>`;}
$('resetChecklist').onclick=()=>{checks={};store.set('checks',checks);renderChecklist();};
function renderReservations(){$('reservationList').innerHTML=APP.reservations.map(r=>`<article class="card"><p class="label">予約情報</p><h3>${escapeHtml(r.title)}</h3><p>${escapeHtml(r.body)}</p></article>`).join('')}
function renderMemos(){$('memoList').innerHTML=memos.slice().reverse().map((m,idx)=>{const realIndex=memos.length-1-idx;return `<article class="card"><p class="label">${m.date}</p><p>${escapeHtml(m.text).replace(/\n/g,'<br>')}</p>${m.photo?`<img class="memo-photo" src="${m.photo}" alt="旅行メモ写真">`:''}<div class="memo-actions"><button class="danger" data-delmemo="${realIndex}">削除</button></div></article>`}).join('')||'<p class="muted">まだメモはありません。</p>';document.querySelectorAll('[data-delmemo]').forEach(b=>b.onclick=()=>{memos.splice(Number(b.dataset.delmemo),1);store.set('memos',memos);renderMemos();});}
$('saveMemo').onclick=async()=>{const text=$('memoText').value.trim();if(!text)return;let photo='';const file=$('memoPhoto').files[0];if(file) photo=await compressImage(file);memos.push({date:$('memoDate').value,text,photo});try{store.set('memos',memos)}catch(e){alert('写真が大きすぎて保存できませんでした。写真なしで保存します。');memos[memos.length-1].photo='';store.set('memos',memos)}$('memoText').value='';$('memoPhoto').value='';renderMemos();};
function compressImage(file){return new Promise((resolve)=>{const img=new Image();const reader=new FileReader();reader.onload=()=>{img.onload=()=>{const max=1200;let w=img.width,h=img.height;if(Math.max(w,h)>max){if(w>h){h=Math.round(h*max/w);w=max}else{w=Math.round(w*max/h);h=max}}const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;canvas.getContext('2d').drawImage(img,0,0,w,h);resolve(canvas.toDataURL('image/jpeg',0.72));};img.src=reader.result;};reader.readAsDataURL(file);});}
async function loadWeather(){try{const url='https://api.open-meteo.com/v1/forecast?latitude=27.095&longitude=142.191&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTokyo';const r=await fetch(url);const d=await r.json();const temp=Math.round(d.current.temperature_2m);const wind=Math.round(d.current.wind_speed_10m);const code=d.current.weather_code;$('weatherNow').textContent=`${temp}℃・${weatherText(code)}`;$('weatherMeta').textContent=`風速 ${wind}km/h｜Open-Meteo`; $('weatherIcon').textContent=weatherEmoji(code);$('weatherDays').innerHTML=d.daily.time.slice(0,4).map((date,i)=>`<div class="forecast"><b>${date.slice(5).replace('-','/')}</b><span>${weatherEmoji(d.daily.weather_code[i])}</span><small>${Math.round(d.daily.temperature_2m_min[i])}〜${Math.round(d.daily.temperature_2m_max[i])}℃ / ${d.daily.precipitation_probability_max[i]||0}%</small></div>`).join('');}catch(e){$('weatherNow').textContent='天気取得できず';$('weatherMeta').textContent='オフライン時は表示されません';$('weatherDays').innerHTML='';}}
function weatherText(c){if([0].includes(c))return'快晴';if([1,2,3].includes(c))return'晴れ/くもり';if([45,48].includes(c))return'霧';if([51,53,55,61,63,65,80,81,82].includes(c))return'雨';if([95,96,99].includes(c))return'雷雨';return'天気'}function weatherEmoji(c){if(c===0)return'☀️';if([1,2,3].includes(c))return'⛅';if([51,53,55,61,63,65,80,81,82].includes(c))return'🌧️';if([95,96,99].includes(c))return'⛈️';return'🌤️'}
function escapeHtml(str){return String(str).replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
let deferredPrompt;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('installBtn').classList.remove('hidden');});$('installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();deferredPrompt=null;$('installBtn').classList.add('hidden')}};
if('serviceWorker' in navigator){navigator.serviceWorker.register('./service-worker.js').catch(()=>{});}
updateCountdown();renderItinerary();renderSpots();renderVisitRate();renderChecklist();renderReservations();renderMemos();loadWeather();setInterval(updateCountdown,3600000);
