/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var texto_principal = "Superplásticos, S.A, es una compañía colombiana líder  en fabricación de productos plásticos para embalaje, sobre todo polietileno expandido (EPS). En estos momentos la compañía desea dar un paso más allá en su internacionalización y expandirse por toda Latinoamérica. Por tal motivo, lo han contratado a usted  como Líder de exportación  de la empresa, ¿cuál sería su primera tarea para cumplir con el objetivo planteado?&nbsp;\n";

    
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'TradeGothicLTStd': '<link rel=\"stylesheet\" href=\"css/regular/style.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />',
            'TradeGothicLTStd-Bd2': '<link rel=\"stylesheet\" href=\"css/bold/style.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />',
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['1px', '1px', '960px', '560px', 'auto', 'auto'],
                            fill: ["rgba(243,211,127,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'img1',
                            type: 'image',
                            rect: ['-1px', '63px', '499px', '450px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img1.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['68px', '92px', '304px', '22px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">Análisis de caso</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(44, 198, 209); font-size: 16px; font-weight: 700;\">​</span></p><p style=\"margin: 0px;\">​</p>",
                            align: "center",
                            font: ['open-sans, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['45px', '189px', '333px', '242px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​"+texto_principal+"<p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Seleccione la respuesta que considera correcta:</p><p style=\"margin: 0px;\"></p>",
                            align: "left",
                            font: ['open-sans, sans-serif', [14, "px"], "rgba(74,74,74,1.00)", "400", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "19px", "", ""]
                        },
                        {
                            id: 'img2',
                            display: 'block',
                            type: 'image',
                            rect: ['639px', '50px', '154px', '154px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img2.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'option_1',
                            display: 'block',
                            type: 'rect',
                            rect: ['529px', '222px', '381px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(249,189,82,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0','0']],
                            c: [
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['0px', '0px', '381px', '60px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(249,189,82,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'cua_1',
                                symbolName: 'cua_1',
                                type: 'rect',
                                rect: ['0', '0', '0', '0', 'auto', 'auto']
                            },
                            {
                                id: 'TextCopy2',
                                type: 'text',
                                rect: ['29px', '14px', '333px', '36px', 'auto', 'auto'],
                                opacity: '1',
                                text: "<p style=\"margin: 0px;\">​A) Investigación a profundidad de los posibles mercados.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "left",
                                font: ['open-sans, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "normal"],
                                textStyle: ["", "", "19px", "", ""]
                            }]
                        },
                        {
                            id: 'option_2',
                            display: 'block',
                            type: 'rect',
                            rect: ['529px', '297px', '381px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(249,189,82,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0','0']],
                            c: [
                            {
                                id: 'RoundRectCopy3',
                                type: 'rect',
                                rect: ['0px', '0px', '381px', '60px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(249,189,82,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'cua_2',
                                symbolName: 'cua_2',
                                type: 'rect',
                                rect: ['0px', '0px', '381', '60', 'auto', 'auto']
                            },
                            {
                                id: 'TextCopy4',
                                type: 'text',
                                rect: ['29px', '14px', '333px', '36px', 'auto', 'auto'],
                                opacity: '1',
                                text: "<p style=\"margin: 0px;\">​B) Visitar los países donde usted cree que hay  posibilidades de expansión.\n</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "left",
                                font: ['open-sans, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "normal"],
                                textStyle: ["", "", "19px", "", ""]
                            }]
                        },
                        {
                            id: 'option_3',
                            display: 'block',
                            type: 'rect',
                            rect: ['529px', '374px', '381px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(249,189,82,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0','0']],
                            c: [
                            {
                                id: 'RoundRectCopy4',
                                type: 'rect',
                                rect: ['0px', '0px', '381px', '60px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(249,189,82,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'cua_3',
                                symbolName: 'cua_3',
                                type: 'rect',
                                rect: ['0px', '0px', '381', '60', 'auto', 'auto']
                            },
                            {
                                id: 'TextCopy5',
                                type: 'text',
                                rect: ['29px', '14px', '333px', '36px', 'auto', 'auto'],
                                opacity: '1',
                                text: "<p style=\"margin: 0px;\">​C) Identificar  los mercados con mayor potencial.\n</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "left",
                                font: ['open-sans, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "normal"],
                                textStyle: ["", "", "19px", "", ""]
                            }]
                        },
                        {
                            id: 'option_4',
                            display: 'block',
                            type: 'rect',
                            rect: ['529px', '447px', '381px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(249,189,82,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0','0']],
                            c: [
                            {
                                id: 'RoundRectCopy5',
                                type: 'rect',
                                rect: ['0px', '0px', '381px', '60px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(249,189,82,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'cua_4',
                                symbolName: 'cua_4',
                                type: 'rect',
                                rect: ['0px', '0px', '381', '60', 'auto', 'auto']
                            },
                            {
                                id: 'TextCopy6',
                                type: 'text',
                                rect: ['29px', '14px', '333px', '36px', 'auto', 'auto'],
                                opacity: '1',
                                text: "<p style=\"margin: 0px;\">​D) Diseñar  la estrategia con la cual se entrará al mercado Latinoamericano.\n</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>",
                                align: "left",
                                font: ['open-sans, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "normal"],
                                textStyle: ["", "", "19px", "", ""]
                            }]
                        },
                        {
                            id: 'img3',
                            display: 'block',
                            type: 'image',
                            rect: ['461px', '245px', '73px', '239px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"img3.png",'0px','0px']
                        },
                        {
                            id: 'img5',
                            display: 'none',
                            type: 'image',
                            rect: ['453px', '240px', '448px', '154px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"img5.png",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'img4',
                            type: 'image',
                            rect: ['840px', '84px', '61px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"img4.png",'0px','0px']
                        },
                        {
                            id: 'TextCopy3',
                            display: 'none',
                            type: 'text',
                            rect: ['635px', '298px', '275px', '20px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">Has terminado la actividad</p><p style=\"margin: 0px;\"></p>",
                            align: "left",
                            font: ['open-sans, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "19px", "", ""]
                        },
                        {
                            id: 'TextCopy7',
                            display: 'none',
                            type: 'text',
                            rect: ['635px', '328px', '275px', '20px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">Para continuar has clic en cerrar</p><p style=\"margin:0px\">​</p>",
                            align: "left",
                            font: ['open-sans, sans-serif', [14, "px"], "rgba(249,189,82,1.00)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "19px", "", ""]
                        },
                        {
                            id: 'bien_1',
                            symbolName: 'bien_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['176', '184', '625', '204', 'auto', 'auto']
                        },
                        {
                            id: 'mal_1',
                            symbolName: 'mal_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['215', '189', '649', '179', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    labels: {
                        "pr_1": 1928,
                        "pr_2": 2250
                    },
                    data: [
                        [
                            "eid72",
                            "scaleX",
                            1432,
                            227,
                            "linear",
                            "${TextCopy6}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid73",
                            "scaleX",
                            1660,
                            268,
                            "linear",
                            "${TextCopy6}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid111",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TextCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${TextCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid106",
                            "scaleY",
                            2250,
                            250,
                            "linear",
                            "${img4}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid107",
                            "scaleY",
                            2500,
                            250,
                            "linear",
                            "${img4}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid14",
                            "font-size",
                            1928,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid22",
                            "font-size",
                            1928,
                            0,
                            "linear",
                            "${TextCopy}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid70",
                            "scaleY",
                            1432,
                            227,
                            "linear",
                            "${option_4}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid71",
                            "scaleY",
                            1660,
                            268,
                            "linear",
                            "${option_4}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '-430px',
                            '45px'
                        ],
                        [
                            "eid32",
                            "font-size",
                            2564,
                            0,
                            "linear",
                            "${TextCopy7}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid23",
                            "font-size",
                            2564,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid121",
                            "scaleX",
                            2250,
                            250,
                            "linear",
                            "${TextCopy7}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid122",
                            "scaleX",
                            2500,
                            250,
                            "linear",
                            "${TextCopy7}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid17",
                            "font-size",
                            1928,
                            0,
                            "linear",
                            "${TextCopy6}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid100",
                            "scaleX",
                            2250,
                            250,
                            "linear",
                            "${img5}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid102",
                            "scaleX",
                            2500,
                            250,
                            "linear",
                            "${img5}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid16",
                            "font-size",
                            1928,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid93",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${option_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            750,
                            227,
                            "linear",
                            "${option_1}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid31",
                            "scaleY",
                            977,
                            268,
                            "linear",
                            "${option_1}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid92",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${option_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            500,
                            "linear",
                            "${img1}",
                            '-499px',
                            '-1px'
                        ],
                        [
                            "eid8",
                            "font-size",
                            1928,
                            0,
                            "linear",
                            "${Text}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid88",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${img4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            1205,
                            227,
                            "linear",
                            "${TextCopy5}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid61",
                            "scaleY",
                            1432,
                            268,
                            "linear",
                            "${TextCopy5}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid19",
                            "scaleY",
                            750,
                            227,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid21",
                            "scaleY",
                            977,
                            268,
                            "linear",
                            "${RoundRect}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid9",
                            "scaleX",
                            250,
                            250,
                            "linear",
                            "${img2}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid11",
                            "scaleX",
                            500,
                            250,
                            "linear",
                            "${img2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid95",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${img3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "scaleX",
                            977,
                            227,
                            "linear",
                            "${RoundRectCopy3}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid53",
                            "scaleX",
                            1205,
                            268,
                            "linear",
                            "${RoundRectCopy3}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            750,
                            227,
                            "linear",
                            "${TextCopy2}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid27",
                            "scaleY",
                            977,
                            268,
                            "linear",
                            "${TextCopy2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid117",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TextCopy7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${TextCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "scaleX",
                            750,
                            227,
                            "linear",
                            "${option_1}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid29",
                            "scaleX",
                            977,
                            268,
                            "linear",
                            "${option_1}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid113",
                            "scaleX",
                            2250,
                            250,
                            "linear",
                            "${TextCopy3}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid114",
                            "scaleX",
                            2500,
                            250,
                            "linear",
                            "${TextCopy3}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid3",
                            "left",
                            0,
                            500,
                            "linear",
                            "${TextCopy}",
                            '-430px',
                            '68px'
                        ],
                        [
                            "eid94",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${img2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid54",
                            "scaleY",
                            977,
                            227,
                            "linear",
                            "${RoundRectCopy3}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid55",
                            "scaleY",
                            1205,
                            268,
                            "linear",
                            "${RoundRectCopy3}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid90",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${option_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            977,
                            227,
                            "linear",
                            "${TextCopy4}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            1205,
                            268,
                            "linear",
                            "${TextCopy4}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid78",
                            "scaleX",
                            1432,
                            227,
                            "linear",
                            "${RoundRectCopy5}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid79",
                            "scaleX",
                            1660,
                            268,
                            "linear",
                            "${RoundRectCopy5}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid89",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mal_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${img3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "scaleY",
                            1205,
                            227,
                            "linear",
                            "${option_3}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid59",
                            "scaleY",
                            1432,
                            268,
                            "linear",
                            "${option_3}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid24",
                            "scaleX",
                            750,
                            227,
                            "linear",
                            "${TextCopy2}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid25",
                            "scaleX",
                            977,
                            268,
                            "linear",
                            "${TextCopy2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid46",
                            "scaleX",
                            977,
                            227,
                            "linear",
                            "${option_2}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            1205,
                            268,
                            "linear",
                            "${option_2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid68",
                            "scaleX",
                            1432,
                            227,
                            "linear",
                            "${option_4}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid69",
                            "scaleX",
                            1660,
                            268,
                            "linear",
                            "${option_4}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid6",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${img1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "scaleX",
                            1205,
                            227,
                            "linear",
                            "${RoundRectCopy4}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            1432,
                            268,
                            "linear",
                            "${RoundRectCopy4}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid101",
                            "scaleY",
                            2250,
                            250,
                            "linear",
                            "${img5}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid103",
                            "scaleY",
                            2500,
                            250,
                            "linear",
                            "${img5}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid13",
                            "left",
                            500,
                            250,
                            "linear",
                            "${img3}",
                            '428px',
                            '461px'
                        ],
                        [
                            "eid104",
                            "scaleX",
                            2250,
                            250,
                            "linear",
                            "${img4}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid105",
                            "scaleX",
                            2500,
                            250,
                            "linear",
                            "${img4}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid74",
                            "scaleY",
                            1432,
                            227,
                            "linear",
                            "${TextCopy6}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid75",
                            "scaleY",
                            1660,
                            268,
                            "linear",
                            "${TextCopy6}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid62",
                            "scaleX",
                            1205,
                            227,
                            "linear",
                            "${TextCopy5}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid63",
                            "scaleX",
                            1432,
                            268,
                            "linear",
                            "${TextCopy5}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid119",
                            "scaleY",
                            2250,
                            250,
                            "linear",
                            "${TextCopy7}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid120",
                            "scaleY",
                            2500,
                            250,
                            "linear",
                            "${TextCopy7}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid18",
                            "scaleX",
                            750,
                            227,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid20",
                            "scaleX",
                            977,
                            268,
                            "linear",
                            "${RoundRect}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "font-size",
                            1928,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid76",
                            "scaleY",
                            1432,
                            227,
                            "linear",
                            "${RoundRectCopy5}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid77",
                            "scaleY",
                            1660,
                            268,
                            "linear",
                            "${RoundRectCopy5}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid96",
                            "display",
                            0,
                            0,
                            "linear",
                            "${img5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${img5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10",
                            "scaleY",
                            250,
                            250,
                            "linear",
                            "${img2}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            500,
                            250,
                            "linear",
                            "${img2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid66",
                            "scaleY",
                            1205,
                            227,
                            "linear",
                            "${RoundRectCopy4}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid67",
                            "scaleY",
                            1432,
                            268,
                            "linear",
                            "${RoundRectCopy4}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid115",
                            "scaleY",
                            2250,
                            250,
                            "linear",
                            "${TextCopy3}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid116",
                            "scaleY",
                            2500,
                            250,
                            "linear",
                            "${TextCopy3}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid91",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${option_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            977,
                            227,
                            "linear",
                            "${TextCopy4}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            1205,
                            268,
                            "linear",
                            "${TextCopy4}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid44",
                            "scaleY",
                            977,
                            227,
                            "linear",
                            "${option_2}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            1205,
                            268,
                            "linear",
                            "${option_2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid56",
                            "scaleX",
                            1205,
                            227,
                            "linear",
                            "${option_3}",
                            '0',
                            '1.1'
                        ],
                        [
                            "eid57",
                            "scaleX",
                            1432,
                            268,
                            "linear",
                            "${option_3}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "cua_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '381px', '60px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'RoundRectCopy',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(113,150,144,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 378,
                    autoPlay: false,
                    data: [
                        [
                            "eid84",
                            "opacity",
                            0,
                            378,
                            "linear",
                            "${RoundRectCopy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "cua_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '381px', '60px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'RoundRectCopy6',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(113,150,144,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '381px', '60px']
                        }
                    }
                },
                timeline: {
                    duration: 378,
                    autoPlay: false,
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            378,
                            "linear",
                            "${RoundRectCopy6}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "cua_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '381px', '60px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'RoundRectCopy7',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(113,150,144,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '381px', '60px']
                        }
                    }
                },
                timeline: {
                    duration: 378,
                    autoPlay: false,
                    data: [
                        [
                            "eid86",
                            "opacity",
                            0,
                            378,
                            "linear",
                            "${RoundRectCopy7}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "cua_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '381px', '60px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'RoundRectCopy8',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(113,150,144,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '381px', '60px']
                        }
                    }
                },
                timeline: {
                    duration: 378,
                    autoPlay: false,
                    data: [
                        [
                            "eid87",
                            "opacity",
                            0,
                            378,
                            "linear",
                            "${RoundRectCopy8}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "bien_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'img6',
                            type: 'image',
                            rect: ['-176px', '-184px', '960px', '560px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img6.png', '0px', '0px']
                        },
                        {
                            rect: ['186px', '30px', '279px', '22px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['open-sans, sans-serif', [14, 'px'], 'rgba(234,106,15,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text2Copy2',
                            text: '<p style=\"margin: 0px;\">​Retroalimentación</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['186px', '66px', '417px', '61px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['open-sans, sans-serif', [14, 'px'], 'rgba(74,74,74,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text2Copy',
                            text: '<p style=\"margin: 0px;\">Recuerde que para empezar es vital tener en cuenta la demanda y cumplimiento de las condiciones de acceso a los mercados que tienen mayor potencial para exportar los productos o servicios.\n​</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['423px', '160px', '186px', '22px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['open-sans, sans-serif', [14, 'px'], 'rgba(22,120,125,1.00)', '400', 'none', 'italic', 'break-word', 'normal'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">Haz clic para continuar</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-21px', '-8px', '661px', '204px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'Rectangle2',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(6,167,255,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '625px', '204px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "mal_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'img62',
                            type: 'image',
                            rect: ['-215', '-188px', '960px', '560px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img6.png', '0px', '0px']
                        },
                        {
                            rect: ['200px', '54px', '271px', '22px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['open-sans, sans-serif', [14, 'px'], 'rgba(234,106,15,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text2Copy5',
                            text: '<p style=\"margin: 0px;\">​Retroalimentación</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['200px', '93px', '179px', '22px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['open-sans, sans-serif', [14, 'px'], 'rgba(74,74,74,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text2Copy4',
                            text: '<p style=\"margin: 0px;\">Vuelve a intentarlo.&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['360px', '142px', '289px', '22px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['open-sans, sans-serif', [14, 'px'], 'rgba(22,120,125,1.00)', '400', 'none', 'italic', 'break-word', 'normal'],
                            id: 'Text2Copy3',
                            text: '<p style=\"margin: 0px;\">Haz clic para continuar</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['-60px', '-10px', '662px', '202px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'Rectangle2Copy',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(6,167,255,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '649px', '179px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("test1mod1_edgeActions.js");
})("test1mod1");
