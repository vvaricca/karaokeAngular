export class KaraokeService {
	chansons = [
	 {
		 id: 1,
		 titre: "Miraculous LadyBug",
		 chanteur: "Générique Dessin animé",
		 fichier: "Miraculous Ladybug - Paroles French Lyrics.mp4"
	 },
	 {
		 id: 2,
		 titre: "Goldorak",
		 chanteur: "Générique Dessin animé",
		 fichier: "Goldorak.mp4"
	 },
	 {
		 id: 3,
		 titre: "Code Lyoko",
		 chanteur: "Générique Dessin animé",
		 fichier: "Code Lyoko Un Monde Sans Danger karaoke Code Lyoko.mp4"
	 },
	 {
		 id: 4,
		 titre: "Les mystérieuses cités d'or",
		 chanteur: "Générique Dessin animé",
		 fichier: "Les mysterieuses cites dOr generique lyric.mp4"
	 },
	 {
		 id: 5,
		 titre: "Cat's Eyes",
		 chanteur: "Générique Dessin animé",
		 fichier: "Signe Cats Eye.mp4"
	 },
	 {
		 id: 6,
		 titre: "Capitaine Flam",
		 chanteur: "Générique Dessin animé",
		 fichier: "Capitaine Flam   - karaoke video chante.mp4"
	 },
	 {
		 id: 7,
		 titre: "Tom Sawyer",
		 chanteur: "Générique Dessin animé",
		 fichier: "Tom Sawyer Generique de debut Karaoke.mp4"
	 },
	 {
		 id: 8,
		 titre: "Moi Renard",
		 chanteur: "Générique Dessin animé",
		 fichier: "karaoke generique Moi Renart long.mp4"
	 },
	 {
		 id: 9,
		 titre: "Remi sans famille",
		 chanteur: "Générique Dessin animé",
		 fichier: "Remi sans famille.mp4"
	 },
	 {
		 id: 10,
		 titre: "Tortues Ninja",
		 chanteur: "Générique Dessin animé",
		 fichier: "Les Tortues Ninjas - Generique.mp4"
	 },
	 {
		 id: 11,
		 titre: "Pokemon",
		 chanteur: "Générique Dessin animé",
		 fichier: "Pokemon generique.mp4"
	 },
	 {
		 id: 12,
		 titre: "Un homme libre (La Planête aux trésors)",
		 chanteur: "Musique de Disney",
		 fichier: "la planete aux tresor  un homme libre  paroles.mp4"
	 },
	 {
		 id: 13,
		 titre: "Je voudrais déjà être roi (Le Roi Lion)",
		 chanteur: "Musique de Disney",
		 fichier: "JE VOUDRAIS DJ TRE ROI - Le Roi Lion - PAROLES.mp4"
	 },
	 {
		 id: 14,
		 titre: "L'histoire de la vie (Le Roi Lion)",
		 chanteur: "Musique de Disney",
		 fichier: "Le Roi Lion  LHistoire de la Vie karaokewmv.mp4"
	 },
	 {
		 id: 15,
		 titre: "Hakuna Matata (Le Roi Lion)",
		 chanteur: "Musique de Disney",
		 fichier: "Roi lion Hakuna Matata lyrics.mp4"
	 },
	 {
		 id: 16,
		 titre: "L'amour brille sous les étoiles (Le Roi Lion)",
		 chanteur: "Musique de Disney",
		 fichier: "LAMOUR BRILLE SOUS LES TOILES - Le Roi Lion - PAROLES.mp4"
	 },
	 {
		 id: 17,
		 titre: "Prince Ali (Aladdin)",
		 chanteur: "Musique de Disney",
		 fichier: "Prince Ali - Paroles VF.mp4"
	 },
	 {
		 id: 18,
		 titre: "Je suis ton meilleur ami (Aladdin)",
		 chanteur: "Musique de Disney",
		 fichier: "Aladdin - Je Suis Ton Meilleur Ami - Paroles.mp4"
	 },
	 {
		 id: 19,
		 titre: "Je suis ton ami (Toy Story)",
		 chanteur: "Musique de Disney",
		 fichier: "Toy Story  - Je suis ton ami.mp4"
	 },
	 {
		 id: 20,
		 titre: "Comme un homme (Mulan)",
		 chanteur: "Musique de Disney",
		 fichier: "Comme Un Homme - Mulan.mp4"
	 },
	 {
		 id: 21,
		 titre: "De Zero en Heros (Hercule)",
		 chanteur: "Musique de Disney",
		 fichier: "Hercule - De Zero en Heros - Paroles.mp4"
	 },
	 {
		 id: 22,
		 titre: "Une étoile est née (Hercule)",
		 chanteur: "Musique de Disney",
		 fichier: "Hercule - Une Etoile est Nee - Paroles.mp4"
	 },
	 {
		 id: 23,
		 titre: "L'air du vent (Pocahontas)",
		 chanteur: "Musique de Disney",
		 fichier: "Pocahontas - Lair du Vent Lyrics.mp4"
	 },
	 {
		 id: 24,
		 titre: "Humains pour la vie (La Princesse et la Grenouille)",
		 chanteur: "Musique de Disney",
		 fichier: "La Princesse et la Grenouille - Humains pour la Vie - Paroles.mp4"
	 },
	 {
		 id: 25,
		 titre: "Pour les hommes (Vaiana)",
		 chanteur: "Musique de Disney",
		 fichier: "Disney - MoanaVaiana - Pour les Hommes.mp4"
	 },
	 {
		 id: 26,
		 titre: "Le bleu lumière (Vaiana)",
		 chanteur: "Musique de Disney",
		 fichier: "Vaiana - Le bleu lumiere lyrics.mp4"
	 },
	 {
		 id: 27,
		 titre: "Le bleu lumière (Vaiana)",
		 chanteur: "Musique de Disney",
		 fichier: "Vaiana - Le bleu lumiere lyrics.mp4"
	 },
	 {
		 id: 28,
		 titre: "Bling bling (Vaiana)",
		 chanteur: "Musique de Disney",
		 fichier: "Vaiana - Bling bling lyrics.mp4"
	 },
	 {
		 id: 29,
		 titre: "L'explorateur (Vaiana)",
		 chanteur: "Musique de Disney",
		 fichier: "Vaiana - Lexplorateur lyrics.mp4"
	 },
	 {
		 id: 30,
		 titre: "Enfant de l'homme (Tarzan)",
		 chanteur: "Musique de Disney",
		 fichier: "Enfant De lHomme - Tarzan - Disney Karaoke - Lyrics  Traductions.mp4"
	 },
	 {
		 id: 31,
		 titre: "Tout le monde veut devenir un cat (Les Aristochats)",
		 chanteur: "Musique de Disney",
		 fichier: "Les Aristochats  Tout le monde veut devenir un cat .mp4"
	 },
	 {
		 id: 32,
		 titre: "Sous l'océan (La petite sirène)",
		 chanteur: "Musique de Disney",
		 fichier: "La Petite Sirene - Sous locean Lyrics.mp4"
	 },
	 {
		 id: 33,
		 titre: "Un homme comme vous (Le livre de la jungle)",
		 chanteur: "Musique de Disney",
		 fichier: "Le livre de la jungle   etre un homme comme vous.mp4"
	 },
	 {
		 id: 34,
		 titre: "Il en faut peut pour être heureux (Le livre de la jungle)",
		 chanteur: "Musique de Disney",
		 fichier: "Le livre de la jungle- Il en faut peut pour etre heureux Lyrics.mp4"
	 },
	 {
		 id: 35,
		 titre: "Femme que j'aime",
		 chanteur: "Jean Luc Lahaye",
		 fichier: "karaoke-jean-luc-lahaye-femme-que-jaime.mp4"
	 },
	 {
		 id: 36,
		 titre: "Femme libérée",
		 chanteur: "Cookie Dingler",
		 fichier: "femmeLiberee Cookie Dingler.mp4"
	 },
	 {
		 id: 37,
		 titre: "Cette année là",
		 chanteur: "Claude François",
		 fichier: "Cette année là.mp4"
	 },
	 {
		 id: 38,
		 titre: "Voici les clés",
		 chanteur: "Gerard Lenorman",
		 fichier: "gerard-lenorman-voici-les-clefs.mp4"
	 },
	 {
		 id: 39,
		 titre: "Le Chanteur",
		 chanteur: "Daniel Balavoine",
		 fichier: "Le Chanteur Balavoine.mp4"
	 },
	 {
		 id: 40,
		 titre: "Est ce que tu viens pour les vacances",
		 chanteur: "David et Jonathan",
		 fichier: "Est ce que tu viens pour les vacances.mp4"
	 },
	 {
		 id: 41,
		 titre: "Un peu plus près des étoiles",
		 chanteur: "Gold",
		 fichier: "unPeuPlusPresDesEtoiles.mp4"
	 },
	 {
		 id: 42,
		 titre: "Besoin de rien envie de toi",
		 chanteur: "Peter et Sloane",
		 fichier: "Besoin de rien envie de toi.mp4"
	 },
	 {
		 id: 43,
		 titre: "On va s'aimer",
		 chanteur: "Gilbert Montagne",
		 fichier: "On va s'aimer.mp4"
	 },
	 {
		 id: 44,
		 titre: "Une autre histoire",
		 chanteur: "Gérard Blanc",
		 fichier: "Une autre Histoire.mp4"
	 },
	 {
		 id: 45,
		 titre: "J'ai encore rêvé d'elle",
		 chanteur: "Il était une fois",
		 fichier: "JAiEncoreReveDelle.mp4"
	 },
	 {
		 id: 46,
		 titre: "Capitaine abandonné",
		 chanteur: "Gold",
		 fichier: "CapitaineAbandonne.mp4"
	 },
	 {
		 id: 47,
		 titre: "La fièvre dans le sang",
		 chanteur: "Alain Chamfort",
		 fichier: "LaFievreDansLeSang.mp4"
	 },
	 {
		 id: 48,
		 titre: "Comme un Ouragan",
		 chanteur: "Stephanie de Monaco",
		 fichier: "CommeUnOuragan.mp4"
	 },
	 {
		 id: 49,
		 titre: "La Java de Broadway",
		 chanteur: "Michel Sardou",
		 fichier: "LaJavaDeBrodway.mp4"
	 },
	 {
		 id: 50,
		 titre: "La Java de Broadway",
		 chanteur: "Michel Sardou",
		 fichier: "LaJavaDeBrodway.mp4"
	 },
	 {
		 id: 51,
		 titre: "Ca (c'est vraiment toi)",
		 chanteur: "Téléphone",
		 fichier: "CaCestVraimentToi.mp4"
	 },
	 {
		 id: 52,
		 titre: "Nuit de folie",
		 chanteur: "Début de soirée",
		 fichier: "NuitDeFolie.mp4"
	 },
	 {
		 id: 53,
		 titre: "New York avec toi",
		 chanteur: "Téléphone",
		 fichier: "NewYorkAvecToi.mp4"
	 },
	 {
		 id: 54,
		 titre: "Etre une femme",
		 chanteur: "Michel Sardou",
		 fichier: "FemmesDesAnnees80.mp4"
	 },
	 {
		 id: 55,
		 titre: "Les lacs du Connemara",
		 chanteur: "Michel Sardou",
		 fichier: "LesLacsDuConnemara.mp4"
	 },
	 {
		 id: 56,
		 titre: "Embrasse-moi idiot",
		 chanteur: "Bill Baxter",
		 fichier: "EmbrasseMoiIdiot.mp4"
	 },
	 {
		 id: 57,
		 titre: "C'est bon pour le moral",
		 chanteur: "La Compagnie Creole",
		 fichier: "CEstBonPourLeMoral.mp4"
	 },
	 {
		 id: 58,
		 titre: "La ballade des gens heureux",
		 chanteur: "Gérard Lenorman",
		 fichier: "LaBalladeDesGensHeureux.mp4"
	 },
	 {
		 id: 59,
		 titre: "On ira tous au paradis",
		 chanteur: "Michel Polnareff",
		 fichier: "OnIraTousAuParadis.mp4"
	 },
	 {
		 id: 60,
		 titre: "Aux Champs Elysées",
		 chanteur: "Joe Dassin",
		 fichier: "AuxChampsElysées.mp4"
	 },
	 {
		 id: 61,
		 titre: "Quand la musique est bonne",
		 chanteur: "Jean Jacques Goldman",
		 fichier: "QuandLaMusiqueEstBonne.mp4"
	 },
	 {
		 id: 62,
		 titre: "Je te donne",
		 chanteur: "Jean Jacques Goldman & Michael Jones",
		 fichier: "JeTeDonne.mp4"
	 },
	 {
		 id: 63,
		 titre: "Le Jerk",
		 chanteur: "Thierry Hazard",
		 fichier: "LeJerk.mp4"
	 },
	 {
		 id: 64,
		 titre: "Allumez le feu",
		 chanteur: "Johnny Hallyday",
		 fichier: "AllumezLeFeu.mp4"
	 },
	 {
		 id: 65,
		 titre: "Cendrillon",
		 chanteur: "Téléphone",
		 fichier: "Cendrillon.mp4"
	 },
	 {
		 id: 66,
		 titre: "Toutes les femmes de ta vie",
		 chanteur: "L5",
		 fichier: "ToutesLesFemmesDeTaVie.mp4"
	 },
	 {
		 id: 67,
		 titre: "Tomber la chemise",
		 chanteur: "Zebda",
		 fichier: "TomberLaChemise.mp4"
	 },
	 {
		 id: 68,
		 titre: "Fruit de la passion",
		 chanteur: "Francky Vincent",
		 fichier: "FruitDeLaPassion.mp4"
	 },
	 {
		 id: 69,
		 titre: "Ma Melissa",
		 chanteur: "Les Minikeums",
		 fichier: "MaMelissa.mp4"
	 },
	 {
		 id: 70,
		 titre: "Partir un jour",
		 chanteur: "2be3",
		 fichier: "PartirUnJour.mp4"
	 },
	 {
		 id: 71,
		 titre: "Sexy pour moi",
		 chanteur: "Tragédie",
		 fichier: "SexyPourMoi Tragedie.mp4"
	 },
	 {
		 id: 72,
		 titre: "La tribu de Dana",
		 chanteur: "Manau",
		 fichier: "LaTribuDeDana.mp4"
	 },
	 {
		 id: 73,
		 titre: "Sensualité",
		 chanteur: "Axelle Red",
		 fichier: "Sensualité.mp4"
	 },
	 {
		 id: 74,
		 titre: "Sous le vent",
		 chanteur: "Garou & Céline Dion",
		 fichier: "SousLeVent.mp4"
	 },
	 {
		 id: 75,
		 titre: "Tu m'oublieras",
		 chanteur: "Larusso",
		 fichier: "TuMOublieras.mp4"
	 },
	 {
		 id: 76,
		 titre: "Je danse le Mia",
		 chanteur: "IAM",
		 fichier: "JeDanseLeMia.mp4"
	 },
	 {
		 id: 77,
		 titre: "Angela",
		 chanteur: "Saian Supa Crew",
		 fichier: "Angela.mp4"
	 },
	 {
		 id: 78,
		 titre: "Mon papa à moi (est un gangster)",
		 chanteur: "Stomy Bugsy",
		 fichier: "MonPapaAMoiEstUnGangster.mp4"
	 },
	 {
		 id: 79,
		 titre: "Dieu m'a donné la foi",
		 chanteur: "Ophelie Winter",
		 fichier: "DieuMaDonneLaFoi.mp4"
	 },
	 {
		 id: 80,
		 titre: "Je serais (ta meilleure amie)",
		 chanteur: "Lorie",
		 fichier: "JeSeraisTaMeilleureAmie.mp4"
	 },
	 {
		 id: 81,
		 titre: "Près de moi",
		 chanteur: "Lorie",
		 fichier: "Lorie - Près de moi (Avec Parole).mp4"
	 },
	 {
		 id: 82,
		 titre: "Moi Lolita",
		 chanteur: "Alizée",
		 fichier: "MoiLolita.mp4"
	 },
	 {
		 id: 83,
		 titre: "Bye bye",
		 chanteur: "Ménélik",
		 fichier: "ByeBye.mp4"
	 },
	 {
		 id: 84,
		 titre: "Baila",
		 chanteur: "Alliage",
		 fichier: "Baila.mp4"
	 },
	 {
		 id: 85,
		 titre: "Hasta la vista",
		 chanteur: "MC Solaar",
		 fichier: "hasta-la-vista-mc-solaar-karaoke-sans-chant.mp4"
	 },
	 {
		 id: 86,
		 titre: "Fous ta cagoule",
		 chanteur: "Fatail Bazooka",
		 fichier: "FousTaCagoule.mp4"
	 },
	 {
		 id: 87,
		 titre: "DJ",
		 chanteur: "Diam's",
		 fichier: "DJ.mp4"
	 },
	 {
		 id: 88,
		 titre: "Je reste ghetto (Ong-bak)",
		 chanteur: "Tragédie",
		 fichier: "je-reste-ghetto-tragedie-ft-reed-the-weed-paroles.mp4"
	 },
	 {
		 id: 89,
		 titre: "En apesanteur",
		 chanteur: "Calogero",
		 fichier: "CALOGERO   EN APESANTEUR I G C JJ Karaoké.mp4"
	 },
	 {
		 id: 90,
		 titre: "Manatthan Kaboul",
		 chanteur: "Renaud & Axelle Red",
		 fichier: "ManhattanKaboul.mp4"
	 },
	 {
		 id: 91,
		 titre: "Face à la mer",
		 chanteur: "Calogero & Passi",
		 fichier: "calogero  Face a la mer.mp4"
	 },
	 {
		 id: 92,
		 titre: "Un autre monde",
		 chanteur: "Téléphone",
		 fichier: "Karaoke Un autre monde - Telephone .mp4"
	 },
	 {
		 id: 93,
		 titre: "Bring it All back to you",
		 chanteur: "S Club 7",
		 fichier: "S Club 7 - Bring It All Back To You Lyrics On Screen.mp4"
	 },
	 {
		 id: 94,
		 titre: "Don't Stop Movin'",
		 chanteur: "S Club 7",
		 fichier: "S Club 7 - Dont Stop Movin Lyrics.mp4"
	 },
	 {
		 id: 95,
		 titre: "I'm outta love",
		 chanteur: "Anastacia",
		 fichier: "Anastacia - Im Outta Love karaoke fair use.mp4"
	 },
	 {
		 id: 96,
		 titre: "Fallin'",
		 chanteur: "Alicia Keys",
		 fichier: "Alicia Keys - Fallin With Lyrics.mp4"
	 },
	 {
		 id: 97,
		 titre: "La isla bonita",
		 chanteur: "Madonna",
		 fichier: "Madonna - La Isla Bonita Lyrics In Video.mp4"
	 },
	 {
		 id: 98,
		 titre: "Like a prayer",
		 chanteur: "Madonna",
		 fichier: "madonna-like a prayer Lyrics.mp4"
	 },
	 {
		 id: 99,
		 titre: "I will survive",
		 chanteur: "Gloria Gaynor",
		 fichier: "I Will Survive - Gloria Gaynor  Karaoke Version  KaraFun.mp4"
	 },
	 {
		 id: 100,
		 titre: "Dancing Queen",
		 chanteur: "ABBA",
		 fichier: "Dancing Queen - ABBA  Karaoke Version  KaraFun.mp4"
	 },
	 {
		 id: 101,
		 titre: "Mamma Mia",
		 chanteur: "ABBA",
		 fichier: "Mamma Mia - ABBA  Karaoke Version  KaraFun.mp4"
	 }
	] ;
	
	getChansonById (id: number) {
		const chanson = this.chansons.find(
		  (c) => {
			return c.id === id;
		  }
		);
		return chanson;
	}
}