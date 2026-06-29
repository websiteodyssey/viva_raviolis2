/* ============================================================
   Carte Viva Raviolis 裕禧 — données complètes
   Chaque item : { cn?, fr?, price, note? }
   ============================================================ */
const MENU = [
  {
    id: "entrees", cn: "前菜 / 点心", fr: "Pour commencer · Dim Sum",
    items: [
      { fr: "Raviolis au porc & ciboulette", cn: "猪肉韭菜饺子 (10 pcs)", price: "8,00 €" },
      { fr: "Brioche au bœuf grillé", cn: "牛肉煎包 (6 pcs)", price: "8,80 €" },
      { fr: "Brioche au porc", cn: "猪肉包 (1 pc)", price: "2,00 €" },
      { fr: "Brioche au bœuf", cn: "牛肉包 (4 pcs)", price: "4,80 €" },
      { fr: "Bao au porc laqué vapeur", cn: "叉烧包", price: "6,00 €" },
      { fr: "Tempura aux crevettes", cn: "天妇罗虾 (4 pcs)", price: "6,80 €" },
      { fr: "Raviolis royal aux crevettes", cn: "虾饺 (4 pcs)", price: "5,80 €" },
      { fr: "Bouchées aux crevettes", cn: "虾球", price: "5,80 €" },
      { fr: "Nems", cn: "春卷", price: "5,80 €" },
      { fr: "Samossa de bœuf au curry frits", cn: "咖喱牛肉角", price: "5,80 €" },
      { fr: "Gyoza végétarien", cn: "素饺子 (6 pcs)", price: "6,80 €" },
      { fr: "Gyoza au poulet", cn: "鸡肉饺子 (6 pcs)", price: "6,80 €" },
      { fr: "Assortiment de Dim Sum frits", cn: "炸点心拼盘 (6 pcs)", price: "8,80 €" },
    ]
  },
  {
    id: "froides", cn: "凉菜", fr: "Entrées froides",
    items: [
      { fr: "Duo konjac liang pi & lotus aux nouilles", cn: "魔芋凉皮 + 吸汁面藕双拼", price: "9,90 €" },
      { fr: "Lotus & nouilles laquées (façon Niujin)", cn: "吸汁面藕 / 牛津面", price: "9,90 €" },
      { fr: "Pattes de poulet désossées", cn: "无骨凤爪", price: "12,90 €" },
      { fr: "Œuf de cent ans au piment écrasé", cn: "擂辣椒皮蛋", price: "12,90 €" },
      { fr: "Tofu à l'œuf de cent ans", cn: "皮蛋豆腐", price: "10,90 €" },
      { fr: "Poulet « bouche qui salive »", cn: "口水鸡", price: "9,90 €", spicy: true },
      { fr: "Tofu effiloché à l'huile de ciboule", cn: "爽口葱油豆腐丝", price: "9,90 €" },
      { fr: "Porc froid à l'ail", cn: "蒜泥白肉", price: "11,90 €" },
      { fr: "Radis aigre maison", cn: "自制酸萝卜", price: "6,90 €" },
      { fr: "Bœuf à la coriandre", cn: "香菜拌牛肉", price: "12,90 €" },
      { fr: "Tripes de bœuf à l'huile pimentée", cn: "凉拌红油牛百叶", price: "11,90 €", spicy: true },
      { fr: "Concombre frappé à l'ail", cn: "拍黄瓜", price: "7,90 €" },
    ]
  },
  {
    id: "soupes", cn: "汤", fr: "Soupes",
    items: [
      { fr: "Bol de bouillon de poulet aux champignons", cn: "菌菇鸡汤一碗", price: "7,90 €" },
      { fr: "Soupe pékinoise aigre & piquante", cn: "酸辣汤", price: "5,80 €", spicy: true },
      { fr: "Soupe de wontons aux crevettes", cn: "虾云吞汤 (4 pcs)", price: "5,80 €" },
      { fr: "Raviolis chao shou à l'huile rouge", cn: "红油抄手 (8 pcs)", price: "9,80 €", spicy: true },
      { fr: "Soupe de jarret de porc « maman »", cn: "老妈蹄花汤", price: "17,80 €" },
    ]
  },
  {
    id: "signatures", cn: "招牌菜 · 特色菜", fr: "Plats spéciaux signature",
    items: [
      { fr: "Casserole signature homard & poulet 🌹", cn: "招牌龙虾鸡煲", price: "65,80 €" },
      { fr: "Casserole poulet & crabe (2–3 pers.) 🌹", cn: "鸡煲蟹", price: "39,80 €" },
      { fr: "Abats de poulet de Qianjiang", cn: "招牌黔江鸡杂", price: "19,80 €", spicy: true },
      { fr: "Crabe au jaune d'œuf salé", cn: "咸蛋黄焗蟹", price: "26,80 €" },
      { fr: "Boules de crevettes au maïs doré", cn: "金沙玉米虾球", price: "22,80 €" },
      { fr: "Sauté de poulet au radis aigre maison", cn: "自制酸萝卜小炒鸡", price: "19,80 €" },
      { fr: "Bœuf aux petits piments verts", cn: "野山椒牛肉", price: "16,80 €", spicy: true },
      { fr: "Bœuf gras en soupe acidulée aux aiguilles d'or", cn: "酸汤金针肥牛", price: "19,80 €", spicy: true },
      { fr: "Bœuf au tofu soyeux (douhua)", cn: "豆花牛肉", price: "18,80 €", spicy: true },
      { fr: "Porc sauté aux piments (1 pers.)", cn: "辣椒炒肉", price: "14,80 €", spicy: true },
      { fr: "Poulet ou bœuf en bouillon doré aux légumes aigres", cn: "金汤酸菜鸡 / 牛", price: "19,80 €", spicy: true },
      { fr: "« Un bol parfumé » du terroir (1 pers.)", cn: "农家一碗香", price: "15,80 €", spicy: true },
      { fr: "Crevettes vapeur à l'ail & vermicelles", cn: "蒜茸粉丝蒸虾", price: "16,80 €" },
    ]
  },
  {
    id: "hotpot", cn: "招牌火锅 · 鸡汤", fr: "Hot pots & marmites",
    items: [
      { fr: "Poisson mijoté à la marmite de fer", cn: "铁锅炖鱼", price: "39,80 €" },
      { fr: "Marmite de fer mijotée (2–3 pers.)", cn: "2-3人份铁锅炖", price: "39,80 €" },
      { fr: "Marmite de bouillon de poulet (2–3 pers.) 🌹", cn: "鸡汤锅", price: "25,80 €" },
      { fr: "Mao xue wang en bassine (2–3 pers.)", cn: "盆盆毛血旺", price: "32,80 €", spicy: true },
      { fr: "Soupe de canard au radis aigre (2–3 pers.) 🌹", cn: "酸萝卜老鸭汤", price: "26,80 €" },
      { fr: "Hot pot poisson & tripes de porc (2–3 pers.)", cn: "肥肠鱼火锅", price: "40,80 €", spicy: true },
      { fr: "Poulet « Liangshan » (2–3 pers.) 🌹", cn: "梁山鸡", price: "29,80 €", spicy: true },
      { fr: "Marmite de bœuf bouilli épicé (2–3 pers.)", cn: "水煮牛锅", price: "29,80 €", spicy: true },
    ],
    note: "Garnitures pour hot pot (4,00 € sauf indication) : lunch meat (6 €), tripes de porc braisées (8 €), bœuf gras en rouleaux (8 €), boulettes de poisson, peau de tofu, vermicelles de patate douce, udon (3 €), vermicelles de riz, nouilles instantanées (2 €), pommes de terre, salade, bok choy, chou chinois, coriandre, enokis, germes de soja, champignons noirs, tofu, algues, radis aigre maison (5 €), sang de canard (5 €), tripes de bœuf (5 €), lotus."
  },
  {
    id: "poisson", cn: "烤鱼 · 片片鱼", fr: "Poissons",
    items: [
      { fr: "Poisson émincé signature 🌹", cn: "招牌片片鱼", price: "29,80 €", spicy: true },
      { fr: "Poisson grillé maison", cn: "特色烤鱼", price: "32,80 €", spicy: true },
      { fr: "Bar vapeur", cn: "清蒸海鲈鱼", price: "26,80 €" },
    ]
  },
  {
    id: "wok", cn: "干锅 · 麻辣香锅", fr: "Woks Mala signature",
    items: [
      { fr: "Wok Mala tout légumes", cn: "全素香锅", price: "15,80 €", spicy: true },
      { fr: "Wok Mala pour deux (nouilles + 2 viandes)", cn: "双人麻辣香锅", price: "29,80 €", spicy: true },
      { fr: "Wok sec aux crevettes", cn: "干锅虾", price: "18,80 €", spicy: true },
      { fr: "Crabe épicé en wok sec 🌹", cn: "干锅香辣蟹", price: "22,80 €", spicy: true },
      { fr: "Poulet désossé en wok sec", cn: "无骨干锅鸡", price: "16,80 €", spicy: true },
      { fr: "Travers de porc en wok sec", cn: "干锅排骨", price: "16,80 €", spicy: true },
      { fr: "Ailes de poulet en wok sec", cn: "干锅鸡翅", price: "16,80 €", spicy: true },
      { fr: "Pieds de porc en wok sec", cn: "干锅猪蹄", price: "16,80 €", spicy: true },
      { fr: "Poitrine de porc en wok sec", cn: "干锅五花肉", price: "16,80 €", spicy: true },
    ]
  },
  {
    id: "sautes", cn: "家常菜", fr: "Plats sautés maison",
    items: [
      { fr: "Petit poulet sauté", cn: "小煎鸡", price: "14,80 €" },
      { fr: "Bœuf braisé aux pommes de terre", cn: "土豆牛腩", price: "15,80 €" },
      { fr: "Canard croustillant", cn: "香酥鸭", price: "12,90 €" },
      { fr: "Crevettes à l'ail & vermicelles", cn: "蒜茸粉丝虾", price: "16,80 €" },
      { fr: "Tripes de porc aux piments verts (1 pers.)", cn: "尖椒肥肠", price: "14,80 €", spicy: true },
      { fr: "Bœuf bouilli épicé", cn: "水煮牛", price: "16,80 €", spicy: true },
      { fr: "Canard grillé « Mao » épicé", cn: "冒烤鸭", price: "16,80 €", spicy: true },
      { fr: "Poulet aux piments désossé", cn: "无骨辣子鸡", price: "16,80 €", spicy: true },
      { fr: "Poitrine de porc braisée", cn: "红烧肉", price: "15,80 €" },
      { fr: "Crevettes impériales", cn: "宫爆虾球", price: "16,80 €" },
      { fr: "Crevettes au sel & poivre (1 pers.)", cn: "椒盐虾", price: "16,80 €" },
      { fr: "Crevettes au brocoli (1 pers.)", cn: "西兰花虾球", price: "16,80 €" },
      { fr: "Haricots verts marinés maison au porc", cn: "干煸豆角", price: "13,80 €" },
      { fr: "Bœuf aux oignons", cn: "洋葱炒牛肉", price: "13,80 €" },
      { fr: "Bœuf au brocoli (1 pers.)", cn: "西兰花牛肉", price: "14,80 €" },
      { fr: "Poulet sauce aigre-douce ananas (1 pers.)", cn: "菠萝咕唠鸡", price: "13,80 €" },
      { fr: "Poulet Kung Pao impérial", cn: "宫保鸡丁", price: "13,80 €", spicy: true },
      { fr: "Émincé de poulet façon yu-xiang (1 pers.)", cn: "鱼香鸡丝", price: "13,80 €", spicy: true },
      { fr: "Poulet aux champignons noirs (1 pers.)", cn: "木耳鸡", price: "12,90 €" },
      { fr: "Porc deux fois cuit (1 pers.)", cn: "回锅肉", price: "13,80 €", spicy: true },
    ]
  },
  {
    id: "legumes", cn: "蔬菜 · 豆腐", fr: "Légumes & tofu",
    items: [
      { fr: "Tofu façon « crabe » (avec jambon)", cn: "蟹黄豆腐", price: "13,80 €" },
      { fr: "Aubergines façon yu-xiang", cn: "鱼香茄子", price: "11,80 €", spicy: true },
      { fr: "Maïs doré croustillant", cn: "金沙玉米", price: "14,80 €" },
      { fr: "Vermicelles au porc émincé", cn: "烂肉粉条", price: "11,80 €" },
      { fr: "Liseron d'eau à l'ail", cn: "蒜蓉空心菜", price: "12,90 €" },
      { fr: "Chou & vermicelles sautés au piment", cn: "辣炒粉丝莲白", price: "11,80 €", spicy: true },
      { fr: "Œufs brouillés aux tomates", cn: "西红柿炒鸡蛋", price: "10,90 €" },
      { fr: "Haricots verts sautés au porc haché", cn: "干煸豆角（猪肉碎）", price: "12,80 €" },
      { fr: "Bok choy à l'ail", cn: "蒜蓉上海青", price: "9,90 €" },
      { fr: "Chou effiloché en wok sec (poitrine de porc)", cn: "干锅手撕包菜", price: "11,80 €" },
      { fr: "Chou aigre sauté au vinaigre", cn: "辣炒醋溜白菜", price: "9,90 €" },
      { fr: "Œufs au piment écrasé & douchi", cn: "擂辣椒豆豉炒蛋", price: "12,80 €", spicy: true },
      { fr: "Brocoli à l'ail", cn: "蒜蓉西兰花", price: "10,90 €" },
      { fr: "Peau de tofu aux piments verts (poitrine de porc)", cn: "尖椒炒豆皮", price: "12,80 €", spicy: true },
      { fr: "Peau de tofu aux légumes variés", cn: "素什锦蔬菜炒豆皮", price: "10,90 €" },
      { fr: "Tofu mapo (porc haché)", cn: "麻婆豆腐", price: "11,80 €", spicy: true },
    ]
  },
  {
    id: "riz", cn: "主食 · 炒饭炒面", fr: "Riz & nouilles sautés",
    items: [
      { fr: "Nouilles sautées spéciales (fraîches, faites main)", cn: "特色炒面（手工鲜面）", price: "11,90 €" },
      { fr: "Riz sauté tripes de porc & haricots aigres", cn: "招牌酸豆角肥肠炒饭", price: "12,90 €" },
      { fr: "Riz sauté Yangzhou au radis aigre", cn: "酸萝卜扬州炒饭", price: "11,90 €" },
      { fr: "Riz sauté à l'œuf & sauce soja", cn: "酱油鸡蛋炒饭", price: "9,90 €" },
      { fr: "Riz nature", cn: "米饭", price: "2,00 €" },
      { fr: "Riz sauté cantonais", cn: "广东炒饭", price: "9,90 €" },
      { fr: "Riz sauté aux légumes", cn: "蔬菜炒饭", price: "9,90 €" },
      { fr: "Riz sauté au poulet", cn: "鸡肉炒饭", price: "9,90 €" },
      { fr: "Riz sauté thaï ananas & crevettes", cn: "泰式鲜菠萝虾炒饭", price: "12,90 €" },
      { fr: "Nouilles sautées au bœuf", cn: "牛肉炒面", price: "9,90 €" },
      { fr: "Nouilles sautées aux légumes", cn: "蔬菜炒面", price: "9,90 €" },
      { fr: "Nouilles sautées au poulet", cn: "鸡炒面", price: "9,90 €" },
      { fr: "Nouilles de riz sautées au bœuf (chao he)", cn: "干炒牛河", price: "10,90 €" },
      { fr: "Nouilles sautées aux crevettes", cn: "虾炒面", price: "11,90 €" },
      { fr: "Nouilles de riz sautées au poulet", cn: "鸡肉炒河粉", price: "10,90 €" },
    ]
  },
  {
    id: "soupe-nouilles", cn: "汤面 · 米线", fr: "Soupes de nouilles & vermicelles",
    items: [
      { fr: "Nouilles mélangées au radis aigre", cn: "酸萝卜拌面", price: "12,90 €" },
      { fr: "Nouilles à l'huile pimentée végé", cn: "素油泼面", price: "9,80 €", spicy: true },
      { fr: "Vermicelles au bouillon de poulet maison", cn: "特色鸡汤米线", price: "12,80 €" },
      { fr: "Soupe de nouilles aux travers épicés", cn: "香辣排骨汤面", price: "11,90 €", spicy: true },
      { fr: "Vermicelles bœuf gras en soupe acidulée", cn: "减脂金酸汤肥牛米线", price: "11,90 €", spicy: true },
      { fr: "Soupe de nouilles au bœuf épicé", cn: "香辣牛肉汤面", price: "11,90 €", spicy: true },
      { fr: "Nouilles froides au poulet Mala", cn: "麻辣鸡丝凉面", price: "11,90 €", spicy: true },
      { fr: "Nouilles froides de sarrasin coréennes", cn: "朝鲜荞麦冷面", price: "12,90 €" },
      { fr: "Vermicelles aigres & piquants", cn: "酸辣粉", price: "9,80 €", spicy: true },
      { fr: "Nouilles « ardentes » de Yibin", cn: "宜宾燃面", price: "11,90 €", spicy: true },
      { fr: "Soupe de nouilles dan dan (non épicé)", cn: "担担汤面（不辣）", price: "10,80 €" },
      { fr: "Soupe de nouilles aux wontons de crevettes", cn: "虾云吞汤面", price: "11,80 €" },
    ]
  },
  {
    id: "midi", cn: "午餐盖码饭", fr: "Bols de riz du midi · Lun–Ven 11h–15h",
    items: [
      { fr: "Bol de riz porc haché & haricots aigres", cn: "肉沫酸豆角盖饭", price: "10,90 €" },
      { fr: "Bouillon de poulet aux champignons + riz", cn: "养生菌菇鸡汤+米饭", price: "9,90 €" },
      { fr: "Bol de riz haricots verts sautés", cn: "干煸豆角盖饭", price: "10,90 €" },
      { fr: "Bol de riz tofu mapo", cn: "麻婆豆腐盖饭", price: "10,90 €", spicy: true },
      { fr: "Bol de riz aubergines yu-xiang", cn: "鱼香茄子盖饭", price: "10,90 €", spicy: true },
      { fr: "Bol de riz œufs au piment", cn: "辣椒炒蛋盖饭", price: "10,90 €", spicy: true },
      { fr: "Bol de riz petit poulet sauté", cn: "小煎鸡盖饭", price: "10,90 €" },
      { fr: "Bol de riz bœuf sauté", cn: "小炒黄牛肉盖饭", price: "11,90 €" },
      { fr: "Bol de riz « parfum du terroir »", cn: "农家一碗乡香盖饭", price: "11,90 €", spicy: true },
      { fr: "Bol de riz porc deux fois cuit", cn: "回锅肉盖饭", price: "10,90 €", spicy: true },
    ]
  },
  {
    id: "bbq", cn: "menu BBQ", fr: "Menus grillés",
    items: [
      { fr: "Menu grillé au bœuf", cn: "烤牛肉套餐", price: "17,80 €" },
      { fr: "Menu grillé au poulet", cn: "烤鸡肉套餐", price: "17,80 €" },
      { fr: "Menu grillé au porc", cn: "烤猪肉套餐", price: "17,80 €" },
    ]
  },
  {
    id: "desserts", cn: "甜品", fr: "Desserts",
    items: [
      { fr: "Boulettes de riz au vin de riz", cn: "酒酿圆子", price: "6,80 €" },
      { fr: "Litchis au sirop", cn: "糖水荔枝", price: "3,80 €" },
      { fr: "Bao « lave » au jaune d'œuf salé", cn: "黑金流沙包 (2 pcs)", price: "4,80 €" },
      { fr: "Ananas frais", cn: "鲜菠萝", price: "4,80 €" },
      { fr: "Gingembre confit au sésame", cn: "芝麻糖姜糖", price: "4,80 €" },
      { fr: "Mochi (2 pcs)", cn: "糯米糍", price: "4,80 €" },
      { fr: "Grandes boules de riz gluant pochées", cn: "煮大汤圆", price: "3,80 €" },
      { fr: "Grandes boules de riz gluant frites", cn: "炸大汤圆", price: "4,80 €" },
      { fr: "Galette de potiron", cn: "南瓜饼", price: "3,80 €" },
      { fr: "Glace mochi", cn: "麻薯冰淇淋", price: "3,80 €" },
    ]
  },
  {
    id: "boissons", cn: "饮料", fr: "Eaux & boissons",
    items: [
      { fr: "Eau pétillante miel & gingembre", cn: "姜汁蜂蜜冰镇汽泡水", price: "5,80 €" },
      { fr: "Eau pétillante miel & yuzu", cn: "蜂蜜柚子冰镇汽泡水", price: "5,80 €" },
      { fr: "Thé glacé miel & gingembre", cn: "姜味蜂蜜冰茶", price: "4,50 €" },
      { fr: "Thé glacé miel & yuzu", cn: "蜂蜜柚子冰茶", price: "4,50 €" },
      { fr: "Thé oolong / thé vert « Oriental Leaf »", cn: "东方树叶乌龙茶/绿茶", price: "3,80 €" },
      { fr: "Soupe de sésame noir", cn: "黑芝麻糊", price: "2,00 €" },
      { fr: "Cocktail sans alcool", cn: "无酒精鸡尾酒", price: "4,00 €" },
      { fr: "Soupe de prune glacée maison (1 L)", cn: "自制冰镇酸梅汤", price: "7,00 €" },
      { fr: "Coca-Cola (1,25 L)", cn: "可口可乐", price: "7,00 €" },
      { fr: "Coca-Cola (33 cl)", cn: "可口可乐", price: "3,00 €" },
      { fr: "Thé glacé Master Kong", cn: "康师傅冰红茶", price: "4,00 €" },
      { fr: "Ice Tea pêche", price: "3,50 €" },
      { fr: "Fanta", cn: "芬达", price: "3,50 €" },
      { fr: "Orangina (33 cl)", cn: "橙汁汽水", price: "3,50 €" },
      { fr: "Oasis (33 cl)", price: "3,50 €" },
      { fr: "Jiaduobao (33 cl)", cn: "加多宝", price: "3,50 €" },
      { fr: "Lait de soja Yeo's (33 cl)", cn: "杨协成豆奶", price: "3,50 €" },
      { fr: "Jus de coco Coconut Palm", cn: "椰树椰汁", price: "4,00 €" },
      { fr: "Jus d'aloe vera", cn: "芦荟汁", price: "3,80 €" },
      { fr: "Jus d'orange / litchi / ananas / pomme", cn: "橙汁 / 荔枝 / 菠萝 / 苹果", price: "3,50 €" },
      { fr: "Évian", cn: "依云矿泉水", price: "3,50 €" },
      { fr: "San Pellegrino", price: "3,50 €" },
    ]
  },
  {
    id: "the-cafe", cn: "茶 · 咖啡 · 啤酒", fr: "Thés, cafés & bières",
    items: [
      { fr: "Thé chrysanthème", cn: "雪菊", price: "4,00 €" },
      { fr: "Thé vert", cn: "绿茶", price: "4,00 €" },
      { fr: "Thé au jasmin", cn: "茉莉花茶", price: "4,00 €" },
      { fr: "Espresso", cn: "咖啡", price: "2,00 €" },
      { fr: "Café américain", cn: "美式咖啡", price: "2,00 €" },
      { fr: "Café noisette", cn: "榛果咖啡", price: "2,50 €" },
      { fr: "Café au lait", cn: "牛奶咖啡", price: "3,00 €" },
      { fr: "Tsingtao (33 cl)", cn: "青岛啤酒", price: "4,00 €" },
      { fr: "Tsingtao (64 cl)", cn: "青岛啤酒", price: "7,00 €" },
    ]
  },
  {
    id: "vins", cn: "酒水 · 香槟", fr: "Vins, champagne & apéritifs",
    items: [
      { fr: "Champagne", cn: "香槟", price: "38,80 €" },
      { fr: "Vin rouge — Vallée du Rhône AOP (75 cl)", price: "18,80 €" },
      { fr: "Vin rouge — Bordeaux Puisseguin Sémillon BIO (75 cl)", price: "28,80 €" },
      { fr: "Vin rouge — Beaujolais Brouilly AOP (75 cl)", price: "19,80 €" },
      { fr: "Vin rouge — Bourgogne Pinot Noir (75 cl)", price: "26,80 €" },
      { fr: "Vin rosé — Provence AOP (75 cl)", price: "27,80 €" },
      { fr: "Vin blanc — Alsace (75 cl)", price: "25,80 €" },
      { fr: "Vin blanc — Bourgogne (75 cl)", price: "32,80 €" },
      { fr: "Verre de vin (rouge / rosé / blanc)", price: "3,50 €" },
      { fr: "Apéritifs — Chivas", price: "7,80 €" },
      { fr: "Apéritifs — JB", price: "5,80 €" },
      { fr: "Kir · Ricard · Martini", price: "4,80 €" },
      { fr: "Cocktail maison", cn: "自制鸡尾酒", price: "4,80 €" },
    ]
  },
  {
    id: "baijiu", cn: "中国白酒", fr: "Alcools de riz chinois",
    items: [
      { fr: "Jiang Xiaobai", cn: "江小白", price: "6,90 €" },
      { fr: "Xiao Langjiu", cn: "小狼酒", price: "11,90 €" },
      { fr: "Luzhou Laojiao", cn: "泸州老窖", price: "14,90 €" },
      { fr: "Tuopai Liuliang", cn: "沱牌六粮", price: "39,80 €" },
      { fr: "Hongxing Erguotou", cn: "红星二锅头", price: "39,80 €" },
      { fr: "Wuliangchun", cn: "五粮醇", price: "59,80 €" },
    ]
  },
];

/* ---------- Render (carte à onglets, multilingue) ---------- */
(function renderMenu() {
  const root = document.getElementById('menu-root');
  const toc = document.getElementById('toc');
  if (!root) return;

  // libellé de catégorie traduit (fallback FR)
  const label = (cat) => (window.catLabel ? window.catLabel(cat) : cat.fr);

  let activeId = MENU.some(c => '#' + c.id === location.hash) ? location.hash.slice(1) : MENU[0].id;
  let tabs = [];
  let panels = [];

  function build() {
    toc.innerHTML = '';
    root.innerHTML = '';
    tabs = [];
    panels = [];

  MENU.forEach((cat, i) => {
    const a = document.createElement('a');
    a.href = '#' + cat.id;
    a.dataset.target = cat.id;
    a.textContent = label(cat);
    toc.appendChild(a);
    tabs.push(a);

    const sec = document.createElement('section');
    sec.className = 'menu-cat';
    sec.id = cat.id;

    const head = document.createElement('div');
    head.className = 'menu-cat-head';
    const sub = (window.VivaLang === 'zh') ? '' : `<span class="fr">${label(cat)}</span>`;
    head.innerHTML = `<span class="cn">${cat.cn}</span>${sub}`;
    sec.appendChild(head);

    const grid = document.createElement('div');
    grid.className = 'menu-items';
    cat.items.forEach((it, j) => {
      const row = document.createElement('div');
      row.className = 'mi';
      row.style.animationDelay = Math.min(j * 35, 500) + 'ms';
      const spicy = it.spicy ? ' <span class="spicy">🌶️</span>' : '';
      const cn = it.cn ? `<small>${it.cn}</small>` : '';
      row.innerHTML =
        `<span class="nm">${it.fr || it.cn}${spicy}${cn}</span>` +
        `<span class="dots"></span>` +
        `<span class="pr">${it.price}</span>`;
      grid.appendChild(row);
    });
    sec.appendChild(grid);

    if (cat.note) {
      const n = document.createElement('p');
      n.className = 'menu-note';
      n.textContent = cat.note;
      sec.appendChild(n);
    }
    root.appendChild(sec);
    panels.push(sec);
  });
  } // ----- fin build() -----

  /* ----- Activation d'un onglet ----- */
  function activate(id, scroll) {
    activeId = id;
    tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
    panels.forEach(p => {
      const on = p.id === id;
      p.classList.toggle('active', on);
      if (on) {
        // relance les animations échelonnées des lignes
        p.querySelectorAll('.mi').forEach(mi => { mi.style.animation = 'none'; void mi.offsetWidth; mi.style.animation = ''; });
      }
    });
    const link = tabs.find(t => t.dataset.target === id);
    if (link) link.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    if (scroll) {
      const wrap = document.getElementById('toc-wrap');
      const y = window.scrollY + wrap.getBoundingClientRect().top - 64;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  function wireTabs() {
    tabs.forEach(t => t.addEventListener('click', (e) => {
      e.preventDefault();
      activate(t.dataset.target, true);
    }));
  }

  /* ----- Flèches de défilement de la barre (une seule fois) ----- */
  const prev = document.getElementById('tocPrev');
  const next = document.getElementById('tocNext');
  if (prev && next) {
    prev.addEventListener('click', () => toc.scrollBy({ left: -260, behavior: 'smooth' }));
    next.addEventListener('click', () => toc.scrollBy({ left: 260, behavior: 'smooth' }));
  }

  /* ----- Rendu + re-rendu au changement de langue ----- */
  function render() { build(); wireTabs(); activate(activeId, false); }
  render();
  document.addEventListener('viva:langchange', render);
})();
