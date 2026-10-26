const {Q}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('eii-'+id,'standard-ii','ethics',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a c','A company privately tells a selected group of analysts that its only major lender has rejected critical refinancing. The information is reliable and has not been broadly disseminated. The number of analysts present:',[
  ['automatically makes the information public.','Eine ausgewählte Gruppe ist nicht automatisch der allgemeine Markt.'],
  ['does not by itself make the material information public.','Allgemeine Verfügbarkeit und Bedeutung sind getrennt zu prüfen.'],
  ['eliminates its materiality.','Die Zahl der Empfänger ändert nicht die wirtschaftliche Bedeutung der Finanzierung.']
 ],1,['Die Information kann zugleich vielen ausgewählten Personen bekannt und weiterhin nicht öffentlich sein. Die wesentliche Finanzierungsfolge macht eine darauf gestützte vorzeitige Anlagehandlung problematisch.'],'material-public'),
 q('02','practice','a c','An analyst accidentally receives reliable material nonpublic information about an issuer in her personal portfolio. She immediately recognizes its status. The most appropriate response is to:',[
  ['avoid using it for investment action and follow the appropriate compliance process.','Der versehentliche Zugang erlaubt keine anschließende Nutzung.'],
  ['sell immediately because avoiding a loss is different from seeking a profit.','Beide Motive können eine unzulässige informationsgestützte Handlung auslösen.'],
  ['tell a relative to sell instead of trading herself.','Andere zum Handeln zu veranlassen ist keine zulässige Umgehung.']
 ],0,['Der Empfang und die spätere Nutzung sind unterschiedliche Schritte. Die Reaktion muss verhindern, dass der erkannte Informationsvorsprung wirtschaftlich ausgenutzt wird.'],'receipt'),
 q('03','practice','a c','An analyst derives an important conclusion from public data and individually nonmaterial nonpublic observations. None of the inputs is material nonpublic information. The conclusion is most appropriately assessed under:',[
  ['a rule prohibiting all original conclusions before publication.','Eine solche allgemeine Pflicht würde eigenständiges Research unzulässig beschränken.'],
  ['a rule treating every private observation as material.','Nicht öffentlich und wesentlich sind verschiedene Eigenschaften.'],
  ['the mosaic theory, which can permit acting on the independently derived conclusion.','Der zulässige Entstehungsweg der Erkenntnis ist entscheidend.']
 ],2,['Die Wichtigkeit des fertigen Ergebnisses macht die zulässigen Bausteine nicht rückwirkend zu verbotenen Insiderinformationen. Quellen und Herleitung sollten nachvollziehbar sein.'],'mosaic'),
 q('04','practice','a c','An analyst receives a confidential, material confirmation of a signed acquisition. He combines it with public industry statistics and claims the result is a permissible mosaic. The claim is:',[
  ['correct because adding any public data cures the confidential input.','Öffentliche Zusatzdaten verändern den Status des entscheidenden vertraulichen Bausteins nicht.'],
  ['incorrect because material nonpublic information remains part of the basis.','Die Mosaiklogik setzt zulässige Informationsbausteine voraus.'],
  ['correct if he calls the output a model estimate.','Eine neue Bezeichnung beseitigt die tatsächliche Informationsquelle nicht.']
 ],1,['Der Fall enthält bereits eine wesentliche nicht öffentliche Tatsache. Sie kann nicht durch Beimischen harmloser Informationen neutralisiert werden.'],'mosaic'),
 q('05','practice','a c','A consultant legitimately receives confidential issuer information for a restricted due-diligence assignment. The information is material and remains nonpublic. Permission for that assignment most likely:',[
  ['also permits personal trading in the issuer.','Ein begrenzter Geschäftszweck ist keine persönliche Handelserlaubnis.'],
  ['requires immediate public posting of all confidential files.','Eigenmächtige Veröffentlichung kann Vertraulichkeits- und andere Pflichten verletzen.'],
  ['does not permit using the information for unrelated personal investment decisions.','Zulässiger Zugriff und zulässige Verwendung sind zweckgebunden zu unterscheiden.']
 ],2,['Die Beraterin kann die Information für die autorisierte Untersuchung benötigen. Daraus folgt kein Recht, denselben Vorsprung für ihr Privatdepot zu verwenden.'],'receipt'),
 q('06','practice','a c','A member possesses material nonpublic information that would adversely affect an issuer. Instead of selling its stock, he buys a derivative to profit from the expected decline. This action is:',[
  ['still subject to the prohibition on using that information.','Das wirtschaftliche Ausnutzen wird nicht durch ein anderes Instrument zulässig.'],
  ['exempt because no common shares are sold.','Die Pflicht ist nicht auf Aktienkäufe und -verkäufe beschränkt.'],
  ['permitted if the derivative is traded on an exchange.','Der Handelsplatz beseitigt den unzulässigen Informationsbezug nicht.']
 ],0,['Die Beurteilung folgt der Informationsgrundlage der Anlagehandlung. Ein Derivat kann denselben wirtschaftlichen Vorteil aus dem nicht öffentlichen Wissen ermöglichen.'],'receipt'),
 q('07','practice','a c','A fund sells a large position to meet genuine client redemptions. The orders reflect real economic transactions and are not intended to mislead. The price declines substantially. The price effect alone:',[
  ['proves market manipulation.','Eine deutliche Preiswirkung ist nicht identisch mit irreführender Absicht.'],
  ['does not establish manipulation under Standard II(B).','Der Sachverhalt beschreibt echten Liquiditätsbedarf ohne Täuschungszweck.'],
  ['eliminates all other execution and client obligations.','Auch zulässiger Handel bleibt anderen beruflichen Pflichten unterworfen.']
 ],1,['Die Manipulationsprüfung braucht den relevanten Zweck und die Gestaltung. Ein Kursrückgang kann aus echtem Angebot entstehen.'],'boundaries'),
 q('08','practice','a c','A promoter arranges offsetting transactions between controlled accounts to make an illiquid product appear actively demanded by independent investors. The primary issue is:',[
  ['the mere fact that the product is illiquid.','Illiquidität allein ist kein Manipulationsnachweis.'],
  ['the existence of a transaction record.','Auch technisch korrekt dokumentierte Geschäfte können irreführend gestaltet sein.'],
  ['the intentional creation of a false impression of market activity.','Das Handelsvolumen soll echte unabhängige Nachfrage vortäuschen.']
 ],2,['Die wirtschaftliche Aussage des erzeugten Volumens ist falsch. Der Fall betrifft Marktintegrität, obwohl tatsächlich Buchungen stattfinden.'],'manipulation'),
 q('09','practice','a c','A member knowingly publishes a fabricated report about an issuer to move its price and induce others to trade. No genuine confidential issuer information is involved. The conduct:',[
  ['can violate Standard II(B) despite the absence of genuine inside information.','Eine erfundene Marktinformation kann manipulieren, ohne echte Insiderinformation zu sein.'],
  ['is acceptable because only truthful inside information is regulated by the Standards.','Die Standards erfassen auch andere Formen irreführenden Verhaltens.'],
  ['is acceptable if the desired price movement does not occur.','Die manipulative Vorgehensweise wird nicht durch ausbleibenden Erfolg erlaubt.']
 ],0,['II(A) und II(B) betreffen verschiedene Probleme. Das Fehlen echter Insiderdaten beantwortet nicht die Frage nach der gezielten Falschinformation.'],'manipulation'),
 q('10','practice','b','A firm has created an information barrier between confidential advisory work and trading, but both teams can access the same unrestricted project files. The most direct improvement is to:',[
  ['relabel the shared folder without changing access.','Eine Bezeichnung verhindert keinen tatsächlichen Informationsfluss.'],
  ['implement and monitor role-appropriate access and communication controls.','Die organisatorische Trennung muss praktisch wirksam werden.'],
  ['assume that signing an annual statement prevents all access.','Eine Erklärung allein schließt eine technisch offene Informationsquelle nicht.']
 ],1,['Die bekannte Lücke ist der unbeschränkte Zugang. Eine wirksame Kontrolle muss genau diesen Weg bearbeiten und die Anwendung überprüfen.'],'controls'),
 q('11','practice','b','Trading surveillance identifies repeated coordinated transactions that create volume without meaningful independent risk transfer. The most appropriate response is to:',[
  ['investigate the economic purpose and coordination rather than relying only on recorded volume.','Das Signal muss auf tatsächlichen wirtschaftlichen Gehalt geprüft werden.'],
  ['advertise the volume immediately as proof of independent investor demand.','Dies könnte gerade den falschen Markteindruck weiterverbreiten.'],
  ['ignore the pattern because every transaction has a timestamp.','Zeitstempel belegen keine echte unabhängige Nachfrage.']
 ],0,['Die Kontrolle soll Manipulationsmuster aufdecken. Formale Handelsdaten reichen nicht, wenn deren wirtschaftliche Aussage fragwürdig ist.'],'controls'),
 q('12','practice','a c','Which fact is most relevant when assessing whether nonpublic information is material?',[
  ['Whether the analyst personally likes the issuer.','Die persönliche Sympathie bestimmt keine wirtschaftliche Wesentlichkeit.'],
  ['Whether the information was delivered electronically rather than verbally.','Der Übertragungskanal entscheidet die Bedeutung nicht.'],
  ['Its significance and reliability for a reasonable investment decision.','Bedeutung, Konkretheit und Glaubwürdigkeit helfen, Wesentlichkeit zu beurteilen.']
 ],2,['Ein einzelnes Schlagwort oder eine universelle Prozentgrenze reicht nicht. Die Bedeutung für die Anlageentscheidung muss aus dem Sachverhalt abgeleitet werden.'],'material-public'),
 q("a1",
  "mock-a",
  "a c",
  "An issuer broadly publishes a material announcement through established market channels. An analyst reasonably expects it to have reached the market. Under Standard II(A), the analyst:",
  [["must obtain separate consent from the issuer before acting on the released information.","Nach wirksamer öffentlicher Bekanntgabe verlangt II(A) keine zusätzliche Handelserlaubnis des Emittenten. Andere einschlägige Pflichten bleiben unabhängig davon bestehen."],["may act on the now-public information, subject to other applicable duties.","Öffentlich gewordene wesentliche Informationen sind nicht allein wegen ihrer Bedeutung verboten."],["must continue the restriction until the next periodic financial report confirms the announcement.","Die Aufgabe gibt bereits eine breite Bekanntgabe und vernünftigerweise erfolgte Marktverbreitung vor. Ein weiterer periodischer Bericht ist keine allgemeine zusätzliche Voraussetzung."]],
  1,
  ["Allgemeine Verfügbarkeit und angemessene Verbreitung sind entscheidend. Die langsamste individuelle Kenntnisnahme setzt keine universelle Wartefrist.","Wesentlichkeit allein verbietet die Nutzung nicht. Entscheidend ist hier, dass die Information nach der gegebenen breiten Veröffentlichung nicht mehr nichtöffentlich ist."],
  "material-public"),
 q("a2",
  "mock-a",
  "a c",
  "A trader places orders solely to create a false appearance of demand, with the intention of misleading other participants rather than executing those orders. This most directly raises a concern under:",
  [["Standard III(B), because the orders could favor one client allocation over another.","Der Fall beschreibt kein Verteilungsverfahren zwischen Kunden. Der gezielte falsche Eindruck tatsächlicher Nachfrage betrifft unmittelbar die Integrität des Markts."],["Standard II(A), because unexecuted orders are material nonpublic information.","Eigene Orderabsichten werden hier nicht als fremde vertrauliche Anlageinformation genutzt. Die relevante Handlung ist das bewusste Erzeugen eines irreführenden Nachfragesignals."],["Standard II(B), because the orders intentionally create a false appearance of demand.","Der Zweck ist ein bewusst falsches Bild tatsächlichen Handelsinteresses."]],
  2,
  ["Die Aufgabe gibt den Täuschungszweck ausdrücklich vor. Sie darf nicht zu einem pauschalen Verbot jeder später stornierten Order verallgemeinert werden.","Beurteile Zweck und tatsächliches Handelsinteresse. Nicht jede stornierte Order ist Manipulation; der ausdrücklich genannte Täuschungszweck ohne Ausführungsabsicht macht diesen Fall wesentlich anders."],
  "manipulation"),
 q("b1",
  "mock-b",
  "a c",
  "An analyst possesses reliable material nonpublic information and tells a friend to trade on it without making any personal trade. The analyst most likely:",
  [["violates II(A) by causing another person to trade on the protected information.","Die Nutzung muss nicht im eigenen Depot stattfinden."],["complies because the friend independently places the order and bears the investment risk.","Die selbstständige technische Ordererteilung durch den Freund ändert nicht, dass der Analyst einen anderen zum Handeln auf Grundlage der Information veranlasst."],["complies if the analyst receives no compensation and has no beneficial interest in the account.","Eigener Gewinn oder ein eigenes Depotinteresse ist keine notwendige Voraussetzung des Verbots. Die Weitergabe zur veranlassten Anlagehandlung reicht im beschriebenen Fall aus."]],
  0,
  ["Die Grenze betrifft auch das Veranlassen anderer. Der Umweg über eine andere Person erhält den unzulässigen Informationsvorsprung wirtschaftlich aufrecht.","Der Standard erfasst nicht nur eigenes Handeln, sondern auch das Veranlassen anderer. Dass der Freund die Order selbst ausführt und den Gewinn behält, beseitigt den gegebenen Informationsmissbrauch nicht."],
  "receipt"),
 q("b2",
  "mock-b",
  "a c",
  "A research team’s genuine independent conclusion differs sharply from market consensus. It is based entirely on public information, transparently states assumptions, and is published without deceptive intent. A resulting price movement:",
  [["constitutes information-based manipulation if the team expected publication to move the price.","Eine erwartete Kursreaktion auf aufrichtiges, gut begründetes Research ist nicht mit Täuschungsabsicht gleichzusetzen. Die Aufgabe schließt irreführende Absicht und Darstellung ausdrücklich aus."],["does not establish manipulation merely because genuine public-source research moves the price.","Ungewöhnlichkeit und Preiswirkung ersetzen keinen Täuschungssachverhalt."],["violates Standard II(A) because combining public sources can produce a material conclusion.","Eine wesentliche Schlussfolgerung aus zulässiger öffentlicher Recherche ist nicht allein deshalb nichtöffentliche verbotene Information. Der Fall gibt ausschließlich öffentliche Quellen vor."]],
  1,
  ["Research kann gerade dazu beitragen, dass Preise neue Einschätzungen widerspiegeln. Die Fallfrage schließt wesentliche unzulässige Quellen und Täuschung ausdrücklich aus.","Eine Empfehlung darf vom Konsens abweichen und Preise beeinflussen. Entscheidend sind die Informationsgrundlage und das Fehlen der beschriebenen Täuschungsmerkmale, nicht die bloße Größe der Marktreaktion."],
  "boundaries")
];
