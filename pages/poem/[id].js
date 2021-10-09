import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Card from '../../components/Card';
import styles from '../../styles/poem.module.css';
import { useRouter } from 'next/router';
const prefix = '/cgu.github.io-master';
export default function Poem() {
  const router = useRouter();
  const dataList = [
    {
      id: 1,
      year: 102,
      title: '書齋品文',
      author: '作者',
      position: '圖書館',
      image: '102-1.png',
      line1: '與蠹爭食天下事，',
      line2: '伴螢共賞古今談。',
      line3: '前書猶見黃花瘦，',
      line4: '隔頁卻聞夏芰殘。',
      authorize: true,
    },
    {
      id: 2,
      year: 102,
      title: '操場邊的夜景',
      author: '翁瑋彤',
      position: '操場',
      image: '102-2.png',
      line1: '新月彎彎映，',
      line2: '秋風颯颯迎。',
      line3: '俯窺山麓景，',
      line4: '樂享長庚情。',
      authorize: true,
    },
    {
      id: 3,
      year: 102,
      title: '薄膜爭鋒',
      author: '楊筱萱',
      position: '薄膜球場',
      image: '102-3.png',
      line1: '薄望框奔灑，',
      line2: '膜蒸勢壯發。',
      line3: '爭魂奪霸勇，',
      line4: '鋒掃風春花。',
      authorize: true,
    },
    {
      id: 4,
      year: 103,
      title: '明德煙雨',
      author: '劉家維',
      position: '明德樓',
      image: ' ',
      line1: '明日遁華樓，',
      line2: '德消晨起愁，',
      line3: '煙濛湧冽氣。',
      line4: '雨後方知秋。',
      authorize: true,
    },
    {
      id: 5,
      year: 103,
      title: '夜登管八',
      author: '高子柔',
      position: '管理大樓',
      image: '103-5.png ',
      line1: '子夜登樓中，',
      line2: '雲輕月漸朦。',
      line3: '繁星誰與共，',
      line4: '同仰廣寒宮。',
      authorize: true,
    },
    {
      id: 6,
      year: 103,
      title: '木棧豪情',
      author: '王品學',
      position: '木棧道',
      image: '103-6.png',
      line1: '暮起風朦朧，',
      line2: '飄然響課鐘。',
      line3: '木棧長千里，',
      line4: '神情似傲龍。',
      authorize: true,
    },
    {
      id: 7,
      year: 103,
      title: '晨步志清',
      author: '劉慶美',
      position: '志清湖',
      image: '103-7.png',
      line1: '草蔥煙漫漫，',
      line2: '踏道跡無痕。',
      line3: '群鳥枝頭鬧，',
      line4: '映身獨一人。',
      authorize: true,
    },
    {
      id: 8,
      year: 103,
      title: '八卦落櫻',
      author: '黃文竣',
      position: '第一醫學大樓',
      image: '103-8.png',
      line1: '緋英翩舞逗鸝囀，',
      line2: '落土欹芽自比梅。',
      line3: '風起忽思萋遠境，',
      line4: '才傷時倏就巍頹。',
      authorize: true,
    },
    {
      id: 9,
      year: 103,
      title: '紅環',
      author: '李佳恩',
      position: '操場',
      image: '103-9.png',
      line1: '紅道奔如馬，',
      line2: '日光汗滿涔。',
      line3: '提膝傾力踏，',
      line4: '戲耍鬧紅塵。',
      authorize: true,
    },
    {
      id: 10,
      year: 103,
      title: '春櫻雀樂',
      author: '呂婷慈',
      position: '第一醫學大樓',
      image: '103-10.png',
      line1: '櫻飛鵑與妝，',
      line2: '春漾盪芬芳。',
      line3: '樂笑忙園事，',
      line4: '雀鳴綠意長。',
      authorize: true,
    },
    {
      id: 11,
      year: 103,
      title: '晚春落櫻',
      author: '鄭均瑀',
      position: '第一醫學大樓',
      image: '',
      line1: '小徑通何方？',
      line2: '粉櫻薄霧藏；',
      line3: '繁花落盡處，',
      line4: '綠意新芽芳。',
      authorize: true,
    },
    {
      id: 12,
      year: 103,
      title: '慶爺銅像',
      author: '趙怡齊',
      position: '創辦人紀念公園',
      image: '103-12.png',
      line1: '勤起直潭庄，',
      line2: '勞肩負米糧。',
      line3: '樸樸立翠草，',
      line4: '實囑子衿良。',
      authorize: true,
    },
    {
      id: 13,
      year: 103,
      title: '縫中觀音',
      author: '林宜萱',
      position: '其他',
      image: '',
      line1: '窗外平樓起，',
      line2: '林深蟲不聞。',
      line3: '天痕雲鳥跡，',
      line4: '再敘縫觀音。',
      authorize: true,
    },
    {
      id: 14,
      year: 104,
      title: '木棧漫步',
      author: '鄭亞欣',
      position: '木棧道',
      image: '',
      line1: '早冬白霧中，',
      line2: '漫步上階臺。',
      line3: '翠樹周圍繞，',
      line4: '庭中思未來。',
      authorize: true,
    },
    {
      id: 15,
      year: 104,
      title: '教室聲景',
      author: '作者',
      position: '其他',
      image: '',
      line1: '咄咄書聲誦，',
      line2: '群襟樂學文。',
      line3: '師前揮翰藻，',
      line4: '如沐暖風薰。',
      authorize: true,
    },
    {
      id: 16,
      year: 104,
      title: '獨步棧道',
      author: '黃舜詳',
      position: '木棧道',
      image: '',
      line1: '一彎入靜幽，',
      line2: '閒步登高丘。',
      line3: '豎耳倚扶木，',
      line4: '風吹林葉咻。',
      authorize: true,
    },
    {
      id: 17,
      year: 104,
      title: '管八星輝',
      author: '呂俊叡',
      position: '管理大樓',
      image: '',
      line1: '金風拂面肌，',
      line2: '情意展雙眉。',
      line3: '共舞銀盤下，',
      line4: '星輝促淚晞。',
      authorize: true,
    },
    {
      id: 18,
      year: 104,
      title: '木棧仲夏',
      author: '簡欣妤',
      position: '木棧道',
      image: '',
      line1: '蟬聲繞貫耳，',
      line2: '樹蔭暫歇涼。',
      line3: '人怨天炎熱，',
      line4: '登高神氣昂。',
      authorize: true,
    },
    {
      id: 19,
      year: 104,
      title: '初識志清',
      author: '賴冠諭',
      position: '志清湖',
      image: '104-19.png',
      line1: '樹蔭清湖鬧，',
      line2: '餘波照落陽。',
      line3: '忽聞鐘寺響，',
      line4: '萬鳥振風翔。',
      authorize: true,
    },
    {
      id: 20,
      year: 104,
      title: '草中雄心',
      author: '余柏呈',
      position: '創辦人紀念公園',
      image: '104-20.png',
      line1: '青天吞萬里，',
      line2: '碧野繞千山。',
      line3: '鐵骨縛寒地，',
      line4: '精神卻不凡。',
      authorize: true,
    },
    {
      id: 21,
      year: 104,
      title: '木棧晚歸',
      author: '陳薇竹',
      position: '木棧道',
      image: '104-21.png',
      line1: '日落華燈照，',
      line2: '蜿蜒木道長。',
      line3: '相連明月路，',
      line4: '引領子襟行。',
      authorize: true,
    },
    {
      id: 22,
      year: 104,
      title: '操場晚照',
      author: '劉又瑋',
      position: '操場',
      image: '104-22.png',
      line1: '蘊德寂樓邊，',
      line2: '月燈人影喧。',
      line3: '欲求千景目，',
      line4: '夜夜踏星天。',
      authorize: true,
    },
    {
      id: 23,
      year: 104,
      title: '夜遊櫻園',
      author: '黃敏筑',
      position: '第一醫學大樓',
      image: ' 104-23.png',
      line1: '月伴遊前堂，',
      line2: '浮燈戲暗廊。',
      line3: '春櫻提絳粉，',
      line4: '為夜點紅妝。',
      authorize: true,
    },
    {
      id: 24,
      year: 104,
      title: '蘊夕意轉',
      author: '魏廷恩',
      position: '蘊德樓',
      image: '104-24.png',
      line1: '夕灑襯平天，',
      line2: '稠樓滯靜連。',
      line3: '橙雲濤瞬曖，',
      line4: '諾旦赴期堅。',
      authorize: true,
    },
    {
      id: 25,
      year: 104,
      title: '仰奇木精髓',
      author: '作者',
      position: '文物館',
      image: '104-25.png',
      line1: '奇木藏風姿，',
      line2: '靜觀展雅儀。',
      line3: '莘莘瞻氣度，',
      line4: '滿載上爭思。',
      authorize: true,
    },
    {
      id: 26,
      year: 104,
      title: '志清醉春',
      author: '唐歌',
      position: '志清湖',
      image: '104-26.png',
      line1: '春漪縫志清，',
      line2: '古木綴斜坪。',
      line3: '醉臥石闌下，',
      line4: '不知天已明。',
      authorize: true,
    },
    {
      id: 27,
      year: 104,
      title: '夜晚操場',
      author: '羅康閔',
      position: '操場',
      image: '',
      line1: '明月掛天邊，',
      line2: '涼風穿指尖。',
      line3: '如弓弦上劍，',
      line4: '較量誰當先。',
      authorize: true,
    },
    {
      id: 28,
      year: 105,
      title: '蛙湖秋色',
      author: '賴慶華',
      position: '青蛙湖',
      image: '105-28.png',
      line1: '金風策策狂，',
      line2: '激起碧湖光。',
      line3: '黃葉稀疏落，',
      line4: '未聞蛙震揚。',
      authorize: true,
    },
    {
      id: 29,
      year: 105,
      title: '鴨戲志清',
      author: '邱榆淨',
      position: '志清湖',
      image: '105-29.png',
      line1: '綠掌臨湖岸，',
      line2: '怡然弄碧瀛。',
      line3: '鴨何懷遠志？',
      line4: '戲水語風清。',
      authorize: true,
    },
    {
      id: 30,
      year: 105,
      title: '永慶爺像',
      author: '蔡昕晏',
      position: '',
      image: '105-30.png',
      line1: '墨身懷勁骨，',
      line2: '兀坐睇凝神。',
      line3: '遠矚千年志，',
      line4: '青衿耀北辰。',
      authorize: true,
    },
    {
      id: 31,
      year: 105,
      title: '清湖粼波',
      author: '林季翰',
      position: '志清湖',
      image: '105-31.png',
      line1: '綠水傳波景，',
      line2: '粼光舞影情。',
      line3: '古鐘千里送，',
      line4: '長嘯一身輕。',
      authorize: true,
    },
    {
      id: 32,
      year: 105,
      title: '庚夜木棧',
      author: '宋柏均',
      position: '木棧道',
      image: '105-32.png',
      line1: '清風拂晚樹，',
      line2: '靜月伴蟲鳴。',
      line3: '棧道蜒千里，',
      line4: '星空分外明。',
      authorize: true,
    },
    {
      id: 33,
      year: 105,
      title: '傍晚操場',
      author: '謝鎔亦',
      position: '操場',
      image: '105-33.png',
      line1: '日暮青原闊，',
      line2: '微星映月明。',
      line3: '跫音猶復響，',
      line4: '幾度噤蟬鳴。',
      authorize: true,
    },
    {
      id: 34,
      year: 105,
      title: '好漢奇道',
      author: '吳政興',
      position: '好漢坡',
      image: '105-34.png',
      line1: '好漢登樓閣，',
      line2: '朝淒晚九歸。',
      line3: '莘莘學子鬧，',
      line4: '夜半鳥驚回。',
      authorize: true,
    },
    {
      id: 35,
      year: 105,
      title: '薄膜球場',
      author: '劉廷宏',
      position: '薄膜球場',
      image: '105-35.png',
      line1: '遮天罩雨陽，',
      line2: '拼鬥爭誰強。',
      line3: '天地承孰夢？',
      line4: '唯吾一位狂。',
      authorize: true,
    },
    {
      id: 36,
      year: 105,
      title: '夜行木棧',
      author: '連子沂',
      position: '木棧道',
      image: '105-36.png',
      line1: '獨行木道歸，',
      line2: '月照冷風吹。',
      line3: '遠望夢何在',
      line4: '長如谷棧規。',
      authorize: true,
    },
    {
      id: 37,
      year: 105,
      title: '千古文物',
      author: '陳品瑄',
      position: '文物館',
      image: '105-37.png',
      line1: '先人造萬牆，',
      line2: '歷史永留香。',
      line3: '坐望觀文物，',
      line4: '愚人勉自強。',
      authorize: true,
    },
    {
      id: 38,
      year: 105,
      title: '好漢坡',
      author: '賀子容',
      position: '好漢坡',
      image: '',
      line1: '無顧風霜雪，',
      line2: '任他烈焰陽。',
      line3: '五千學子踏，',
      line4: '汗水夾滄桑。',
      authorize: true,
    },
    {
      id: 39,
      year: 105,
      title: '伐木蘊心',
      author: '盧奕中',
      position: '第一醫學大樓',
      image: '105-39.png',
      line1: '許許伐堅段，',
      line2: '丁丁溽背襟。',
      line3: '骨連芳樸德，',
      line4: '臂掌淬根辛。',
      authorize: true,
    },
    {
      id: 41,
      year: 105,
      title: '夜登據德',
      author: '簡淳彬',
      position: '據德樓',
      image: '105-40.png',
      line1: '登高俯火樹，',
      line2: '幽谷夜車馳；',
      line3: '據德山樓眩，',
      line4: '星河爍望癡。',
      authorize: true,
    },
    {
      id: 42,
      year: 105,
      title: '蛙湖古意',
      author: '蘇鵬均',
      position: '青蛙湖',
      image: '105-42.png',
      line1: '比肩對月望，',
      line2: '足踏石泉間。',
      line3: '同飲昔時水，',
      line4: '穹寒清淚潸。',
      authorize: true,
    },
    {
      id: 43,
      year: 106,
      title: '書海覓寶',
      author: '蔡惠宇',
      position: '圖書館',
      image: '106-43.png',
      line1: '欲知天下事，',
      line2: '學海任遨遊。',
      line3: '翰藻揮千里，',
      line4: '尋珍苦泛舟。',
      authorize: true,
    },
    {
      id: 44,
      year: 106,
      title: '亥時明德',
      author: '符宇嘉',
      position: '明德樓',
      image: '106-44.png',
      line1: '銀鈴傳別房，',
      line2: '攘往滌衣香。',
      line3: '北斗奪人目，',
      line4: '子衿思故鄉。',
      authorize: true,
    },
    {
      id: 45,
      year: 106,
      title: '希望之樹',
      author: '洪傑昇',
      position: '第二醫學大樓',
      image: '106-45.png ',
      line1: '巍巍凝土牆，',
      line2: '小樹長窪央。',
      line3: '莫笑身軀短，',
      line4: '參天放亮光。',
      authorize: true,
    },
    {
      id: 46,
      year: 106,
      title: '萬里木棧',
      author: '潘可維',
      position: '木棧道',
      image: '106-46.png ',
      line1: '長城映眼簾，',
      line2: '光照木階上。',
      line3: '透樹曬吾身，',
      line4: '同儕相互望。',
      authorize: true,
    },
    {
      id: 47,
      year: 106,
      title: '風雲球場',
      author: '余亮陞',
      position: '薄膜球場',
      image: '106-47.png ',
      line1: '風起呼營戰，',
      line2: '雲開喚將戎。',
      line3: '球如竿上偶，',
      line4: '場下十年功。',
      authorize: true,
    },
    {
      id: 48,
      year: 106,
      title: '青蛙湖',
      author: '黃朝威',
      position: '青蛙湖',
      image: '106-48.png ',
      line1: '青湖寧水幽，',
      line2: '波擾悠鵝游。',
      line3: '何處覓蛙影，',
      line4: '風吹翠草柔。',
      authorize: true,
    },
    {
      id: 49,
      year: 106,
      title: '木棧古道',
      author: '吳俊曄',
      position: '清晨春雨露，',
      image: '106-49.png ',
      line1: '清晨春雨露，',
      line2: '足印古階台。',
      line3: '日露蟬鳴響，',
      line4: '光華濃霧開。',
      authorize: true,
    },
    {
      id: 50,
      year: 106,
      title: '工院',
      author: '林家齊',
      position: '工學大樓',
      image: '106-50.png ',
      line1: '一入飄書香，',
      line2: '伊能通四方。',
      line3: '觀如方墨碇，',
      line4: '實是內含光。',
      authorize: true,
    },
    {
      id: 51,
      year: 106,
      title: '圖書館聚',
      author: '伍容萱',
      position: '圖書館',
      image: '106-51.png ',
      line1: '校園一靜處，',
      line2: '萬卷廣如煙。',
      line3: '聞帙而心嚮，',
      line4: '群書引眾賢。',
      authorize: true,
    },
    {
      id: 52,
      year: 106,
      title: '慈棧',
      author: '翁唯哲',
      position: '木棧道',
      image: '',
      line1: '昀淡白楊道，',
      line2: '風蕭百合開。',
      line3: '木蘭孤挺秀，',
      line4: '苜蓿銀樺魂。',
      authorize: true,
    },
    {
      id: 53,
      year: 106,
      title: '書海巡禮',
      author: '吳婉君',
      position: '圖書館',
      image: '',
      line1: '逡巡萬卷策，',
      line2: '博覽多元珍。',
      line3: '細品翻書味，',
      line4: '青矜沐翰春。',
      authorize: true,
    },
    {
      id: 54,
      year: 106,
      title: '漢坡嚴峻',
      author: '黃俊穎',
      position: '好漢坡',
      image: '106-54.png ',
      line1: '千層路漫漫，',
      line2: '踏地戰風寒。',
      line3: '汗滿階台舊，',
      line4: '留沙遙望天。',
      authorize: true,
    },
    {
      id: 55,
      year: 106,
      title: '蛙池季景',
      author: '林伯叡',
      position: '青蛙湖',
      image: '106-55.png ',
      line1: '春蝶樹獨休，',
      line2: '夏夜夢中遊。',
      line3: '秋晚雲浮洲，',
      line4: '冬蛙石上愁。',
      authorize: true,
    },
    {
      id: 56,
      year: 106,
      title: '暮歸長廊',
      author: '廖家源',
      position: '木棧道',
      image: '106-56.png ',
      line1: '木道日方斜，',
      line2: '遊人伴雁歸。',
      line3: '長廊星未滅，',
      line4: '過客隨鴞飛。',
      authorize: true,
    },
    {
      id: 57,
      year: 106,
      title: '蛙湖映翅',
      author: '吳玟蓉',
      position: '青蛙湖',
      image: '106-57.png ',
      line1: '展翅迎風亢，',
      line2: '天光映碧航。',
      line3: '揚波粼夕暮，',
      line4: '落日望蛙塘。',
      authorize: true,
    },
    {
      id: 58,
      year: 107,
      title: '佇樓龍骨',
      author: '趙冠博',
      position: '其他',
      image: '107-58.png ',
      line1: '銀骨靜心佯，',
      line2: '鏡鱗孤意翔。',
      line3: '陽炎拂凜颯，',
      line4: '霧谷見青塘。',
      authorize: true,
    },
    {
      id: 59,
      year: 107,
      title: '熾熱紅道',
      author: '惠柔薰',
      position: '操場',
      image: '107-59.png ',
      line1: '烈火染紅道，',
      line2: '徐風飄舞迷。',
      line3: '青春揮汗雨，',
      line4: '依舊不停蹄。',
      authorize: true,
    },
    {
      id: 60,
      year: 107,
      title: '寒雨暮棧',
      author: '郭哲瑞',
      position: '木棧道',
      image: '107-60.png ',
      line1: '落日愁雲掩，',
      line2: '綿綿映夕輝。',
      line3: '寒風棲古棧，',
      line4: '臥坐頻風吹。',
      authorize: true,
    },
    {
      id: 61,
      year: 107,
      title: '圓樓軌跡',
      author: '黃靖宜',
      position: '文物館',
      image: '107-61.png ',
      line1: '圓樓盈捲上，',
      line2: '彩物閃其華。',
      line3: '簡雅傳奇木，',
      line4: '實光照晚霞。',
      authorize: true,
    },
    {
      id: 62,
      year: 107,
      title: '風弄清湖',
      author: '曹瀞云',
      position: '青蛙湖',
      image: '',
      line1: '薰風陣陣拂，',
      line2: '湖面波光漣。',
      line3: '欲曉風何往，',
      line4: '直奔雲彩邊。',
      authorize: true,
    },
    {
      id: 63,
      year: 107,
      title: '永曜庚心',
      author: '許晴虹',
      position: '創辦人紀念公園',
      image: '',
      line1: '日和紅槿艷，',
      line2: '草闊孤顏祥。',
      line3: '雲湧斜陽隱，',
      line4: '凝觀庚子翔。',
      authorize: true,
    },
    {
      id: 64,
      year: 107,
      title: '希望之樹',
      author: '黃冠霖',
      position: '第二醫學大樓',
      image: '',
      line1: '齊肩古樹立，',
      line2: '成蔭路遙茫。',
      line3: '明志深根入，',
      line4: '同心陰轉陽。',
      authorize: true,
    },
    {
      id: 65,
      year: 107,
      title: '機捷晚燈',
      author: '張尉軒',
      position: '其他',
      image: '107-65.png ',
      line1: '日落秋風嘯，',
      line2: '蟬鳴人更猖。',
      line3: '煙中燈曖曖，',
      line4: '疑向故鄉航。',
      authorize: true,
    },
    {
      id: 66,
      year: 107,
      title: '曉霧晨操',
      author: '劉虹筠',
      position: '操場',
      image: '107-66.png ',
      line1: '朱龍踞翠藏，',
      line2: '碧葉點新妝。',
      line3: '祖逖聞雞舞，',
      line4: '何憂汗透裳。',
      authorize: true,
    },
    {
      id: 67,
      year: 107,
      title: '再憶薄膜',
      author: '林頎凱',
      position: '薄膜球場',
      image: '107-67.png ',
      line1: '兵多平野廣，',
      line2: '疏草萬靈稀。',
      line3: '手握烏紅日，',
      line4: '奔馳萬丈威。',
      authorize: true,
    },
    {
      id: 68,
      year: 107,
      title: '木棧晚霞',
      author: '林昕妤',
      position: '木棧道',
      image: '107-68.png ',
      line1: '酉時鐘塔擊，',
      line2: '日落燈光移。',
      line3: '隨步階梯寂，',
      line4: '望天雲彩奇。',
      authorize: true,
    },
    {
      id: 69,
      year: 107,
      title: '永慶遺風',
      author: '宋承智',
      position: '創辦人紀念公園',
      image: '',
      line1: '勤勞開杏業，',
      line2: '樸實立長庚。',
      line3: '綠地生機盎，',
      line4: '銅身護校英。',
      authorize: true,
    },
    {
      id: 70,
      year: 107,
      title: '好漢登高',
      author: '陳懷亮',
      position: '好漢坡',
      image: '107-70.png',
      line1: '拔山摧石起，',
      line2: '樹影遮晨曦。',
      line3: '學子登高處，',
      line4: '力疲志不移。',
      authorize: true,
    },
    {
      id: 71,
      year: 107,
      title: '春涓志清',
      author: '葉書廷',
      position: '志清湖',
      image: '107-71.png ',
      line1: '涓涓煙雨淅，',
      line2: '一道隔喧吭。',
      line3: '蓊蔚苔橋簇，',
      line4: '鵝禽濯水翔。',
      authorize: true,
    },
    {
      id: 72,
      year: 107,
      title: '櫻園餘香',
      author: '陳明岳',
      position: '第一醫學大樓',
      image: '',
      line1: '三月艷櫻涼，',
      line2: '殘紅惹薄芳。',
      line3: '芙蓉猶未至，',
      line4: '一縷落英香。',
      authorize: true,
    },
    {
      id: 73,
      year: 107,
      title: '耕心志清',
      author: '謝怡葶',
      position: '志清湖',
      image: '',
      line1: '碧島映湖清，',
      line2: '人心必自明。',
      line3: '嫣香浮善現，',
      line4: '氣志需勤耕。',
      authorize: true,
    },
    {
      id: 74,
      year: 107,
      title: '雨中操場',
      author: '林靖瑗',
      position: '操場',
      image: '107-74.png ',
      line1: '碎風撲細雨，',
      line2: '白霧散心田。',
      line3: '始志行千里，',
      line4: '終能破墨天。',
      authorize: true,
    },
    {
      id: 75,
      year: 107,
      title: '一醫寒櫻',
      author: '吳茂弘',
      position: '其他',
      image: '107-75.png ',
      line1: '天冷氣蕭颯，',
      line2: '寒風攬綠芽。',
      line3: '淋身紅雨落，',
      line4: '櫻雪靜飄斜。',
      authorize: true,
    },
    {
      id: 76,
      year: 107,
      title: '湖寺韶靜',
      author: '張凱惠',
      position: '志清湖',
      image: '107-76.png ',
      line1: '綠梢鷺翅鳴，',
      line2: '青水魚波驚。',
      line3: '寂嶼留衫影，',
      line4: '縷煙乘夢行。',
      authorize: true,
    },
    {
      id: 77,
      year: 107,
      title: '志清秋意',
      author: '黃怡嘉',
      position: '志清湖',
      image: '',
      line1: '斜陽映鏡中，',
      line2: '鴨雀戲遊叢。',
      line3: '翠蘚盈湖岸，',
      line4: '秋林舞亂風。',
      authorize: true,
    },
    {
      id: 78,
      year: 108,
      title: '薄膜沐雨',
      author: '劉嘉揚',
      position: '薄膜球場',
      image: '108-78.png ',
      line1: '雨落薄膜頂，',
      line2: '蕭蕭心卻平。',
      line3: '手揮流汗下，',
      line4: '球裡拚輸贏。',
      authorize: true,
    },
    {
      id: 79,
      year: 108,
      title: '晨遊志清',
      author: '蘇湘庭',
      position: '志清湖',
      image: '108-79.png',
      line1: '涼霧沾衣潤，',
      line2: '初曦宛玉璃。',
      line3: '雁飛划靜水，',
      line4: '湖上舞漣漪。',
      authorize: true,
    },
    {
      id: 80,
      year: 108,
      title: '好娘獨雨',
      author: '李紀彤',
      position: '其他',
      image: '108-80.png ',
      line1: '烏雲籠疊嶂，',
      line2: '濘道影單空。',
      line3: '乍曉迎晨耀，',
      line4: '嘤嘤樂御風。',
      authorize: true,
    },
    {
      id: 81,
      year: 108,
      title: '徜徉志清',
      author: '林以琳',
      position: '志清湖',
      image: '108-81.png ',
      line1: '青波漪碧瓊，',
      line2: '綠樹蔭喧聲。',
      line3: '幽寺嚴獅護，',
      line4: '煦陽耀志清。',
      authorize: true,
    },
    {
      id: 82,
      year: 108,
      title: '夜探青湖',
      author: '盧韋志',
      position: '青蛙湖',
      image: '108-82.png ',
      line1: '夜探青湖畔，',
      line2: '遨嚐弄月情。',
      line3: '風中波影澈，',
      line4: '攜步逐庚明。',
      authorize: true,
    },
    {
      id: 83,
      year: 108,
      title: '夕時操場',
      author: '謝文涓',
      position: '操場',
      image: '108-83.png ',
      line1: '漫步長紅道，',
      line2: '天邊映綺霞。',
      line3: '音符盤耳畔，',
      line4: '遇見草中花。',
      authorize: true,
    },
    {
      id: 84,
      year: 108,
      title: '挺木懷恩',
      author: '王筑韻',
      position: '第二醫學大樓',
      image: '108-84.png ',
      line1: '樹挺枝繁密，',
      line2: '芽青葉茂盈。',
      line3: '恩師懷大捨，',
      line4: '受業潤慈情。',
      authorize: true,
    },
    {
      id: 85,
      year: 108,
      title: '永慶之望',
      author: '王子諒',
      position: '創辦人紀念公園',
      image: '108-85.png ',
      line1: '暖陽照翠草，',
      line2: '風起百花揚。',
      line3: '立處高峰護，',
      line4: '百苗皆自昂。',
      authorize: true,
    },
    {
      id: 86,
      year: 108,
      title: '秋雨青樹',
      author: '蔡姿苹',
      position: '第二醫學大樓',
      image: '108-86.png ',
      line1: '煙雨綿綿裡，',
      line2: '秋風吹過秧。',
      line3: '孤零雖葉落，',
      line4: '倔強不迷茫。',
      authorize: true,
    },
    {
      id: 87,
      year: 108,
      title: '清湖鴨鴨',
      author: '張家榮',
      position: '志清湖',
      image: '108-87.png ',
      line1: '午後斜陽下，',
      line2: '池波滿落霞。',
      line3: '湖旁林翠草，',
      line4: '鴨鴨踏泥漥。',
      authorize: true,
    },
    {
      id: 88,
      year: 108,
      title: '深秋棧道',
      author: '余承叡',
      position: '木棧道',
      image: '108-88.png ',
      line1: '雨打棧坡響，',
      line2: '寒風吹落肩。',
      line3: '深秋黃葉落，',
      line4: '霧裡罕人煙。',
      authorize: true,
    },
    {
      id: 89,
      year: 108,
      title: '齊鋸薪火',
      author: '莊凱茹',
      position: '第一醫學大樓',
      image: '108-89.png ',
      line1: '勤繩得木斷，',
      line2: '勞運士行磚。',
      line3: '樸厚同心力，',
      line4: '實行薪火燃。',
      authorize: true,
    },
    {
      id: 90,
      year: 108,
      title: '遠眺青原',
      author: '陳竫涵',
      position: '創辦人紀念公園',
      image: '108-90.png ',
      line1: '萬物春青嫣，',
      line2: '四時惹物怜。',
      line3: '蔚藍相映照，',
      line4: '花雨彩蝶翩。',
      authorize: true,
    },
    {
      id: 91,
      year: 108,
      title: '秋臨木棧',
      author: '吳菖毓',
      position: '木棧道',
      image: '108-91.png ',
      line1: '古道金風起，',
      line2: '隨行至閣楹。',
      line3: '白霜伴褐棧，',
      line4: '存卻任陰晴。',
      authorize: true,
    },
    {
      id: 92,
      year: 108,
      title: '鏤德銘志',
      author: '翁以柔',
      position: '明德樓',
      image: '108-92.png ',
      line1: '獨樓破際限，',
      line2: '雨嶺雲溪廊。',
      line3: '俯瞰紅塵輩，',
      line4: '雛鷹自此狂。',
      authorize: true,
    },
    {
      id: 93,
      year: 108,
      title: '木棧冬雨',
      author: '魏敬耘',
      position: '木棧道',
      image: '108-93.png ',
      line1: '冬雷千鏃破，',
      line2: '冽雨萬針傾。',
      line3: '浚瀨濺濺瀑，',
      line4: '孤魚孑孑行。',
      authorize: true,
    },
    {
      id: 94,
      year: 108,
      title: '夜讀明德',
      author: '雷倬昀',
      position: '明德樓',
      image: '108-94.png ',
      line1: '晚夜螢燈明，',
      line2: '勤耕為六卿。',
      line3: '凌雲書卷氣，',
      line4: '冀後青雲平。',
      authorize: true,
    },
    {
      id: 95,
      year: 108,
      title: '夢繫盛櫻',
      author: '陳暐樺',
      position: '第一醫學大樓',
      image: '108-95.png ',
      line1: '寒冬萬物眠，',
      line2: '夢繫盛櫻延。',
      line3: '願與之同落，',
      line4: '千年始末翩。',
      authorize: true,
    },
    {
      id: 96,
      year: 108,
      title: '管八曦望',
      author: '張袈德',
      position: '管理大樓',
      image: '108-96.png ',
      line1: '庚子望星宿，',
      line2: '月霜伴鳥鳴。',
      line3: '星稀沉眼底，',
      line4: '曦日徐風輕。',
      authorize: true,
    },
    {
      id: 97,
      year: 108,
      title: '勤勞「蒲」實',
      author: '洪敍瑜',
      position: '創辦人紀念公園',
      image: '108-97.png ',
      line1: '金烏灑日光，',
      line2: '挽破霧滄茫。',
      line3: '詠絮迎風慶，',
      line4: '勤庚仰夢翔。',
      authorize: true,
    },
    {
      id: 98,
      year: 108,
      title: '晚春雨櫻',
      author: '項晗寧',
      position: '第一醫學大樓',
      image: '108-98.png ',
      line1: '今晨風雨驟，',
      line2: '滿地落殘櫻。',
      line3: '待到春歸去，',
      line4: '新芽伴綠蛙。',
      authorize: true,
    },
    {
      id: 99,
      year: 108,
      title: '明德光影',
      author: '詹壹鵬',
      position: '明德樓',
      image: '',
      line1: '日月煙波旅，',
      line2: '參商嬗換移。',
      line3: '行生孜矻習，',
      line4: '直宿舒心疲。',
      authorize: true,
    },
    {
      id: 100,
      year: 109,
      title: '二醫方天',
      author: '簡名萱',
      position: '第二醫學大樓',
      image: ' 109-100.png ',
      line1: '薄暮意迷茫，',
      line2: '樓臺輝夕陽。',
      line3: '憑欄恬適望，',
      line4: '錯覺為恆常。',
      authorize: true,
    },
    {
      id: 101,
      year: 109,
      title: '日霧湖情',
      author: '張軒菱',
      position: '青蛙湖',
      image: '109-101.png',
      line1: '湖情薄霧羞，',
      line2: '葉落一扁舟。',
      line3: '點點漣漪展，',
      line4: '圈圈送念愁。',
      authorize: true,
    },
    {
      id: 102,
      year: 109,
      title: '木棧蟬鳴',
      author: '王勻伶',
      position: '木棧道',
      image: '109-102.png',
      line1: '卯時獨步聲，學未怨遙程；',
      line2: '鸛雀季凌吟，登山李涉嚶。',
      line3: '提蹂風既朔，拂汗足漸輕；',
      line4: '雖未逢僧話，終得誦蟬鳴。',
      authorize: true,
    },
    {
      id: 103,
      year: 109,
      title: '管八秋夜',
      author: '鐘元琛',
      position: '管理大樓',
      image: '109-103.png',
      line1: '但莫管秋冷，',
      line2: '煙雲掩月明。',
      line3: '輝煌燈火遠，',
      line4: '曉霧繫思情。',
      authorize: true,
    },
    {
      id: 104,
      year: 109,
      title: '好漢冬景',
      author: '陳彥新',
      position: '好漢坡',
      image: '109-104.png',
      line1: '嶙峋怪石疊，',
      line2: '繚白霧綿綿。',
      line3: '壯士行千里，',
      line4: '踏平百萬巔。',
      authorize: true,
    },
    {
      id: 105,
      year: 109,
      title: '百年據德',
      author: '陳泓宇',
      position: '據德樓',
      image: '109-105.PNG',
      line1: '據立青山路，',
      line2: '德樓育子賢。',
      line3: '真坡心體健，',
      line4: '舊土煥新緣。',
      authorize: true,
    },
    {
      id: 106,
      year: 109,
      title: '奇木精髓',
      author: '樂克宣',
      position: '文物館',
      image: '109-106.png',
      line1: '館中藏巨木，',
      line2: '萬稔煉癭精。',
      line3: '閉眼諳其偉，',
      line4: '抬頭眺燦晴。',
      authorize: true,
    },
    {
      id: 107,
      year: 109,
      title: '夏日清湖',
      author: '張瑜倢',
      position: '志清湖',
      image: '109-107.png',
      line1: '綠蔭清風起，',
      line2: '曉亭閒品清。',
      line3: '白鵝群戲水，',
      line4: '炎夏碧天晴。',
      authorize: true,
    },
    {
      id: 108,
      year: 109,
      title: '初遊志清',
      author: '王苡庭',
      position: '志清湖',
      image: '109-108.png',
      line1: '浮光映志清，',
      line2: '綠樹碧煙晴。',
      line3: '人至驚飛羽，',
      line4: '佇遲夕照明。',
      authorize: true,
    },
    {
      id: 109,
      year: 109,
      title: '志清曉霧',
      author: '陳慶宇',
      position: '志清湖',
      image: '109-109.png',
      line1: '清波孤廟立，',
      line2: '曉霧漫湖沿。',
      line3: '旭日蹄忽起，',
      line4: '石橋頌古賢。',
      authorize: true,
    },
    {
      id: 110,
      year: 109,
      title: '好漢長坡',
      author: '游睿霖',
      position: '好漢坡',
      image: '109-110.png',
      line1: '階高路徑長，',
      line2: '綠蔭遮雙旁。',
      line3: '烈日雖斜照，',
      line4: '前行好漢強。',
      authorize: true,
    },
  ];
  let category = '';
  let title = router.query.id;
  let data = [];
  for (let i = 102; i <= 109; i++) {
    if (router.query.id == i) {
      title += '學年度';
      category = 'years';
    } else {
      category = 'position';
    }
  }
  for (let x = 0; x < dataList.length; x++) {
    if ((category = 'years' && dataList[x].year == router.query.id)) {
      data.push(dataList[x]);
    }
    if ((category = 'position' && dataList[x].position == router.query.id)) {
      data.push(dataList[x]);
    }
  }

  return (
    <Layout position="2">
      <Container>
        <div className={styles.poemContainer}>
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>{title}作品</h1>
              <div className={styles.back} onClick={() => router.back()}>
                返回上頁
              </div>
            </div>
            <div className={styles.poems}>
              <div className={styles.section}>
                作品欣賞{router.query.filter}
              </div>
              <hr className={styles.line}></hr>
              <Card data={data} />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
