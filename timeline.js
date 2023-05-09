elements = [
    {hist: "hist", date: "2000 p.n.e.", desc: "Został wynaleziony alfabet łaciński"},
    {hist: "",  image: "obrazy/klepsydra.jpg",  date: "2700 p.n.e", desc: "Stworzono zegar wodny oraz zegar piaskowy czyli klepsydrę"},
    {hist: "",  image: "obrazy/zegar_słoneczny.jpg",   date: "2500 p.n.e.", desc: "W Chinach powstał zegar słoneczny"},
    {hist: "hist", date: "753 p.n.e.", desc: "Powstanie Cesarstwa Rzymskiego"},
    {hist: "",  image: "obrazy/obelisk.jpg",   date: "50 p.n.e.", desc: "W Rzymie użyto greckich obelisków jako zegary słoneczne"},
    {hist: "hist", date: "0", desc: "Narodziny Chrystusa"},
    {hist: "hist", date: "476", desc: "Upadek Cesarstwa Rzymskiego"},
    {hist: "",  image: "obrazy/zegar_mechaniczny.jpg",   date: "724", desc: "Chiński wynalazca  Liang Lingzan zbudował zegar mechaniczny"},
    {hist: "hist", date: "966", desc: "Chrzest Polski"},
    {hist: "",  image: "obrazy/",   date: "1364", desc: "Wydanie pierwszego szczegółowego opisu mechanizmu zegarowego autorstwa Giovanni da Dondi"},
    {hist: "hist", date: "1364", desc: "Założenie Akademii Krakowskiej"},
    {hist: "",  image: "obrazy/sprężyna.jpg",   date: "1450", desc: "Wynaleziono zegar z napędem sprężynowym"},
    {hist: "hist", date: "1492", desc: "Krzysztof Kolumb odkrył Amerykę"},
    {hist: "",  image: "obrazy/zegarek_kieszonkowy.jpg",   date: "1510", desc: "Skonstruowano zegarek kieszonkowy - Peter Henlein"},
    {hist: "hist", date: "1655", desc: "Potop szwedzki"},
    {hist: "",  image: "obrazy/zegar_wahadłowy.jpg",   date: "1657", desc: "Zbudowano zegar wahadłowy - Ch. Huygens, A. A. Kochański"},
    {hist: "",  image: "obrazy/wychwyt_hakowy.jpg",   date: "1676", desc: "R. Hooke wynalazł wychwyt hakowy do zegarów wahadłowych co pozwoliło na dodanie wskazówki minutowej"},
    {hist: "",  image: "obrazy/",   date: "1680", desc: "Pojawiła się wskazówka sekundowa"},
    {hist: "",  image: "obrazy/wychwyt_cylindrowy.jpg",   date: "1695", desc: "Wynaleziono wychwyt cylindrowy przez T. Tompiona"},
    {hist: "",  image: "obrazy/",   date: "1704", desc: "Zastosowanie pierwszych „kamieni zegarkowych” - N. Fatio"},
    {hist: "",  image: "obrazy/zegar_z_kukułką.jpg",   date: "1730", desc: "Powstał pierwszy zegar z kukułką"},
    {hist: "",  image: "obrazy/naciąg_automatyczny.jpg",   date: "1756", desc: "Zrobienie zegarka kieszonkowego z naciągiem automatycznym"},
    {hist: "",  image: "obrazy/zegar_astronomiczny.jpg",   date: "1761", desc: "- John Harrison skonstruował chronometr okrętowy.<br>- M. Hahn zbudował zegar astronomiczny wskazujący m.in. ruchy planet i ich satelitów"},
    {hist: "hist", date: "1776", desc: "Deklaracja niepodległości przez Stany Zjednoczone Ameryki"},
    {hist: "hist", date: "1791", desc: "Uchwalenie Konstytucji 3 maja"},
    {hist: "",  image: "obrazy/Zegarek.jpg",   date: "1810", desc: "Szwajcarski producent zegarków Montres Breguet stworzył zegarek naręczny"},
    {hist: "",  image: "obrazy/",   date: "1824", desc: "W Genewie powstała pierwsza szkoła zegarmistrzowska"},
    {hist: "",  image: "obrazy/",   date: "1839", desc: "Założenie w Genewie pierwszej fabryki zegarków - A. Patek i F. Czapek"},
    {hist: "",  image: "obrazy/koronka.jpg",   date: "1842", desc: "Powstają pierwsze zegarki nakręcane koronką zamiast kluczykiem"},
    {hist: "",  image: "obrazy/zegar_elektromagnetyczny.jpg",   date: "ok. 1860", desc: "Matthias Hipp zbudował zegar elektromagnetyczny"},
    {hist: "hist", date: "1863", desc: "Wybuch powstania styczniowego"},
    {hist: "hist", date: "1885", desc: "Benz opracował pierwszy samochód napędzany benzyną"},
    {hist: "",  image: "obrazy/",   date: "1905", desc: "W USA po raz pierwszy nadano radiowy sygnał czasu"},
    {hist: "hist", date: "1914", desc: "Wybuch I wojny światowej"},
    {hist: "",  image: "obrazy/naciąg_automatyczny_naręczny.jpg",   date: "1923", desc: "stworzono zegarek naręczny z naciągiem automatycznym"},
    {hist: "",  image: "obrazy/zegar_kwarcowy.jpg",   date: "1927", desc: "Zbudowano zegar kwarcowy"},
    {hist: "hist", date: "1939", desc: "Wybuch II wojny światowej"},
    {hist: "",  image: "obrazy/zegar_atomowy.jpg",   date: "1949", desc: "Zbudowano zegar atomowy"},
    {hist: "hist", date: "1978", desc: "Karol Wojtyła został papieżem"},
    {hist: "hist", date: "2004", desc: "Wejście Polski do Unii Europejskiej"},
    {hist: "",  image: "obrazy/zegar_pulsarowy.jpg",   date: "2011", desc: "Zegar pulsarowy"},

    // {hist: "hist", date: "", desc: ""},

    
];

directionIndex = 0;
direction = ["left", "right"]

elements.forEach(item => {

    document.writeln('<div class="container ' + direction[directionIndex] + ' ' + item.hist + '">');
    document.writeln('<div class="content">');

    document.writeln('<h2>' + item.date + '</h2>');

    document.writeln('<p>' + item.desc + '</p>');

    if (item.image != "obrazy/" && item.image != null) {
        document.writeln('<img src="' + item.image + '">');     
    }

    document.writeln('</div>');
    document.writeln('</div>');

    if (directionIndex == 0) {
        directionIndex = 1;
    }
    else if (directionIndex == 1)
    {
        directionIndex = 0;
    }
});


