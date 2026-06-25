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
    {title:'おがさわら丸 往路', tel:'03-6381-5499', telLabel:'小笠原海運 本社へ電話', body:'2026/08/11 東京 11:00発 → 父島。最終チェックイン 10:40。2等和室。予約番号 5412605296。'},
    {title:'おがさわら丸 復路', tel:'04998-2-2111', telLabel:'小笠原海運 父島営業所へ電話', body:'2026/08/15 父島 15:30発 → 東京。最終チェックイン 15:10。2等寝台。予約番号 5412605646。'},
    {title:'宿泊｜コンドミニアム ポートロイド', tel:'04998-2-3733', telLabel:'ポートロイドへ電話', body:'8/12チェックイン、8/15チェックアウト。3泊4日、203号室、素泊り66,000円。しまぽ通貨・クレジットカード・現金可。'},
    {title:'レンタカー｜アイランダーレンタカー', tel:'080-2945-5977', telLabel:'アイランダーレンタカーへ電話', body:'8/12入港後12:00〜8/15 18:00まで。10,000円/日×4日＝40,000円。'},
    {title:'南島ツアー｜マリンガイド小笠原', tel:'04998-2-3707', telLabel:'マリンガイド小笠原へ電話', body:'8/13 08:15 ポートロイド前集合、15:00港解散。ドルフィンスイム・シュノーケリング・南島。弁当・飲み物・タオル・水着着用・酔い止め・日焼け対策。'},
    {title:'費用メモ', body:'宿66,000円 / レンタカー40,000円 / 船代支払済み / しまぽ通貨活用予定。'}
  ],
  birds: [
    {id:'b01',name:'アカガシラカラスバト',type:'rare land',difficulty:'激レア',places:'大神山公園周辺・集落周辺・森の縁。見つけたら距離を取る。',voice:'低くこもる「ウー」系。鳴き声より静かな採食姿で気づくことが多い。',points:'赤紫がかった頭、緑光沢のある暗色の体。ドバトより大きめでずんぐり。',photos:['assets/birds/akagashirakarasubato01.jpg','assets/birds/akagashirakarasubato02.jpg','assets/birds/akagashirakarasubato03.jpg'],memo:'保全対象。追いかけない・餌を与えない・フラッシュ不可。'},
    {id:'b02',name:'ハハジマメグロ',type:'rare land',difficulty:'母島遠征級',places:'母島・妹島・向島周辺。父島旅では図鑑枠。',voice:'メジロよりやや太く明るい小声のさえずり。',points:'黄色っぽい体、目の周りの白、黒い三角形の目元。',photos:['assets/birds/hahajimameguro01.jpg','assets/birds/hahajimameguro02.jpg','assets/birds/hahajimameguro03.jpg'],memo:'小笠原固有の象徴。父島だけの旅では基本的に会えない前提。'},
    {id:'b03',name:'オガサワラノスリ',type:'rare land',difficulty:'中',places:'展望台・山地上空・道路沿いの電柱。',voice:'「ピィー」系の高い声。',points:'小笠原唯一の猛禽類。翼を広げてゆったり旋回。',photos:['assets/birds/ogasawaranosuri01.jpg','assets/birds/ogasawaranosuri02.jpg','assets/birds/ogasawaranosuri03.jpg'],memo:'遠くの猛禽はまずノスリ候補。双眼鏡で翼形と尾を確認。'},
    {id:'b04',name:'イソヒヨドリ',type:'land shore',difficulty:'易',places:'二見港・青灯台・海岸・宿周辺。',voice:'澄んだ声でよく鳴く。朝夕に目立つ。',points:'オスは青と赤褐色、メスは灰褐色でうろこ模様。岩場・建物上によく止まる。',photos:['assets/birds/isohiyodori01.jpg','assets/birds/isohiyodori02.jpg','assets/birds/isohiyodori03.jpg'],memo:'到着後すぐ会える可能性が高い癒やし枠。'},
    {id:'b05',name:'メジロ',type:'land',difficulty:'易',places:'公園・集落の木・花のある場所。',voice:'チーチー、複雑な早口のさえずり。',points:'目の白いリング、黄緑色の小鳥。群れで動く。',photos:['assets/birds/mejiro01.jpg','assets/birds/mejiro02.jpg','assets/birds/mejiro03.jpg'],memo:'ハハジマメグロとの混同注意。父島で普通に見るのは基本メジロ。'},
    {id:'b06',name:'オナガミズナギドリ',type:'sea',difficulty:'中',places:'おがさわら丸航路・南島周辺・沖合。',voice:'繁殖地では夜に声。船上では姿確認が中心。',points:'細長い翼、尾が長め。海面近くを滑るように飛ぶ。',photos:['assets/birds/onagamizunagidori01.jpg','assets/birds/onagamizunagidori02.jpg','assets/birds/onagamizunagidori03.jpg'],memo:'船上探鳥の主役候補。酔う前に見る、これ大事。'},
    {id:'b07',name:'カツオドリ',type:'sea',difficulty:'易〜中',places:'航路・海上・岩礁周辺。',voice:'船上ではほぼ姿観察。',points:'大きな翼、褐色の体、海へ突っ込む採食。',photos:['assets/birds/katsuodori01.jpg','assets/birds/katsuodori02.jpg','assets/birds/katsuodori03.jpg'],memo:'イルカツアー中も要チェック。'},
    {id:'b08',name:'アナドリ',type:'sea',difficulty:'中〜難',places:'南島・東島周辺の海上。',voice:'繁殖地では夜。日中は海上飛翔を観察。',points:'全体に黒褐色で小型、細長い翼。素早く低く飛ぶ。',photos:['assets/birds/anadori01.jpg','assets/birds/anadori02.jpg','assets/birds/anadori03.jpg'],memo:'8月は観察チャンスあり。小さい黒い海鳥を見逃さない。'},
    {id:'b09',name:'クロアジサシ',type:'sea',difficulty:'中',places:'南島・岩礁・海上。',voice:'鋭い声。群れで鳴くことあり。',points:'黒っぽい体、白い頭部、海面近くを軽快に飛ぶ。',photos:['assets/birds/kuroajisashi01.jpg','assets/birds/kuroajisashi02.jpg','assets/birds/kuroajisashi03.jpg'],memo:'白黒のコントラストと飛び方で判定。'},
    {id:'b10',name:'ムナグロ',type:'shore',difficulty:'中',places:'開けた芝地・海岸・港周辺。渡り時期に期待。',voice:'澄んだ「ピュイ」系。',points:'金色がかった斑、夏羽は顔から腹が黒い。',photos:['assets/birds/munaguro01.jpg','assets/birds/munaguro02.jpg','assets/birds/munaguro03.jpg'],memo:'8月は渡りの始まり。芝地も見る。'},
    {id:'b11',name:'キョウジョシギ',type:'shore',difficulty:'中',places:'岩礁・海岸・港。',voice:'短く鋭い声。',points:'石をひっくり返すような採食、橙色の足、派手な上面模様。',photos:['assets/birds/kyoujoshigi01.jpg','assets/birds/kyoujoshigi02.jpg','assets/birds/kyoujoshigi03.jpg'],memo:'海岸散策で足元の小型シギチも確認。'},
    {id:'b12',name:'セグロアジサシ',type:'sea',difficulty:'中',places:'南島・岩礁・沖合。',voice:'鋭くよく鳴く。',points:'白い体、黒い背、長い翼。アジサシらしい直線的な飛翔。',photos:['assets/birds/seguroajisashi01.jpg','assets/birds/seguroajisashi02.jpg','assets/birds/seguroajisashi03.jpg'],memo:'南島ツアー日は空も海面も忙しい。'}
  ]
};
const $ = id => document.getElementById(id);
var syncReady=false, syncDocRef=null, syncSaveTimer=null, syncPending=false, syncApplyingRemote=false, syncLastPushedAt=0;
var syncDeviceId=localStorage.getItem('ogasawara2026DeviceId') || ('dev_'+Date.now()+'_'+Math.random().toString(36).slice(2,9));
localStorage.setItem('ogasawara2026DeviceId', syncDeviceId);
const store = {
  get:(k,d)=>JSON.parse(localStorage.getItem(k)||JSON.stringify(d)),
  set:(k,v)=>{
    localStorage.setItem(k,JSON.stringify(v));
    if(!syncApplyingRemote) scheduleCloudSave('store:'+k);
  }
};
let customSpots = store.get('customSpots', []), visited = store.get('visited', {}), favorites = store.get('favorites', {}), checks = store.get('checks', {}), birdChecks = store.get('birdChecks', {}), memos = store.get('memos', []), customBirds = store.get('customBirds', []), birdUserPhotos = store.get('birdUserPhotos', {});
let checklistItems = store.get('checklistItemsV10', null);
let checklistChecks = store.get('checklistChecksV10', null);
if(!Array.isArray(checklistItems)){
  checklistItems = APP.checklist.map((text,i)=>({id:'base_'+i, text}));
  store.set('checklistItemsV10', checklistItems);
}
if(!checklistChecks || typeof checklistChecks !== 'object'){
  checklistChecks = {};
  checklistItems.forEach((item,i)=>{ if(checks[i]) checklistChecks[item.id]=true; });
  store.set('checklistChecksV10', checklistChecks);
}

let itineraryItems = store.get('itineraryItemsV11', null);
function cloneDefaultItinerary(){
  return APP.itinerary.map((day,di)=>({
    id:'day_'+di,
    date:day.date,
    title:day.title,
    events:(day.events||[]).map((e,ei)=>({id:'ev_'+di+'_'+ei,time:e[0],title:e[1],memo:e[2]}))
  }));
}
if(!Array.isArray(itineraryItems)){
  itineraryItems = cloneDefaultItinerary();
  store.set('itineraryItemsV11', itineraryItems);
}
function saveItinerary(){store.set('itineraryItemsV11', itineraryItems);}

/* V15: Firebase official sync layer */
function ensureSyncBadge(){
  let el=$('syncStatusBadge');
  if(el) return el;
  el=document.createElement('div');
  el.id='syncStatusBadge';
  el.className='sync-status-badge sync-local';
  el.textContent='同期準備中';
  document.body.appendChild(el);
  return el;
}
function setSyncStatus(text, cls='sync-local'){
  const el=ensureSyncBadge();
  el.textContent=text;
  el.className='sync-status-badge '+cls;
  console.log('[OGASAWARA SYNC]', text);
}
function getFullState(){
  return {
    customSpots, visited, favorites, checks,
    birdChecks, memos, customBirds, birdUserPhotos,
    checklistItems, checklistChecks, itineraryItems,
    lastSavedAt: new Date().toISOString()
  };
}
function persistFullStateLocal(state){
  const put=(k,v)=>localStorage.setItem(k, JSON.stringify(v));
  put('customSpots', customSpots);
  put('visited', visited);
  put('favorites', favorites);
  put('checks', checks);
  put('birdChecks', birdChecks);
  put('memos', memos);
  put('customBirds', customBirds);
  put('birdUserPhotos', birdUserPhotos);
  put('checklistItemsV10', checklistItems);
  put('checklistChecksV10', checklistChecks);
  put('itineraryItemsV11', itineraryItems);
}
function applyFullState(state){
  if(!state || typeof state !== 'object') return;
  syncApplyingRemote=true;
  try{
    if(Array.isArray(state.customSpots)) customSpots=state.customSpots;
    if(state.visited && typeof state.visited==='object') visited=state.visited;
    if(state.favorites && typeof state.favorites==='object') favorites=state.favorites;
    if(state.checks && typeof state.checks==='object') checks=state.checks;
    if(state.birdChecks && typeof state.birdChecks==='object') birdChecks=state.birdChecks;
    if(Array.isArray(state.memos)) memos=state.memos;
    if(Array.isArray(state.customBirds)) customBirds=state.customBirds;
    if(state.birdUserPhotos && typeof state.birdUserPhotos==='object') birdUserPhotos=state.birdUserPhotos;
    if(Array.isArray(state.checklistItems)) checklistItems=state.checklistItems;
    if(state.checklistChecks && typeof state.checklistChecks==='object') checklistChecks=state.checklistChecks;
    if(Array.isArray(state.itineraryItems)) itineraryItems=state.itineraryItems;
    persistFullStateLocal(state);
    renderAllScreens();
  } finally {
    syncApplyingRemote=false;
  }
}
function renderAllScreens(){
  try{ updateCountdown(); }catch(e){}
  try{ renderItinerary(); }catch(e){console.warn('renderItinerary failed',e)}
  try{ renderSpots(); }catch(e){console.warn('renderSpots failed',e)}
  try{ renderVisitRate(); }catch(e){}
  try{ renderBirds(); }catch(e){console.warn('renderBirds failed',e)}
  try{ renderChecklist(); }catch(e){console.warn('renderChecklist failed',e)}
  try{ renderReservations(); }catch(e){}
  try{ renderMemos(); }catch(e){}
}
function scheduleCloudSave(reason='change'){
  if(syncApplyingRemote) return;
  syncPending=true;
  if(!syncReady || !syncDocRef){
    setSyncStatus('ローカル保存中', 'sync-local');
    return;
  }
  clearTimeout(syncSaveTimer);
  setSyncStatus('保存予約中', 'sync-saving');
  syncSaveTimer=setTimeout(()=>saveCloudNow(reason), 450);
}
async function saveCloudNow(reason='manual'){
  if(syncApplyingRemote || !syncReady || !syncDocRef) return;
  const api=window.FirebaseSyncAPI;
  if(!api){ setSyncStatus('Firebase未接続', 'sync-error'); return; }
  const payload=getFullState();
  const now=Date.now();
  syncPending=false;
  setSyncStatus('Firestore保存中', 'sync-saving');
  console.log('[OGASAWARA SYNC] SAVE START', reason, payload);
  try{
    await api.setDoc(syncDocRef, {
      schema:'ogasawara2026-v15',
      updatedAt: api.serverTimestamp(),
      updatedAtMs: now,
      updatedBy: syncDeviceId,
      state: payload
    }, {merge:true});
    syncLastPushedAt=now;
    setSyncStatus('Firebase同期済み', 'sync-ok');
    console.log('[OGASAWARA SYNC] SAVE SUCCESS', now);
  }catch(err){
    console.error('[OGASAWARA SYNC] SAVE ERROR', err);
    setSyncStatus('同期失敗: '+(err?.code||err?.message||'error'), 'sync-error');
    syncPending=true;
  }
}
async function initializeFirebaseSync(){
  const api=window.FirebaseSyncAPI;
  if(!api){
    setSyncStatus('Firebase読込待ち', 'sync-local');
    return false;
  }
  try{
    syncDocRef=api.doc(api.db, 'ogasawara2026', 'shared');
    setSyncStatus('Firebase接続中', 'sync-saving');
    const snap=await api.getDoc(syncDocRef);
    if(snap.exists()){
      const data=snap.data();
      if(data?.state){
        console.log('[OGASAWARA SYNC] INITIAL REMOTE APPLY', data.updatedAtMs, data.updatedBy);
        applyFullState(data.state);
      }
    }else{
      console.log('[OGASAWARA SYNC] NO REMOTE STATE, BOOTSTRAP LOCAL');
    }
    syncReady=true;
    api.onSnapshot(syncDocRef, snap=>{
      if(!snap.exists()) return;
      const data=snap.data();
      if(!data?.state) return;
      if(data.updatedBy===syncDeviceId) return;
      console.log('[OGASAWARA SYNC] REMOTE RECEIVED', data.updatedAtMs, data.updatedBy);
      applyFullState(data.state);
      setSyncStatus('他端末の更新を反映', 'sync-ok');
    }, err=>{
      console.error('[OGASAWARA SYNC] SNAPSHOT ERROR', err);
      setSyncStatus('受信失敗: '+(err?.code||err?.message||'error'), 'sync-error');
    });
    if(!snap.exists() || syncPending){ await saveCloudNow('initial/bootstrap'); }
    else setSyncStatus('Firebase同期済み', 'sync-ok');
    return true;
  }catch(err){
    console.error('[OGASAWARA SYNC] INIT ERROR', err);
    setSyncStatus('Firebase接続失敗: '+(err?.code||err?.message||'error'), 'sync-error');
    return false;
  }
}
window.addEventListener('online',()=>{ setSyncStatus('オンライン復帰', 'sync-saving'); saveCloudNow('online'); });
window.addEventListener('firebase-sync-ready',()=>initializeFirebaseSync());
setTimeout(()=>initializeFirebaseSync(), 1200);

function switchTab(id){document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));document.querySelectorAll('.tabbar button').forEach(b=>b.classList.toggle('active',b.dataset.tab===id));scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>switchTab(b.dataset.tab));document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>switchTab(b.dataset.jump));
function updateCountdown(){const now=new Date();const diff=APP.startDate-now;if(diff<=0){$('countdown').textContent='出発済';return}const d=Math.ceil(diff/86400000);$('countdown').textContent=`あと${d}日`;}
function itineraryEventHtml(e, dayId){
  return `<div class="event itinerary-event" draggable="true" data-eventrow="${dayId}|${e.id}"><div class="drag-handle" aria-hidden="true">☰</div><div class="time">${escapeHtml(e.time||'')}</div><div><div class="event-title">${escapeHtml(e.title||'')}</div><div class="muted">${escapeHtml(e.memo||'')}</div><div class="itinerary-actions"><button class="mini-btn" data-editevent="${dayId}|${e.id}" type="button">編集</button><button class="mini-btn danger-mini" data-delevent="${dayId}|${e.id}" type="button">削除</button></div></div></div>`;
}
function renderItinerary(){
  const wrap=$('itineraryList');
  wrap.innerHTML=itineraryItems.map(day=>`<article class="card day-card"><div class="itinerary-day-head"><div><h3>${escapeHtml(day.title)}</h3><p class="muted">${escapeHtml(day.date)}</p></div><div class="itinerary-actions day-actions"><button class="mini-btn" data-editday="${day.id}" type="button">日程編集</button><button class="mini-btn" data-addevent="${day.id}" type="button">予定追加</button><button class="mini-btn danger-mini" data-delday="${day.id}" type="button">削除</button></div></div><div class="timeline itinerary-sortable" data-dayevents="${day.id}">${(day.events||[]).map(e=>itineraryEventHtml(e,day.id)).join('')||'<p class="muted">予定なし。予定追加から登録できます。</p>'}</div></article>`).join('')||'<p class="muted">日程がありません。日程を追加できます。</p>';
  const today=itineraryItems.find(d=>new Date(d.date+'T23:59:59+09:00')>=new Date())||itineraryItems[0];
  $('nextPlan').innerHTML=today ? (today.events||[]).slice(0,3).map(e=>`<div class="event"><div class="time">${escapeHtml(e.time||'')}</div><div><div class="event-title">${escapeHtml(e.title||'')}</div><div class="muted">${escapeHtml(e.memo||'')}</div></div></div>`).join('') : '<p class="muted">予定なし</p>';
  setupItineraryActions();
  setupItineraryDragDrop();
}
function addItineraryDay(){
  const date=prompt('日付を入力（例：2026-08-17）','2026-08-17');
  if(date===null) return;
  const cleanDate=date.trim();
  if(!cleanDate) return;
  const title=prompt('日程タイトルを入力（例：8/17 Mon｜予備日）', cleanDate);
  if(title===null) return;
  const cleanTitle=title.trim();
  if(!cleanTitle) return;
  itineraryItems.push({id:'day_'+Date.now()+'_'+Math.random().toString(36).slice(2,7),date:cleanDate,title:cleanTitle,events:[]});
  saveItinerary();
  renderItinerary();
}
function editItineraryDay(dayId){
  const day=itineraryItems.find(d=>d.id===dayId); if(!day) return;
  const date=prompt('日付を編集', day.date);
  if(date===null) return;
  const title=prompt('日程タイトルを編集', day.title);
  if(title===null) return;
  const cleanDate=date.trim(), cleanTitle=title.trim();
  if(!cleanDate||!cleanTitle) return;
  day.date=cleanDate; day.title=cleanTitle;
  saveItinerary(); renderItinerary();
}
function deleteItineraryDay(dayId){
  const day=itineraryItems.find(d=>d.id===dayId); if(!day) return;
  if(!confirm(`「${day.title}」を削除しますか？`)) return;
  itineraryItems=itineraryItems.filter(d=>d.id!==dayId);
  saveItinerary(); renderItinerary();
}
function addItineraryEvent(dayId){
  const day=itineraryItems.find(d=>d.id===dayId); if(!day) return;
  const time=prompt('時間を入力（例：午前 / 10:40）','');
  if(time===null) return;
  const title=prompt('予定名を入力','');
  if(title===null) return;
  const memo=prompt('メモを入力','') ?? '';
  const cleanTitle=title.trim();
  if(!cleanTitle) return;
  day.events=day.events||[];
  day.events.push({id:'ev_'+Date.now()+'_'+Math.random().toString(36).slice(2,7),time:time.trim(),title:cleanTitle,memo:memo.trim()});
  saveItinerary(); renderItinerary();
}
function editItineraryEvent(dayId,eventId){
  const day=itineraryItems.find(d=>d.id===dayId); if(!day) return;
  const ev=(day.events||[]).find(e=>e.id===eventId); if(!ev) return;
  openItineraryEventDialog(dayId, ev);
}
function openItineraryEventDialog(dayId, ev){
  const dialog=$('itineraryEventDialog');
  if(!dialog){
    const time=prompt('時間を編集', ev.time||'');
    if(time===null) return;
    const title=prompt('予定名を編集', ev.title||'');
    if(title===null) return;
    const memo=prompt('メモを編集', ev.memo||'');
    if(memo===null) return;
    const cleanTitle=title.trim();
    if(!cleanTitle) return;
    ev.time=time.trim(); ev.title=cleanTitle; ev.memo=memo.trim();
    saveItinerary(); renderItinerary();
    return;
  }
  $('editEventDayId').value=dayId;
  $('editEventId').value=ev.id;
  $('editEventTime').value=ev.time||'';
  $('editEventTitle').value=ev.title||'';
  $('editEventMemo').value=ev.memo||'';
  dialog.showModal();
}
function closeItineraryEventDialog(){
  const dialog=$('itineraryEventDialog');
  if(dialog?.open) dialog.close();
}
function saveItineraryEventDialog(){
  const dayId=$('editEventDayId').value;
  const eventId=$('editEventId').value;
  const day=itineraryItems.find(d=>d.id===dayId); if(!day) return;
  const ev=(day.events||[]).find(e=>e.id===eventId); if(!ev) return;
  const title=$('editEventTitle').value.trim();
  if(!title){ alert('予定名を入力してください。'); return; }
  ev.time=$('editEventTime').value.trim();
  ev.title=title;
  ev.memo=$('editEventMemo').value.trim();
  saveItinerary();
  closeItineraryEventDialog();
  renderItinerary();
}
function setupItineraryDragDrop(){
  document.querySelectorAll('[data-eventrow]').forEach(row=>{
    row.addEventListener('dragstart',e=>{
      row.classList.add('dragging');
      e.dataTransfer.effectAllowed='move';
      e.dataTransfer.setData('text/plain', row.dataset.eventrow);
    });
    row.addEventListener('dragend',()=>row.classList.remove('dragging'));
  });
  document.querySelectorAll('[data-dayevents]').forEach(list=>{
    list.addEventListener('dragover',e=>{
      e.preventDefault();
      const dragging=document.querySelector('.itinerary-event.dragging');
      if(!dragging) return;
      const after=getDragAfterElement(list, e.clientY);
      if(after==null){ list.appendChild(dragging); }
      else { list.insertBefore(dragging, after); }
    });
    list.addEventListener('drop',e=>{
      e.preventDefault();
      const dayId=list.dataset.dayevents;
      const day=itineraryItems.find(d=>d.id===dayId); if(!day) return;
      const order=[...list.querySelectorAll('[data-eventrow]')].map(el=>el.dataset.eventrow.split('|')[1]);
      day.events=order.map(id=>(day.events||[]).find(ev=>ev.id===id)).filter(Boolean);
      saveItinerary();
      renderItinerary();
    });
  });
}
function getDragAfterElement(container,y){
  const els=[...container.querySelectorAll('.itinerary-event:not(.dragging)')];
  return els.reduce((closest,child)=>{
    const box=child.getBoundingClientRect();
    const offset=y-box.top-box.height/2;
    if(offset<0 && offset>closest.offset){ return {offset,element:child}; }
    return closest;
  },{offset:Number.NEGATIVE_INFINITY,element:null}).element;
}
function deleteItineraryEvent(dayId,eventId){
  const day=itineraryItems.find(d=>d.id===dayId); if(!day) return;
  const ev=(day.events||[]).find(e=>e.id===eventId); if(!ev) return;
  if(!confirm(`「${ev.title}」を削除しますか？`)) return;
  day.events=(day.events||[]).filter(e=>e.id!==eventId);
  saveItinerary(); renderItinerary();
}
function setupItineraryActions(){
  document.querySelectorAll('[data-editday]').forEach(b=>b.onclick=()=>editItineraryDay(b.dataset.editday));
  document.querySelectorAll('[data-delday]').forEach(b=>b.onclick=()=>deleteItineraryDay(b.dataset.delday));
  document.querySelectorAll('[data-addevent]').forEach(b=>b.onclick=()=>addItineraryEvent(b.dataset.addevent));
  document.querySelectorAll('[data-editevent]').forEach(b=>b.onclick=()=>{const [dayId,eventId]=b.dataset.editevent.split('|');editItineraryEvent(dayId,eventId);});
  document.querySelectorAll('[data-delevent]').forEach(b=>b.onclick=()=>{const [dayId,eventId]=b.dataset.delevent.split('|');deleteItineraryEvent(dayId,eventId);});
}
$('addItineraryDayBtn').onclick=addItineraryDay;
if($('saveItineraryEventBtn')) $('saveItineraryEventBtn').onclick=saveItineraryEventDialog;
if($('cancelItineraryEventBtn')) $('cancelItineraryEventBtn').onclick=closeItineraryEventDialog;
function searchMapUrl(s){return s.url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.query || s.name + ' 父島')}`}
function navMapUrl(s){return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.query || s.name + ' 父島')}`}
function renderSpots(){const q=$('spotSearch').value.toLowerCase();const f=$('spotFilter').value;const all=[...APP.spots,...customSpots];const list=all.filter(s=>((f==='all'||s.category===f)||(f==='favorite'&&favorites[s.id]))&&(`${s.name} ${s.memo}`.toLowerCase().includes(q)));$('spotList').innerHTML=list.map(s=>`<article class="card spot"><div><h3>${favorites[s.id]?'⭐ ':''}${escapeHtml(s.name)}</h3><p>${escapeHtml(s.memo||'')}</p><span class="tag">${labelCat(s.category)}</span>${s.category==='custom'?'<span class="tag">旅行中追加</span>':''}${favorites[s.id]?'<span class="tag">お気に入り</span>':''}<div class="spot-actions"><a class="link-btn" href="${searchMapUrl(s)}" target="_blank" rel="noopener">Mapsで開く</a><a class="link-btn nav-btn" href="${navMapUrl(s)}" target="_blank" rel="noopener">ナビ</a><button class="visit-btn ${favorites[s.id]?'done':''}" data-fav="${s.id}">${favorites[s.id]?'★お気に入り':'☆お気に入り'}</button><button class="visit-btn ${visited[s.id]?'done':''}" data-visit="${s.id}">${visited[s.id]?'訪問済':'未訪問'}</button></div></div><div>${visited[s.id]?'✅':favorites[s.id]?'⭐':'📍'}</div></article>`).join('')||'<p class="muted">該当スポットなし</p>';document.querySelectorAll('[data-visit]').forEach(b=>b.onclick=()=>{visited[b.dataset.visit]=!visited[b.dataset.visit];store.set('visited',visited);renderSpots();renderVisitRate();});document.querySelectorAll('[data-fav]').forEach(b=>b.onclick=()=>{favorites[b.dataset.fav]=!favorites[b.dataset.fav];store.set('favorites',favorites);renderSpots();});}
function labelCat(c){return {view:'展望台',beach:'海岸',shop:'買い物',base:'拠点',nature:'自然',custom:'追加'}[c]||c}
$('spotSearch').oninput=renderSpots;$('spotFilter').onchange=renderSpots;$('addSpotBtn').onclick=()=>$('spotDialog').showModal();$('cancelSpotBtn').onclick=()=>{$('spotForm').reset();$('spotDialog').close();};$('spotForm').onsubmit=(e)=>{e.preventDefault();const name=$('newSpotName').value.trim();if(!name)return;const s={id:'c'+Date.now(),name,category:$('newSpotCategory').value,memo:$('newSpotMemo').value.trim(),url:$('newSpotUrl').value.trim()};customSpots.push(s);store.set('customSpots',customSpots);$('spotForm').reset();$('spotDialog').close();renderSpots();renderVisitRate();};
function renderVisitRate(){const total=APP.spots.length+customSpots.length;const done=Object.entries(visited).filter(([id,v])=>v && ([...APP.spots,...customSpots].some(s=>s.id===id))).length;$('visitRate').textContent=`${done}/${total}`;}

function allBirds(){return [...APP.birds,...customBirds];}
function renderBirds(){
  const q=$('birdSearch').value.toLowerCase();
  const f=$('birdFilter').value;
  const list=allBirds().filter(b=>(f==='all'||b.type.includes(f))&&(`${b.name} ${b.points||''} ${b.places||''} ${b.voice||''} ${b.memo||''}`.toLowerCase().includes(q)));
  $('birdList').innerHTML=list.map(b=>{
    const ownPhotos=birdUserPhotos[b.id]||[];
    const officialPhotos=(b.photos||[]);
    const photoHtml=[...officialPhotos.map((p,i)=>`<img class="bird-photo-thumb" src="${p}" alt="${escapeHtml(b.name)} 写真${i+1}" loading="lazy" onerror="this.classList.add('photo-missing');this.alt='写真取得不可';">`),...ownPhotos.map((p,i)=>`<div class="bird-user-photo"><img class="bird-photo-thumb" src="${p}" alt="${escapeHtml(b.name)} 追加写真${i+1}" loading="lazy"><button class="photo-delete" data-delbirdphoto="${b.id}" data-photoindex="${i}" type="button">×</button></div>`)].join('');
    const isCustom=String(b.id).startsWith('cb');
    return `<article class="card bird-card"><div class="bird-head"><div><p class="label">${birdTypeLabel(b.type)}${isCustom?' / 追加':''}</p><h3>${escapeHtml(b.name)}</h3><p class="muted">難易度：${escapeHtml(b.difficulty||'未設定')}｜観察場所：${escapeHtml(b.places||'未設定')}</p></div><button class="bird-check ${birdChecks[b.id]?'done':''}" data-bird="${b.id}">${birdChecks[b.id]?'観察済':'未観察'}</button></div><div class="bird-photos">${photoHtml||'<p class="muted">写真なし</p>'}</div><div class="bird-actions"><label class="link-btn file-label">📷 写真追加<input type="file" accept="image/*" data-birdphoto="${b.id}" hidden></label>${isCustom?`<button class="danger" data-delbird="${b.id}" type="button">鳥を削除</button>`:''}</div><div class="bird-info"><p><b>識別ポイント</b><br>${escapeHtml(b.points||'')}</p>${b.memo?`<p><b>メモ</b><br>${escapeHtml(b.memo)}</p>`:''}</div></article>`;
  }).join('')||'<p class="muted">該当する鳥はいません。</p>';
  document.querySelectorAll('[data-bird]').forEach(b=>b.onclick=()=>{birdChecks[b.dataset.bird]=!birdChecks[b.dataset.bird];store.set('birdChecks',birdChecks);renderBirds();renderBirdProgress();});
  document.querySelectorAll('[data-birdphoto]').forEach(input=>input.onchange=async()=>{const file=input.files[0];if(!file)return;const id=input.dataset.birdphoto;const photo=await compressImage(file);birdUserPhotos[id]=birdUserPhotos[id]||[];birdUserPhotos[id].push(photo);try{store.set('birdUserPhotos',birdUserPhotos)}catch(e){birdUserPhotos[id].pop();alert('写真容量が大きすぎて保存できませんでした。枚数を減らすか小さい画像で試してください。');}renderBirds();});
  document.querySelectorAll('[data-delbirdphoto]').forEach(btn=>btn.onclick=()=>{const id=btn.dataset.delbirdphoto;const idx=Number(btn.dataset.photoindex);if(!birdUserPhotos[id])return;birdUserPhotos[id].splice(idx,1);store.set('birdUserPhotos',birdUserPhotos);renderBirds();});
  document.querySelectorAll('[data-delbird]').forEach(btn=>btn.onclick=()=>{if(!confirm('追加した鳥を削除しますか？'))return;const id=btn.dataset.delbird;customBirds=customBirds.filter(b=>b.id!==id);delete birdChecks[id];delete birdUserPhotos[id];store.set('customBirds',customBirds);store.set('birdChecks',birdChecks);store.set('birdUserPhotos',birdUserPhotos);renderBirds();renderBirdProgress();});
  setupBirdPhotoViewer();
  renderBirdProgress();
}
function setupBirdPhotoViewer(){
  document.querySelectorAll('.bird-photo-thumb').forEach(img=>{
    img.onclick=()=>{
      if(img.classList.contains('photo-missing')) return;
      openBirdPhotoViewer(img.src, img.alt || '鳥写真');
    };
  });
}
function openBirdPhotoViewer(src, alt){
  const dialog=$('photoViewerDialog');
  const img=$('photoViewerImg');
  const caption=$('photoViewerCaption');
  if(!dialog||!img) return;
  img.src=src;
  img.alt=alt;
  if(caption) caption.textContent=alt;
  dialog.showModal();
}
function closeBirdPhotoViewer(){
  const dialog=$('photoViewerDialog');
  const img=$('photoViewerImg');
  if(img) img.src='';
  if(dialog?.open) dialog.close();
}
function birdTypeLabel(t){const a=[];if(t.includes('rare'))a.push('固有・希少');if(t.includes('land'))a.push('陸鳥');if(t.includes('sea'))a.push('海鳥');if(t.includes('shore'))a.push('海岸・渡り');return a.join(' / ')}
function renderBirdProgress(){const birds=allBirds();const total=birds.length;const done=birds.filter(b=>birdChecks[b.id]).length;const pct=total?Math.round(done/total*100):0;$('birdProgress').innerHTML=`<b>探鳥 ${done}/${total}</b><div class="bar"><i style="width:${pct}%"></i></div><p class="muted">${pct}% 観察済。鳥おったらタップや！</p>`;}
$('birdSearch').oninput=renderBirds;$('birdFilter').onchange=renderBirds;
$('addBirdBtn').onclick=()=>$('birdDialog').showModal();
$('cancelBirdBtn').onclick=()=>{$('birdForm').reset();$('birdDialog').close();};
$('birdForm').onsubmit=async(e)=>{e.preventDefault();const name=$('newBirdName').value.trim();if(!name)return;const id='cb'+Date.now();let photos=[];const file=$('newBirdPhoto').files[0];if(file)photos=[await compressImage(file)];const b={id,name,type:$('newBirdType').value,difficulty:$('newBirdDifficulty').value.trim()||'未設定',places:$('newBirdPlace').value.trim()||'未設定',points:$('newBirdPoint').value.trim()||'旅行中に追加した鳥',voice:'',memo:$('newBirdMemo').value.trim(),photos:[]};customBirds.push(b);if(photos.length)birdUserPhotos[id]=photos;try{store.set('customBirds',customBirds);store.set('birdUserPhotos',birdUserPhotos)}catch(err){customBirds=customBirds.filter(x=>x.id!==id);delete birdUserPhotos[id];alert('写真容量が大きすぎて保存できませんでした。写真なし、または小さい画像で登録してください。');return;}$('birdForm').reset();$('birdDialog').close();renderBirds();renderBirdProgress();};
function renderChecklist(){
  $('checklistItems').innerHTML=checklistItems.map(item=>`<div class="check-row checklist-edit-row"><label class="check-main"><input type="checkbox" data-check="${item.id}" ${checklistChecks[item.id]?'checked':''}><span>${escapeHtml(item.text)}</span></label><div class="check-actions"><button class="mini-btn" data-editcheck="${item.id}" type="button">編集</button><button class="mini-btn danger-mini" data-delcheck="${item.id}" type="button">削除</button></div></div>`).join('')||'<p class="muted">持ち物がありません。＋から追加できます。</p>';
  document.querySelectorAll('[data-check]').forEach(c=>c.onchange=()=>{checklistChecks[c.dataset.check]=c.checked;store.set('checklistChecksV10',checklistChecks);renderCheckProgress();});
  document.querySelectorAll('[data-editcheck]').forEach(b=>b.onclick=()=>{const item=checklistItems.find(x=>x.id===b.dataset.editcheck);if(!item)return;const next=prompt('持ち物を編集', item.text);if(next===null)return;const text=next.trim();if(!text)return;item.text=text;store.set('checklistItemsV10',checklistItems);renderChecklist();});
  document.querySelectorAll('[data-delcheck]').forEach(b=>b.onclick=()=>{const item=checklistItems.find(x=>x.id===b.dataset.delcheck);if(!item)return;if(!confirm(`「${item.text}」を削除しますか？`))return;checklistItems=checklistItems.filter(x=>x.id!==item.id);delete checklistChecks[item.id];store.set('checklistItemsV10',checklistItems);store.set('checklistChecksV10',checklistChecks);renderChecklist();});
  renderCheckProgress();
}
function renderCheckProgress(){const total=checklistItems.length;const done=checklistItems.filter(item=>checklistChecks[item.id]).length;const pct=total?Math.round(done/total*100):0;$('checkProgress').innerHTML=`<b>準備 ${done}/${total}</b><div class="bar"><i style="width:${pct}%"></i></div><p class="muted">${pct}% 完了</p>`;}
function addChecklistItem(){
  const input=$('newChecklistItem');
  if(!input)return;
  const text=input.value.trim();
  if(!text)return;
  checklistItems.push({id:'ci_'+Date.now()+'_'+Math.random().toString(36).slice(2,7), text});
  store.set('checklistItemsV10',checklistItems);
  input.value='';
  renderChecklist();
}
$('addChecklistBtn').onclick=addChecklistItem;
$('newChecklistItem').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addChecklistItem();}});
$('resetChecklist').onclick=()=>{if(!confirm('チェック状態だけリセットしますか？ 持ち物リストは残ります。'))return;checklistChecks={};store.set('checklistChecksV10',checklistChecks);renderChecklist();};
function telHref(tel){return 'tel:'+String(tel||'').replace(/[^0-9+]/g,'')}
function renderReservations(){$('reservationList').innerHTML=APP.reservations.map(r=>`<article class="card"><p class="label">予約情報</p><h3>${escapeHtml(r.title)}</h3><p>${escapeHtml(r.body)}</p>${r.tel?`<div class="reservation-actions"><a class="link-btn phone-btn" href="${telHref(r.tel)}">📞 ${escapeHtml(r.telLabel||'電話する')}<small>${escapeHtml(r.tel)}</small></a></div>`:''}</article>`).join('')}
function renderMemos(){$('memoList').innerHTML=memos.slice().reverse().map((m,idx)=>{const realIndex=memos.length-1-idx;return `<article class="card"><p class="label">${m.date}</p><p>${escapeHtml(m.text).replace(/\n/g,'<br>')}</p>${m.photo?`<img class="memo-photo" src="${m.photo}" alt="旅行メモ写真">`:''}<div class="memo-actions"><button class="danger" data-delmemo="${realIndex}">削除</button></div></article>`}).join('')||'<p class="muted">まだメモはありません。</p>';document.querySelectorAll('[data-delmemo]').forEach(b=>b.onclick=()=>{memos.splice(Number(b.dataset.delmemo),1);store.set('memos',memos);renderMemos();});}
$('saveMemo').onclick=async()=>{const text=$('memoText').value.trim();if(!text)return;let photo='';const file=$('memoPhoto').files[0];if(file) photo=await compressImage(file);memos.push({date:$('memoDate').value,text,photo});try{store.set('memos',memos)}catch(e){alert('写真が大きすぎて保存できませんでした。写真なしで保存します。');memos[memos.length-1].photo='';store.set('memos',memos)}$('memoText').value='';$('memoPhoto').value='';renderMemos();};
function compressImage(file){return new Promise((resolve)=>{const img=new Image();const reader=new FileReader();reader.onload=()=>{img.onload=()=>{const max=1200;let w=img.width,h=img.height;if(Math.max(w,h)>max){if(w>h){h=Math.round(h*max/w);w=max}else{w=Math.round(w*max/h);h=max}}const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;canvas.getContext('2d').drawImage(img,0,0,w,h);resolve(canvas.toDataURL('image/jpeg',0.72));};img.src=reader.result;};reader.readAsDataURL(file);});}
async function loadWeather(){try{const url='https://api.open-meteo.com/v1/forecast?latitude=27.095&longitude=142.191&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTokyo';const r=await fetch(url);const d=await r.json();const temp=Math.round(d.current.temperature_2m);const wind=Math.round(d.current.wind_speed_10m);const code=d.current.weather_code;$('weatherNow').textContent=`${temp}℃・${weatherText(code)}`;$('weatherMeta').textContent=`風速 ${wind}km/h｜Open-Meteo`; $('weatherIcon').textContent=weatherEmoji(code);$('weatherDays').innerHTML=d.daily.time.slice(0,7).map((date,i)=>`<div class="forecast"><b>${date.slice(5).replace('-','/')}</b><span>${weatherEmoji(d.daily.weather_code[i])}</span><small>${Math.round(d.daily.temperature_2m_min[i])}〜${Math.round(d.daily.temperature_2m_max[i])}℃ / ${d.daily.precipitation_probability_max[i]||0}%</small></div>`).join('');}catch(e){$('weatherNow').textContent='天気取得できず';$('weatherMeta').textContent='オフライン時は表示されません';$('weatherDays').innerHTML='';}}
function weatherText(c){if([0].includes(c))return'快晴';if([1,2,3].includes(c))return'晴れ/くもり';if([45,48].includes(c))return'霧';if([51,53,55,61,63,65,80,81,82].includes(c))return'雨';if([95,96,99].includes(c))return'雷雨';return'天気'}function weatherEmoji(c){if(c===0)return'☀️';if([1,2,3].includes(c))return'⛅';if([51,53,55,61,63,65,80,81,82].includes(c))return'🌧️';if([95,96,99].includes(c))return'⛈️';return'🌤️'}
function escapeHtml(str){return String(str).replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
let deferredPrompt;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('installBtn').classList.remove('hidden');});$('installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();deferredPrompt=null;$('installBtn').classList.add('hidden')}};



const mascotAssets={
  tomokichi:[
    {src:'assets/characters/wai_birdwatch01.png', lines:['鳥？ゴミやんけ','暑さとの闘いやな','双眼鏡どこや！','屁してもバレない','全然おらんがな']},
    {src:'assets/characters/wai_birdwatch02.png', lines:['おじま、、、','フクロウおらんのか','コウモリやんけ','ハゲてまう！','ハゲポコ元気？']},
    {src:'assets/characters/wai_naked.png', lines:['ハヒャー!!!','あばばばばば!!!','ぴーち!!','風になる!!','全裸運動会!!!']},
    {src:'assets/characters/wai_pants.png', lines:['暑いので仕方がない','ｱｶﾁｬｰﾝ!!ｱｶﾁｬｰﾝ!!','ﾜｯｼｮｲﾜｯｼｮｲ','水着とパンツに違いはないやろ','全裸じゃないので']}
  ],
  ponchan:[
    {src:'assets/characters/pon_ship.png', lines:['７％売ってないんか','ネットがないと死ぬ','酔い止めって酒と飲んでええんか？','素人はだまっとれ','金はある、氷結をだな']},
    {src:'assets/characters/pon_snorkel.png', lines:['海でシッコしてもバレない','海が氷結と同じ色や','氷結がないと死ぬ病','ｵｯｵｯｵｯ','ビビンバがあればええ']},
    {src:'assets/characters/pon_yashi.png', lines:['ワイの～','ワイやで','ｺｯﾁ!!ｺｯﾁ!!ｺｯﾁ!!','ｵﾁ~ﾝﾁﾝ!!!','ション場どこや']},
    {src:'assets/characters/couple_ship.png', lines:['しぇむ！！','しぇむしぇむ、、、','赤ちゃんなので！','ﾁｬﾊﾊ~ﾝ!!!','おがまるパック!!!']}
  ]
};
const rareMascot={
  src:'assets/characters/rare_kohtaro.png',
  lines:['吉四六。。。','横須賀ちゃうんか','ゴルフ場ないんか','ﾋﾛﾐｻｰﾝ!!ﾋﾛﾐｻｰﾝ!!','いいですよね、こういう時間'],
  showMs:5000,
  probability:0.1
};
let rareMascotTimer=null;
let mascotState={mascotTomokichi:null,mascotPonchan:null};
let mascotDragPauseUntil=0;
let mascotRandomTimer=null;
let mascotSuppressClickUntil=0;
const mascotPositionStoreKey='mascotPositionsV4';

function pickMascot(who){const list=mascotAssets[who];return list[Math.floor(Math.random()*list.length)];}
function mascotBounds(el){
  const margin=8;
  const rect=el.getBoundingClientRect();
  const w=rect.width||88;
  const h=rect.height||88;
  const maxX=Math.max(margin, window.innerWidth-w-margin);
  const maxY=Math.max(margin, window.innerHeight-h-86);
  return {margin,w,h,maxX,maxY};
}
function clampMascotPosition(el,x,y){
  const b=mascotBounds(el);
  return {x:Math.min(Math.max(x,b.margin),b.maxX), y:Math.min(Math.max(y,b.margin),b.maxY)};
}
function saveMascotPositions(){
  const data={};
  ['mascotTomokichi','mascotPonchan','mascotRareKohtaro'].forEach(id=>{
    const el=$(id); if(!el) return;
    data[id]={left:el.style.left, top:el.style.top};
  });
  store.set(mascotPositionStoreKey,data);
}
function restoreMascotPositions(){
  const data=store.get(mascotPositionStoreKey,{});
  ['mascotTomokichi','mascotPonchan','mascotRareKohtaro'].forEach(id=>{
    const el=$(id); if(!el) return;
    const pos=data[id];
    if(pos&&pos.left&&pos.top){el.style.left=pos.left;el.style.top=pos.top;}
  });
}
function setMascotItem(id, item){
  const el=$(id); if(!el || !item) return;
  mascotState[id]=item;
  el.style.backgroundImage=`url("${item.src}")`;
  el.title=item.src.split('/').pop();
}
function setMascotImage(id, who){
  setMascotItem(id, pickMascot(who));
}
function allNormalMascotItems(){
  return [...mascotAssets.tomokichi, ...mascotAssets.ponchan];
}
function pickDifferentMascotItem(currentSrc){
  const list=allNormalMascotItems().filter(item=>item.src!==currentSrc);
  const pool=list.length?list:allNormalMascotItems();
  return pool[Math.floor(Math.random()*pool.length)];
}
function popMascotAtRandomPosition(id){
  const el=$(id); if(!el) return;
  const b=mascotBounds(el);
  const x=b.margin+Math.random()*(b.maxX-b.margin);
  const y=Math.max(80, window.innerHeight*.48)+Math.random()*Math.max(20,(b.maxY-window.innerHeight*.48));
  const pos=clampMascotPosition(el,x,y);
  el.style.left=pos.x+'px';
  el.style.top=pos.y+'px';
  el.classList.add('mascot-pop');
  setTimeout(()=>el.classList.remove('mascot-pop'),900);
}
function changeMascotAfterTalk(id, isRare=false){
  changeMascotAfterTalk.timers = changeMascotAfterTalk.timers || {};
  clearTimeout(changeMascotAfterTalk.timers[id]);
  changeMascotAfterTalk.timers[id]=setTimeout(()=>{
    const bubble=$('mascotBubble');
    if(bubble) bubble.classList.add('hidden');
    if(isRare){
      const rareEl=$('mascotRareKohtaro');
      if(rareEl) rareEl.classList.add('hidden');
      clearTimeout(maybeShowRareMascot.hideTimer);
      const targetId=Math.random()>.5?'mascotTomokichi':'mascotPonchan';
      const target=$(targetId);
      if(!target) return;
      setMascotImage(targetId, targetId==='mascotTomokichi'?'tomokichi':'ponchan');
      popMascotAtRandomPosition(targetId);
      saveMascotPositions();
      return;
    }
    const el=$(id); if(!el) return;
    const current=mascotState[id]?.src;
    const next=pickDifferentMascotItem(current);
    setMascotItem(id, next);
    el.classList.remove('hidden');
    popMascotAtRandomPosition(id);
    saveMascotPositions();
    maybeShowRareMascot(false);
  },3000);
}
function showMascotLine(id){
  if(Date.now()<mascotSuppressClickUntil) return;
  const el=$(id); if(!el) return;
  const bubble=$('mascotBubble');
  const item=mascotState[id] || pickMascot(id==='mascotTomokichi'?'tomokichi':'ponchan');
  const lines=item.lines || ['島最高〜'];
  bubble.textContent=lines[Math.floor(Math.random()*lines.length)];
  const r=el.getBoundingClientRect();
  bubble.style.left=Math.max(12,Math.min(window.innerWidth-230,r.left-50))+'px';
  bubble.style.top=Math.max(80,r.top-56)+'px';
  bubble.classList.remove('hidden');
  clearTimeout(showMascotLine.timer);
  showMascotLine.timer=setTimeout(()=>bubble.classList.add('hidden'),3000);
  changeMascotAfterTalk(id,false);
}
function moveMascot(id, force=false){
  if(!force && Date.now()<mascotDragPauseUntil) return;
  const el=$(id); if(!el) return;
  const who=id==='mascotTomokichi'?'tomokichi':'ponchan';
  setMascotImage(id,who);
  const b=mascotBounds(el);
  const x=b.margin+Math.random()*(b.maxX-b.margin);
  const y=Math.max(80, window.innerHeight*.50)+Math.random()*Math.max(20,(b.maxY-window.innerHeight*.50));
  const pos=clampMascotPosition(el,x,y);
  el.style.left=pos.x+'px';
  el.style.top=pos.y+'px';
  el.classList.add('mascot-pop');
  setTimeout(()=>el.classList.remove('mascot-pop'),900);
  saveMascotPositions();
}
function enableMascotDrag(id){
  const el=$(id); if(!el) return;
  let startX=0,startY=0,startLeft=0,startTop=0,dragging=false,moved=false;
  el.addEventListener('pointerdown',e=>{
    if(e.button!==undefined && e.button!==0) return;
    const r=el.getBoundingClientRect();
    startX=e.clientX; startY=e.clientY; startLeft=r.left; startTop=r.top;
    dragging=true; moved=false;
    el.setPointerCapture?.(e.pointerId);
    el.classList.add('mascot-dragging');
  });
  el.addEventListener('pointermove',e=>{
    if(!dragging) return;
    const dx=e.clientX-startX, dy=e.clientY-startY;
    if(Math.abs(dx)+Math.abs(dy)>5) moved=true;
    const pos=clampMascotPosition(el,startLeft+dx,startTop+dy);
    el.style.left=pos.x+'px';
    el.style.top=pos.y+'px';
    e.preventDefault();
  }, {passive:false});
  const finish=e=>{
    if(!dragging) return;
    dragging=false;
    el.releasePointerCapture?.(e.pointerId);
    el.classList.remove('mascot-dragging');
    if(moved){
      mascotDragPauseUntil=Date.now()+30000;
      mascotSuppressClickUntil=Date.now()+450;
      saveMascotPositions();
      $('mascotBubble').classList.add('hidden');
    }
  };
  el.addEventListener('pointerup',finish);
  el.addEventListener('pointercancel',finish);
}
function ensureRareMascotElement(){
  let el=$('mascotRareKohtaro');
  if(el) return el;
  el=document.createElement('button');
  el.id='mascotRareKohtaro';
  el.type='button';
  el.className='mascot mascot-rare hidden';
  el.setAttribute('aria-label','レアこうたろう');
  el.style.backgroundImage=`url("${rareMascot.src}")`;
  el.onclick=()=>showRareMascotLine();
  $('mascotLayer').appendChild(el);
  return el;
}
function showRareMascotLine(){
  const el=$('mascotRareKohtaro'); if(!el || el.classList.contains('hidden')) return;
  const bubble=$('mascotBubble');
  bubble.textContent=rareMascot.lines[Math.floor(Math.random()*rareMascot.lines.length)];
  const r=el.getBoundingClientRect();
  bubble.style.left=Math.max(12,Math.min(window.innerWidth-230,r.left-50))+'px';
  bubble.style.top=Math.max(80,r.top-56)+'px';
  bubble.classList.remove('hidden');
  clearTimeout(showMascotLine.timer);
  showMascotLine.timer=setTimeout(()=>bubble.classList.add('hidden'),3000);
  clearTimeout(maybeShowRareMascot.hideTimer);
  changeMascotAfterTalk('mascotRareKohtaro',true);
}
function maybeShowRareMascot(force=false){
  const el=ensureRareMascotElement();
  if(!el) return;
  const blocked = Date.now()<mascotDragPauseUntil || !document.hasFocus?.();
  const roll = Math.random();
  if(!force && (blocked || roll>=rareMascot.probability)) return;
  if(!el.classList.contains('hidden')) return;
  clearTimeout(maybeShowRareMascot.hideTimer);
  const b=mascotBounds(el);
  const x=b.margin+Math.random()*(b.maxX-b.margin);
  const y=Math.max(90, window.innerHeight*.42)+Math.random()*Math.max(20,(b.maxY-window.innerHeight*.42));
  const pos=clampMascotPosition(el,x,y);
  el.style.left=pos.x+'px';
  el.style.top=pos.y+'px';
  el.style.backgroundImage=`url("${rareMascot.src}")`;
  el.classList.remove('hidden');
  el.classList.remove('mascot-pop');
  void el.offsetWidth;
  el.classList.add('mascot-pop');
  setTimeout(()=>el.classList.remove('mascot-pop'),900);
  maybeShowRareMascot.hideTimer=setTimeout(()=>{
    el.classList.add('hidden');
    const bubble=$('mascotBubble');
    if(bubble) bubble.classList.add('hidden');
  }, rareMascot.showMs);
}
function scheduleMascotRandomMove(){
  clearInterval(mascotRandomTimer);
  mascotRandomTimer=setInterval(()=>{
    moveMascot(Math.random()>.5?'mascotTomokichi':'mascotPonchan');
    maybeShowRareMascot(false);
  },9000);
  clearInterval(rareMascotTimer);
  rareMascotTimer=setInterval(()=>maybeShowRareMascot(false),4000);
}

$('mascotTomokichi').onclick=()=>showMascotLine('mascotTomokichi');
$('mascotPonchan').onclick=()=>showMascotLine('mascotPonchan');
setMascotImage('mascotTomokichi','tomokichi');
setMascotImage('mascotPonchan','ponchan');
restoreMascotPositions();
enableMascotDrag('mascotTomokichi');
enableMascotDrag('mascotPonchan');
ensureRareMascotElement();
enableMascotDrag('mascotRareKohtaro');
scheduleMascotRandomMove();
setTimeout(()=>{moveMascot('mascotTomokichi',true);moveMascot('mascotPonchan',true);},900);
window.addEventListener('resize',()=>{
  ['mascotTomokichi','mascotPonchan','mascotRareKohtaro'].forEach(id=>{
    const el=$(id); if(!el) return;
    const r=el.getBoundingClientRect();
    const pos=clampMascotPosition(el,r.left,r.top);
    el.style.left=pos.x+'px'; el.style.top=pos.y+'px';
  });
  saveMascotPositions();
});

const closePhotoViewerBtn=$('closePhotoViewer');
if(closePhotoViewerBtn) closePhotoViewerBtn.onclick=closeBirdPhotoViewer;
const photoViewerDialog=$('photoViewerDialog');
if(photoViewerDialog) photoViewerDialog.addEventListener('click',e=>{if(e.target===photoViewerDialog) closeBirdPhotoViewer();});
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeBirdPhotoViewer();});

if('serviceWorker' in navigator){navigator.serviceWorker.register('./service-worker.js').catch(()=>{});}
updateCountdown();renderItinerary();renderSpots();renderVisitRate();renderBirds();renderChecklist();renderReservations();renderMemos();loadWeather();setInterval(updateCountdown,3600000);
