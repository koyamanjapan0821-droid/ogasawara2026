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
const store = {get:(k,d)=>JSON.parse(localStorage.getItem(k)||JSON.stringify(d)), set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))};
let customSpots = store.get('customSpots', []), visited = store.get('visited', {}), favorites = store.get('favorites', {}), checks = store.get('checks', {}), birdChecks = store.get('birdChecks', {}), memos = store.get('memos', []), customBirds = store.get('customBirds', []), birdUserPhotos = store.get('birdUserPhotos', {});
function switchTab(id){document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));document.querySelectorAll('.tabbar button').forEach(b=>b.classList.toggle('active',b.dataset.tab===id));scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>switchTab(b.dataset.tab));document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>switchTab(b.dataset.jump));
function updateCountdown(){const now=new Date();const diff=APP.startDate-now;if(diff<=0){$('countdown').textContent='出発済';return}const d=Math.ceil(diff/86400000);$('countdown').textContent=`あと${d}日`;}
function renderItinerary(){const wrap=$('itineraryList');wrap.innerHTML=APP.itinerary.map(day=>`<article class="card day-card"><h3>${day.title}</h3><p class="muted">${day.date}</p><div class="timeline">${day.events.map(e=>`<div class="event"><div class="time">${e[0]}</div><div><div class="event-title">${e[1]}</div><div class="muted">${e[2]}</div></div></div>`).join('')}</div></article>`).join(''); const today=APP.itinerary.find(d=>new Date(d.date+'T23:59:59+09:00')>=new Date())||APP.itinerary[0]; $('nextPlan').innerHTML=today.events.slice(0,3).map(e=>`<div class="event"><div class="time">${e[0]}</div><div><div class="event-title">${e[1]}</div><div class="muted">${e[2]}</div></div></div>`).join('');}
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
    const photoHtml=[...officialPhotos.map((p,i)=>`<img src="${p}" alt="${escapeHtml(b.name)} 写真${i+1}" loading="lazy" onerror="this.classList.add('photo-missing');this.alt='写真取得不可';">`),...ownPhotos.map((p,i)=>`<div class="bird-user-photo"><img src="${p}" alt="${escapeHtml(b.name)} 追加写真${i+1}" loading="lazy"><button class="photo-delete" data-delbirdphoto="${b.id}" data-photoindex="${i}" type="button">×</button></div>`)].join('');
    const isCustom=String(b.id).startsWith('cb');
    return `<article class="card bird-card"><div class="bird-head"><div><p class="label">${birdTypeLabel(b.type)}${isCustom?' / 追加':''}</p><h3>${escapeHtml(b.name)}</h3><p class="muted">難易度：${escapeHtml(b.difficulty||'未設定')}｜観察場所：${escapeHtml(b.places||'未設定')}</p></div><button class="bird-check ${birdChecks[b.id]?'done':''}" data-bird="${b.id}">${birdChecks[b.id]?'観察済':'未観察'}</button></div><div class="bird-photos">${photoHtml||'<p class="muted">写真なし</p>'}</div><div class="bird-actions"><label class="link-btn file-label">📷 写真追加<input type="file" accept="image/*" data-birdphoto="${b.id}" hidden></label>${isCustom?`<button class="danger" data-delbird="${b.id}" type="button">鳥を削除</button>`:''}</div><div class="bird-info"><p><b>識別ポイント</b><br>${escapeHtml(b.points||'')}</p>${b.memo?`<p><b>メモ</b><br>${escapeHtml(b.memo)}</p>`:''}</div></article>`;
  }).join('')||'<p class="muted">該当する鳥はいません。</p>';
  document.querySelectorAll('[data-bird]').forEach(b=>b.onclick=()=>{birdChecks[b.dataset.bird]=!birdChecks[b.dataset.bird];store.set('birdChecks',birdChecks);renderBirds();renderBirdProgress();});
  document.querySelectorAll('[data-birdphoto]').forEach(input=>input.onchange=async()=>{const file=input.files[0];if(!file)return;const id=input.dataset.birdphoto;const photo=await compressImage(file);birdUserPhotos[id]=birdUserPhotos[id]||[];birdUserPhotos[id].push(photo);try{store.set('birdUserPhotos',birdUserPhotos)}catch(e){birdUserPhotos[id].pop();alert('写真容量が大きすぎて保存できませんでした。枚数を減らすか小さい画像で試してください。');}renderBirds();});
  document.querySelectorAll('[data-delbirdphoto]').forEach(btn=>btn.onclick=()=>{const id=btn.dataset.delbirdphoto;const idx=Number(btn.dataset.photoindex);if(!birdUserPhotos[id])return;birdUserPhotos[id].splice(idx,1);store.set('birdUserPhotos',birdUserPhotos);renderBirds();});
  document.querySelectorAll('[data-delbird]').forEach(btn=>btn.onclick=()=>{if(!confirm('追加した鳥を削除しますか？'))return;const id=btn.dataset.delbird;customBirds=customBirds.filter(b=>b.id!==id);delete birdChecks[id];delete birdUserPhotos[id];store.set('customBirds',customBirds);store.set('birdChecks',birdChecks);store.set('birdUserPhotos',birdUserPhotos);renderBirds();renderBirdProgress();});
  renderBirdProgress();
}
function birdTypeLabel(t){const a=[];if(t.includes('rare'))a.push('固有・希少');if(t.includes('land'))a.push('陸鳥');if(t.includes('sea'))a.push('海鳥');if(t.includes('shore'))a.push('海岸・渡り');return a.join(' / ')}
function renderBirdProgress(){const birds=allBirds();const total=birds.length;const done=birds.filter(b=>birdChecks[b.id]).length;const pct=total?Math.round(done/total*100):0;$('birdProgress').innerHTML=`<b>探鳥 ${done}/${total}</b><div class="bar"><i style="width:${pct}%"></i></div><p class="muted">${pct}% 観察済。鳥おったらタップや！</p>`;}
$('birdSearch').oninput=renderBirds;$('birdFilter').onchange=renderBirds;
$('addBirdBtn').onclick=()=>$('birdDialog').showModal();
$('cancelBirdBtn').onclick=()=>{$('birdForm').reset();$('birdDialog').close();};
$('birdForm').onsubmit=async(e)=>{e.preventDefault();const name=$('newBirdName').value.trim();if(!name)return;const id='cb'+Date.now();let photos=[];const file=$('newBirdPhoto').files[0];if(file)photos=[await compressImage(file)];const b={id,name,type:$('newBirdType').value,difficulty:$('newBirdDifficulty').value.trim()||'未設定',places:$('newBirdPlace').value.trim()||'未設定',points:$('newBirdPoint').value.trim()||'旅行中に追加した鳥',voice:'',memo:$('newBirdMemo').value.trim(),photos:[]};customBirds.push(b);if(photos.length)birdUserPhotos[id]=photos;try{store.set('customBirds',customBirds);store.set('birdUserPhotos',birdUserPhotos)}catch(err){customBirds=customBirds.filter(x=>x.id!==id);delete birdUserPhotos[id];alert('写真容量が大きすぎて保存できませんでした。写真なし、または小さい画像で登録してください。');return;}$('birdForm').reset();$('birdDialog').close();renderBirds();renderBirdProgress();};
function renderChecklist(){$('checklistItems').innerHTML=APP.checklist.map((item,i)=>`<label class="check-row"><input type="checkbox" data-check="${i}" ${checks[i]?'checked':''}><span>${item}</span></label>`).join('');document.querySelectorAll('[data-check]').forEach(c=>c.onchange=()=>{checks[c.dataset.check]=c.checked;store.set('checks',checks);renderCheckProgress();});renderCheckProgress();}
function renderCheckProgress(){const total=APP.checklist.length;const done=Object.values(checks).filter(Boolean).length;const pct=total?Math.round(done/total*100):0;$('checkProgress').innerHTML=`<b>準備 ${done}/${total}</b><div class="bar"><i style="width:${pct}%"></i></div><p class="muted">${pct}% 完了</p>`;}
$('resetChecklist').onclick=()=>{checks={};store.set('checks',checks);renderChecklist();};
function renderReservations(){$('reservationList').innerHTML=APP.reservations.map(r=>`<article class="card"><p class="label">予約情報</p><h3>${escapeHtml(r.title)}</h3><p>${escapeHtml(r.body)}</p></article>`).join('')}
function renderMemos(){$('memoList').innerHTML=memos.slice().reverse().map((m,idx)=>{const realIndex=memos.length-1-idx;return `<article class="card"><p class="label">${m.date}</p><p>${escapeHtml(m.text).replace(/\n/g,'<br>')}</p>${m.photo?`<img class="memo-photo" src="${m.photo}" alt="旅行メモ写真">`:''}<div class="memo-actions"><button class="danger" data-delmemo="${realIndex}">削除</button></div></article>`}).join('')||'<p class="muted">まだメモはありません。</p>';document.querySelectorAll('[data-delmemo]').forEach(b=>b.onclick=()=>{memos.splice(Number(b.dataset.delmemo),1);store.set('memos',memos);renderMemos();});}
$('saveMemo').onclick=async()=>{const text=$('memoText').value.trim();if(!text)return;let photo='';const file=$('memoPhoto').files[0];if(file) photo=await compressImage(file);memos.push({date:$('memoDate').value,text,photo});try{store.set('memos',memos)}catch(e){alert('写真が大きすぎて保存できませんでした。写真なしで保存します。');memos[memos.length-1].photo='';store.set('memos',memos)}$('memoText').value='';$('memoPhoto').value='';renderMemos();};
function compressImage(file){return new Promise((resolve)=>{const img=new Image();const reader=new FileReader();reader.onload=()=>{img.onload=()=>{const max=1200;let w=img.width,h=img.height;if(Math.max(w,h)>max){if(w>h){h=Math.round(h*max/w);w=max}else{w=Math.round(w*max/h);h=max}}const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;canvas.getContext('2d').drawImage(img,0,0,w,h);resolve(canvas.toDataURL('image/jpeg',0.72));};img.src=reader.result;};reader.readAsDataURL(file);});}
async function loadWeather(){try{const url='https://api.open-meteo.com/v1/forecast?latitude=27.095&longitude=142.191&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTokyo';const r=await fetch(url);const d=await r.json();const temp=Math.round(d.current.temperature_2m);const wind=Math.round(d.current.wind_speed_10m);const code=d.current.weather_code;$('weatherNow').textContent=`${temp}℃・${weatherText(code)}`;$('weatherMeta').textContent=`風速 ${wind}km/h｜Open-Meteo`; $('weatherIcon').textContent=weatherEmoji(code);$('weatherDays').innerHTML=d.daily.time.slice(0,7).map((date,i)=>`<div class="forecast"><b>${date.slice(5).replace('-','/')}</b><span>${weatherEmoji(d.daily.weather_code[i])}</span><small>${Math.round(d.daily.temperature_2m_min[i])}〜${Math.round(d.daily.temperature_2m_max[i])}℃ / ${d.daily.precipitation_probability_max[i]||0}%</small></div>`).join('');}catch(e){$('weatherNow').textContent='天気取得できず';$('weatherMeta').textContent='オフライン時は表示されません';$('weatherDays').innerHTML='';}}
function weatherText(c){if([0].includes(c))return'快晴';if([1,2,3].includes(c))return'晴れ/くもり';if([45,48].includes(c))return'霧';if([51,53,55,61,63,65,80,81,82].includes(c))return'雨';if([95,96,99].includes(c))return'雷雨';return'天気'}function weatherEmoji(c){if(c===0)return'☀️';if([1,2,3].includes(c))return'⛅';if([51,53,55,61,63,65,80,81,82].includes(c))return'🌧️';if([95,96,99].includes(c))return'⛈️';return'🌤️'}
function escapeHtml(str){return String(str).replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
let deferredPrompt;window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('installBtn').classList.remove('hidden');});$('installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();deferredPrompt=null;$('installBtn').classList.add('hidden')}};



const mascotAssets={
  tomokichi:[
    {src:'assets/characters/wai_birdwatch01.png', lines:['鳥おった！！','動くな動くな動くな！','双眼鏡どこや！','今の撮れた！？','アカガシラか！？']},
    {src:'assets/characters/wai_birdwatch02.png', lines:['海鳥きたー！','カツオドリや！','酔う前に探鳥や！','右舷見て右舷！','ノスリちゃうか！？']},
    {src:'assets/characters/wai_pants.png', lines:['暑いので仕方がない','おまわりさんおらんからね＾＾','ﾜｯｼｮｲﾜｯｼｮｲ','水着とパンツに違いはないやろ','全裸じゃないので']}
  ],
  ponchan:[
    {src:'assets/characters/pon_ship.png', lines:['氷結補給〜♪','船でも飲むで〜','あと何本あるん？','海見ながら飲みたい〜','着いたらまず乾杯や']},
    {src:'assets/characters/pon_snorkel.png', lines:['海の中でも飲みたい〜','氷結持って潜れんかな','泳いだ後は一杯や','イルカ見ながら飲みたい','冷えてるかな〜']},
    {src:'assets/characters/pon_yashi.png', lines:['ヤシガニと乾杯や〜','飲みながら見よ〜','島最高や〜','次はレモン補給や','もう一本いこか♪']},
    {src:'assets/characters/couple_ship.png', lines:['鳥おった！！','乾杯しよ〜','右見て右！','飲みながら探鳥や','小笠原最高！']}
  ]
};
const rareMascot={
  src:'assets/characters/rare_kohtaro.png',
  lines:['いいちこ。。。','横須賀ちゃうんか','ゴルフ場ないんか'],
  showMs:5000,
  probability:0.05
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
  ['mascotTomokichi','mascotPonchan'].forEach(id=>{
    const el=$(id); if(!el) return;
    data[id]={left:el.style.left, top:el.style.top};
  });
  store.set(mascotPositionStoreKey,data);
}
function restoreMascotPositions(){
  const data=store.get(mascotPositionStoreKey,{});
  ['mascotTomokichi','mascotPonchan'].forEach(id=>{
    const el=$(id); if(!el) return;
    const pos=data[id];
    if(pos&&pos.left&&pos.top){el.style.left=pos.left;el.style.top=pos.top;}
  });
}
function setMascotImage(id, who){
  const el=$(id); if(!el) return;
  const item=pickMascot(who);
  mascotState[id]=item;
  el.style.backgroundImage=`url("${item.src}")`;
  el.title=item.src.split('/').pop();
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
  showMascotLine.timer=setTimeout(()=>bubble.classList.add('hidden'),2800);
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
  showMascotLine.timer=setTimeout(()=>bubble.classList.add('hidden'),2000);
}
function maybeShowRareMascot(force=false){
  const el=ensureRareMascotElement();
  if(!force && (Date.now()<mascotDragPauseUntil || Math.random()>rareMascot.probability)) return;
  if(!el.classList.contains('hidden')) return;
  const b=mascotBounds(el);
  const x=b.margin+Math.random()*(b.maxX-b.margin);
  const y=Math.max(90, window.innerHeight*.42)+Math.random()*Math.max(20,(b.maxY-window.innerHeight*.42));
  const pos=clampMascotPosition(el,x,y);
  el.style.left=pos.x+'px';
  el.style.top=pos.y+'px';
  el.classList.remove('hidden');
  el.classList.add('mascot-pop');
  setTimeout(()=>el.classList.remove('mascot-pop'),900);
  clearTimeout(maybeShowRareMascot.hideTimer);
  maybeShowRareMascot.hideTimer=setTimeout(()=>{
    el.classList.add('hidden');
    $('mascotBubble').classList.add('hidden');
  }, rareMascot.showMs);
}
function scheduleMascotRandomMove(){
  clearInterval(mascotRandomTimer);
  mascotRandomTimer=setInterval(()=>moveMascot(Math.random()>.5?'mascotTomokichi':'mascotPonchan'),9000);
  clearInterval(rareMascotTimer);
  rareMascotTimer=setInterval(()=>maybeShowRareMascot(false),12000);
}

$('mascotTomokichi').onclick=()=>showMascotLine('mascotTomokichi');
$('mascotPonchan').onclick=()=>showMascotLine('mascotPonchan');
setMascotImage('mascotTomokichi','tomokichi');
setMascotImage('mascotPonchan','ponchan');
restoreMascotPositions();
enableMascotDrag('mascotTomokichi');
enableMascotDrag('mascotPonchan');
ensureMascotRare=ensureRareMascotElement();
enableMascotDrag('mascotRareKohtaro');
scheduleMascotRandomMove();
setTimeout(()=>{moveMascot('mascotTomokichi',true);moveMascot('mascotPonchan',true);},900);
window.addEventListener('resize',()=>{
  ['mascotTomokichi','mascotPonchan'].forEach(id=>{
    const el=$(id); if(!el) return;
    const r=el.getBoundingClientRect();
    const pos=clampMascotPosition(el,r.left,r.top);
    el.style.left=pos.x+'px'; el.style.top=pos.y+'px';
  });
  saveMascotPositions();
});

if('serviceWorker' in navigator){navigator.serviceWorker.register('./service-worker.js').catch(()=>{});}
updateCountdown();renderItinerary();renderSpots();renderVisitRate();renderBirds();renderChecklist();renderReservations();renderMemos();loadWeather();setInterval(updateCountdown,3600000);
