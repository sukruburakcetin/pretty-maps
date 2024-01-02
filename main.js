let nextPage = document.getElementById("next-page-button");
let previousPage = document.getElementById("previous-page-button");


nextPage.addEventListener("click", function () {
  console.log("first");
  showNextContent();
});

previousPage.addEventListener("click", function () {
  console.log("first");
  showPreviousContent();
});

const contents = [
  {
    images: [
      "images/dolmabahce_bg.jpg",
      "images/besiktas.jpg",
      "images/besiktas_pretty_graph.png",
    ],
    title: "Beşiktaş",
    text: `Beşiktaş, İstanbul'un boğaz kıyısında yer alan, tarihi zenginlikleri, kültürel çeşitliliği ve enerjik atmosferi ile öne çıkan bir ilçedir. İstanbul'un en yoğun ve popüler semtlerinden biri olan Beşiktaş, sunduğu çeşitli mekanlarla da dikkat çekiyor. İlçenin farklı bölgelerinde bulunan mekanların dağılımını anlatan bar grafik, Beşiktaş'ın dinamik ve canlı yapısını ortaya koymaktadır.`,
    text_second: `Grafikte beş ana kategori altında toplanan mekanların dağılımı görülmektedir: Yeme-İçme, Ulaşım, Sağlık, Kültür ve Turizm, Topluluk ve Hükümet, Eğlence ve Spor. Bu kategoriler, Beşiktaş'ın sunduğu geniş hizmet yelpazesini yansıtmaktadır. \n
Beşiktaş, İstanbul'un canlı ve çok yönlü bir ilçesi olarak, gastronomi, ulaşım, sağlık, kültür ve turizm, topluluk hizmetleri, eğlence ve spor gibi birçok alanda zengin seçenekler sunar. Ünlü restoranlar ve kafelerle dolu olan Beşiktaş, hem geleneksel Türk mutfağı hem de uluslararası lezzetleri tatmak için ideal bir yerdir. Ulaşım açısından, metro, otobüs ve deniz otobüsü gibi birçok seçenekle kolay erişim sağlar. Sağlık hizmetleri, hastaneler ve eczanelerle donatılmıştır. Kültürel açıdan, tarihi yapılar, müzeler ve sanat galerileriyle zengin bir geçmişi ve çeşitliliği yansıtır. Belediye hizmetleri, kamu binaları ve topluluk merkezleri ile sakinlerine çeşitli yönetim hizmetleri sunar. Ayrıca, sinema salonları, spor tesisleri ve parklar ile genç ve dinamik bir atmosfere sahiptir.`,
    text_third: `Beşiktaş'ın mekan dağılımı, bu ilçenin İstanbul'un önemli bir merkezi olduğunu göstermektedir. Zengin kültürü, tarihi dokusu ve çeşitli mekanlarıyla Beşiktaş hem yerel sakinlerin hem de ziyaretçilerin ilgisini çekmektedir.`,
  },
  {
    images: [
      "images/galata_kulesi_bg.jpg",
      "images/beyoglu.png",
      "images/beyoglu_pretty_graph.png",
    ],
    title: `Beyoğlu`,
    text: `Beyoğlu, İstanbul'un Avrupa yakasında tarih kokan sokakları, sanat galerileri, eğlence mekanları ve tarihi dokusu ile öne çıkan bir ilçedir. Oluşturulan grafiğe göre, Beyoğlu'nda farklı kategorilerde birçok mekan bulunmaktadır. Beyoğlu'nun kültür, sanat ve gastronomi merkezi olarak öne çıktığını görülmektedir.`,
    text_second: `Beyoğlu, İstanbul'un en hareketli bölgelerinden biri olarak, İstiklal Caddesi ve çevresindeki sokaklarda yerel ve uluslararası mutfaklardan örnekler sunan kafeleri, restoranları ve sokak lezzetleriyle tanınır. Her saatte canlı olan Beyoğlu, metro, tramvay, otobüs ve dolmuş gibi çeşitli ulaşım araçlarıyla kolayca erişilebilir. Kültür ve turizm açısından, sanat galerileri, tiyatrolar, konser salonları ve müzeler gibi önemli merkezlere ev sahipliği yapar. Ayrıca, eğlence ve spor aktiviteleri açısından kafe, restoran, konser salonları ve spor tesisleriyle çeşitlilik sunar.`,
    text_third: `Beyoğlu, geçmişin izlerini modern yaşamla buluşturan, sanat ve kültürle iç içe geçmiş bir ilçedir. İstanbul'un kültür ve sanat sahnesine katkı sağlayan bu bölge, tarih ve çeşitliliğiyle ziyaretçilerini büyüler. Tarihi dokusu, sanat galerileri, eğlence mekanları ve zengin gastronomisiyle Beyoğlu, İstanbul'un özgün ve renkli yanlarını keşfetmek isteyenler için ideal bir durak noktasıdır.`,
  },
  {
    images: [
      "images/ayasofya.png",
      "images/fatih_pretty.jpg",
      "images/fatih_pretty_graph.png",
    ],
    title: `Fatih`,
    text: `Fatih, İstanbul'un tarih kokan semtlerinden biridir ve bünyesinde barındırdığı zengin kültür mirası ile öne çıkar. Yapılan bar grafik analizine göre, ilçede bulunan mekanlar genellikle yeme-içme kategorisinde yoğunlaşmış durumdadır. Bu durum, Fatih'in hem geleneksel hem de modern lezzetlere ev sahipliği yapan bir gastronomi merkezi olduğunu gösteriyor.Grafiğe göre, en fazla mekan yeme-içme kategorisinde yer alırken, ilginç bir şekilde en az mekan sayısı spor kategorisinde görülmektedir. `,
    text_second: `Fatih, İstanbul'un tarihi yarımadasında yer alan, Osmanlı döneminden kalan tarihi mekanları, kafeleri, restoranları ve sokak lezzetleriyle ünlü bir ilçedir. Geleneksel Türk mutfağından uluslararası lezzetlere kadar birçok seçenek bulunur. Ulaşım açısından merkezi bir konuma sahiptir. Ayasofya, Topkapı Sarayı, Sultanahmet Camii gibi dünya çapında ünlü tarihi ve kültürel mekanlar ilçeye özel bir çekicilik katıyor. Fatih Belediye Binası ve topluluk merkezleri ilçenin sosyal yaşamını canlandırırken, eğlence ve spor açısından kafeler, tarihi mekanlar ve sokak etkinlikleri öne çıkıyor.`,
    text_third: `Fatih, tarihi ve kültürel zenginlikleriyle birlikte sunduğu çeşitli mekanlarla İstanbul'un kalbinde bir buluşma noktasıdır. Hem yerel sakinlerin hem de ziyaretçilerin ilgisini çeken bu semt, geçmişle geleceği bir araya getiren benzersiz bir atmosfere sahiptir.`,
  },
  {
    images: [
      "images/haydarpasa_bg.jpg",
      "images/kadikoy.jpg",
      "images/kadikoy_pretty_graph.png",
    ],
    title: "Kadıköy",
    text: `Kadıköy, İstanbul'un Anadolu yakasında, Boğaz'ın kıyısında yer alan bir ilçedir. Oluşturulan grafiğe göre, Kadıköy'de farklı kategorilerde birçok mekan bulunmaktadır. En fazla mekan sayısı yeme-içme kategorisinde görülmektedir.  `,
    text_second: `Kadıköy, İstanbul'un dinamik ve renkli bir ilçesi olarak, sokak lezzetlerinden dünya mutfaklarına, kafelerden geleneksel mekanlara kadar çeşitli yeme-içme seçenekleriyle tanınır. Özellikle genç nüfusuyla canlı bir atmosfere sahip olan bu bölge, aynı zamanda İstanbul'un önemli ulaşım merkezlerinden biridir. Marmaray, metro, vapur ve otobüs gibi birçok ulaşım seçeneği sunarak kolay erişim sağlar. Kadıköy, kültür ve turizm alanında da sanat galerileri, tiyatrolar, konser alanları ve tarihi mekanlarla zengin bir deneyim sunar. Sosyal hayatı destekleyen Kadıköy, eğlence ve spor aktiviteleriyle de dikkat çeker; sahil bandında yürüyüş yapmak, parklarda zaman geçirmek ve spor salonları gibi seçenekler sunar.`,
    text_third: `Kadıköy, İstanbul'un kültürel ve sosyal hayatına önemli katkılarda bulunan, tarihle iç içe geçmiş, dinamik ve renkli bir ilçedir. Boğaz'ın karşısındaki tarihi dokusuyla birlikte, modern yaşam tarzının da öncüsüdür. İlçede bulunan çeşitli mekanlar, Kadıköy'ün çeşitliliğini ve enerjisini yansıtmaktadır.`,
  },
  {
    images: [
      "images/kiz_kulesi_bg.jpg",
      "images/uskudar_pretty.jpg",
      "images/uskudar_pretty_graph.png",
    ],
    title: "Üsküdar",
    text: `Üsküdar, İstanbul'un tarihi yarımadadan Anadolu'ya geçişin simgesi olan Boğaz Köprüsü'nün kuzeyinde yer alan, tarihî ve kültürel zenginlikleri ile öne çıkan bir ilçedir. Grafiğe göre, Üsküdar'da farklı kategorilerde birçok mekan bulunmaktadır. `,
    text_second: `Üsküdar, İstanbul'un tarihi ve kültürel zenginlikleriyle öne çıkan bir ilçesidir. Tarihi sokakları, kafeleri ve geleneksel Türk mutfağının yanı sıra Osmanlı mutfağından lezzetler sunan mekanlarla tanınır. Boğaz'ın kıyısında yer alması nedeniyle deniz yolu, metro ve otobüs hatları gibi çeşitli ulaşım seçenekleri sunar ve şehir içi ulaşımda önemli bir merkezdir. Üsküdar, tarihi camileri, Osmanlı döneminden kalma eserleri ve Boğaziçi manzaralı parklarıyla kültürel ve turistik bir çekiciliğe sahiptir. Aynı zamanda sakin ve huzurlu bir atmosfere sahip olup, eğlence mekanları ve spor tesisleriyle yerel halka keyifli zaman geçirme imkanları sunar.`,
    text_third: `Üsküdar, İstanbul'un tarihî ve kültürel dokusunu yansıtan, Boğaz'ın eşsiz manzarasına sahip bir ilçedir. Gelenek ve modernliğin iç içe geçtiği bu bölge, hem İstanbul sakinleri hem de ziyaretçiler için keşfedilmeyi bekleyen bir hazine gibidir. Tarihi mirası, lezzetleri ve doğal güzellikleriyle Üsküdar, İstanbul'un özgün ve etkileyici ilçelerinden biridir.`,
  },
];

let currentIndex = 0;

// Function to show next content
function showNextContent() {
  currentIndex = (currentIndex + 1) % contents.length;
  displayContent();
}

function showPreviousContent() {
  currentIndex = (currentIndex - 1 + contents.length) % contents.length;
  displayContent();
}

// Function to display current content
function displayContent() {
  const currentContent = contents[currentIndex];
  document.getElementById("image1").src = currentContent.images[0];
  document.getElementById("image2").src = currentContent.images[1];
  document.getElementById("image3").src = currentContent.images[2];
  document.getElementById("content-title").innerText = currentContent.title;
  document.getElementById("content-text-first").innerText = currentContent.text;
  document.getElementById("content-text-second").innerText = currentContent.text_second;
  document.getElementById("content-text-third").innerText =currentContent.text_third;
}

displayContent();