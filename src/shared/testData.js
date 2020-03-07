const testProducts = [
    {
        basic: {
            productId: '1266601',
            productShortName: "Molino Dolcetto d'Alba le Querce",
            productLongName: "Molino Dolcetto d'Alba le Querce",
            volume: 0.75,
            alcoholContent: 13.5,
            vintage: 2018,
            ageLimit: '18',
            packagingMaterialId: '03',
            packagingMaterial: 'Glass',
            volumTypeId: '01',
            volumType: 'Helflaske',
            corkTypeId: '01',
            corkType: 'Naturkork',
            bottlePerSalesUnit: 1,
            introductionDate: '2015-01-09',
            productStatusSaleId: '12',
            productStatusSaleName: 'Midlertidig utsolgt',
            productStatusSaleValidFrom: '2019-11-08'
        },
        logistics: {
            wholesalerId: '30519',
            wholesalerName: 'Lesero Idé Og Import',
            vendorId: '30680',
            vendorName: 'Altus Norway AS',
            vendorValidFrom: '2016-12-07',
            manufacturerId: '600903',
            manufacturerName: 'Molino S.S.A.',
            barcodes: [
                {
                    gtin: '7090035092012',
                    isMainGtin: true
                }
            ],
            orderPack: 'D06',
            minimumOrderQuantity: 6.0,
            packagingWeight: 0
        },
        origins: {
            origin: {
                countryId: 'IT',
                country: 'Italia',
                regionId: '12',
                region: 'Piemonte',
                subRegionId: '01',
                subRegion: 'Alba'
            },
            production: {
                countryId: '',
                country: '',
                regionId: '',
                region: ''
            },
            localQualityClassifId: '7',
            localQualityClassif: 'DOCG'
        },
        properties: {
            ecoLabellingId: '',
            ecoLabelling: '',
            storagePotentialId: 'Y',
            storagePotential: 'Drikkeklar nå, men kan også lagres',
            organic: false,
            biodynamic: false,
            ethicallyCertified: false,
            vintageControlled: true,
            sweetWine: false,
            freeOrLowOnGluten: false,
            kosher: false,
            locallyProduced: false,
            noAddedSulphur: false,
            environmentallySmart: false,
            productionMethodStorage: ''
        },
        classification: {
            mainProductTypeId: '1',
            mainProductTypeName: 'Svakvin',
            subProductTypeId: '107',
            subProductTypeName: 'Rødvin',
            productTypeId: '10701',
            productTypeName: 'Rødvin',
            productGroupId: '23',
            productGroupName: 'Rødvin < 9 g sukker per liter'
        },
        ingredients: {
            grapes: [
                {
                    grapeId: '112',
                    grapeDesc: 'Dolcetto',
                    grapePct: 100
                }
            ],
            ingredients: '',
            sugar: '< 3',
            acid: '6,0'
        },
        description: {
            characteristics: {
                colour: 'Rubinrød.',
                odour: 'Kirsebær, tobakk, rose.',
                taste:
                    'Røde skogsfrukter, tørr og fyldig, rund, avslutning med mandel.'
            },
            freshness: '09',
            fullness: '05',
            bitterness: '',
            sweetness: '',
            tannins: '03',
            recommendedFood: [
                {
                    foodId: 'D',
                    foodDesc: 'Lyst kjøtt'
                },
                {
                    foodId: 'L',
                    foodDesc: 'Ost'
                },
                {
                    foodId: 'Q',
                    foodDesc: 'Svinekjøtt'
                }
            ]
        },
        assortment: {
            assortmentId: '15',
            assortment: 'Bestillingsutvalget',
            validFrom: '2015-01-09',
            listedFrom: '2014-01-23',
            assortmentGrade: ''
        },
        prices: [
            {
                priceValidFrom: '2020-01-01',
                salesPrice: 165.1,
                salesPricePrLiter: 220.13,
                bottleReturnValue: 0
            }
        ],
        lastChanged: {
            date: '2020-01-09',
            time: '04:03:16'
        }
    },
    {
        basic: {
            productId: '1266701',
            productShortName: 'Pasqua Romeo Juliet`s wall Passimento',
            productLongName: 'Pasqua Romeo and Juliet`s wall Passimento',
            volume: 0.75,
            alcoholContent: 14.0,
            vintage: 2017,
            ageLimit: '18',
            packagingMaterialId: '03',
            packagingMaterial: 'Glass',
            volumTypeId: '01',
            volumType: 'Helflaske',
            corkTypeId: '01',
            corkType: 'Naturkork',
            bottlePerSalesUnit: 1,
            introductionDate: '2014-03-07',
            productStatusSaleId: '',
            productStatusSaleName: '',
            productStatusSaleValidFrom: '0000-00-00'
        },
        logistics: {
            wholesalerId: '30023',
            wholesalerName: 'Strøm AS',
            vendorId: '30190',
            vendorName: 'Skanlog AS',
            vendorValidFrom: '2017-01-06',
            manufacturerId: '65565',
            manufacturerName: 'Pasqua',
            barcodes: [
                {
                    gtin: '8007880140200',
                    isMainGtin: true
                }
            ],
            orderPack: 'D06',
            minimumOrderQuantity: 6.0,
            packagingWeight: 0
        },
        origins: {
            origin: {
                countryId: 'IT',
                country: 'Italia',
                regionId: '20',
                region: 'Veneto',
                subRegionId: '00',
                subRegion: 'Øvrige'
            },
            production: {
                countryId: '',
                country: '',
                regionId: '',
                region: ''
            },
            localQualityClassifId: '3',
            localQualityClassif: 'IGT'
        },
        properties: {
            ecoLabellingId: '',
            ecoLabelling: '',
            storagePotentialId: 'Y',
            storagePotential: 'Drikkeklar nå, men kan også lagres',
            organic: false,
            biodynamic: false,
            ethicallyCertified: false,
            vintageControlled: true,
            sweetWine: false,
            freeOrLowOnGluten: false,
            kosher: false,
            locallyProduced: false,
            noAddedSulphur: false,
            environmentallySmart: false,
            productionMethodStorage:
                'Druene tørkes i 1 md. Druetypene gjæres i ståltank hver for seg ved 25- 28 grader i 30 dg. 3 md lagring.'
        },
        classification: {
            mainProductTypeId: '1',
            mainProductTypeName: 'Svakvin',
            subProductTypeId: '107',
            subProductTypeName: 'Rødvin',
            productTypeId: '10701',
            productTypeName: 'Rødvin',
            productGroupId: '120',
            productGroupName: 'Rødvin mellom 9 og 45 g sukker per liter'
        },
        ingredients: {
            grapes: [
                {
                    grapeId: '098',
                    grapeDesc: 'Corvina',
                    grapePct: 30
                },
                {
                    grapeId: '105',
                    grapeDesc: 'Croatina',
                    grapePct: 30
                },
                {
                    grapeId: '211',
                    grapeDesc: 'Merlot',
                    grapePct: 40
                }
            ],
            ingredients: '',
            sugar: '11',
            acid: '5,5'
        },
        description: {
            characteristics: {
                colour: 'Tett mørk rød.',
                odour: 'Mørke bær og kryddertoner.',
                taste:
                    'Middels fyldig. Fin balanse mellom fruktighet og friskhet. Saftig og fast.'
            },
            freshness: '06',
            fullness: '07',
            bitterness: '',
            sweetness: '',
            tannins: '05',
            recommendedFood: [
                {
                    foodId: 'D',
                    foodDesc: 'Lyst kjøtt'
                },
                {
                    foodId: 'E',
                    foodDesc: 'Storfe'
                },
                {
                    foodId: 'Q',
                    foodDesc: 'Svinekjøtt'
                }
            ]
        },
        assortment: {
            assortmentId: '15',
            assortment: 'Bestillingsutvalget',
            validFrom: '2014-03-07',
            listedFrom: '2014-01-23',
            assortmentGrade: ''
        },
        prices: [
            {
                priceValidFrom: '2020-01-01',
                salesPrice: 159.9,
                salesPricePrLiter: 213.2,
                bottleReturnValue: 0
            }
        ],
        lastChanged: {
            date: '2020-01-09',
            time: '04:03:16'
        }
    },
    {
        basic: {
            productId: '1267101',
            productShortName: "Molino Barbera d'Asti Loreto",
            productLongName: "Molino Barbera d'Asti Loreto",
            volume: 0.75,
            alcoholContent: 14.5,
            vintage: 2017,
            ageLimit: '18',
            packagingMaterialId: '03',
            packagingMaterial: 'Glass',
            volumTypeId: '01',
            volumType: 'Helflaske',
            corkTypeId: '',
            corkType: '',
            bottlePerSalesUnit: 1,
            introductionDate: '2015-01-09',
            productStatusSaleId: '',
            productStatusSaleName: '',
            productStatusSaleValidFrom: '0000-00-00'
        },
        logistics: {
            wholesalerId: '30519',
            wholesalerName: 'Lesero Idé Og Import',
            vendorId: '30680',
            vendorName: 'Altus Norway AS',
            vendorValidFrom: '2016-12-07',
            manufacturerId: '600903',
            manufacturerName: 'Molino S.S.A.',
            barcodes: [
                {
                    gtin: '7090035092029',
                    isMainGtin: true
                }
            ],
            orderPack: 'D06',
            minimumOrderQuantity: 6.0,
            packagingWeight: 0
        },
        origins: {
            origin: {
                countryId: 'IT',
                country: 'Italia',
                regionId: '12',
                region: 'Piemonte',
                subRegionId: '02',
                subRegion: 'Asti'
            },
            production: {
                countryId: '',
                country: '',
                regionId: '',
                region: ''
            },
            localQualityClassifId: '7',
            localQualityClassif: 'DOCG'
        },
        properties: {
            ecoLabellingId: '',
            ecoLabelling: '',
            storagePotentialId: 'Y',
            storagePotential: 'Drikkeklar nå, men kan også lagres',
            organic: false,
            biodynamic: false,
            ethicallyCertified: false,
            vintageControlled: true,
            sweetWine: false,
            freeOrLowOnGluten: false,
            kosher: false,
            locallyProduced: false,
            noAddedSulphur: false,
            environmentallySmart: false,
            productionMethodStorage: ''
        },
        classification: {
            mainProductTypeId: '1',
            mainProductTypeName: 'Svakvin',
            subProductTypeId: '107',
            subProductTypeName: 'Rødvin',
            productTypeId: '10701',
            productTypeName: 'Rødvin',
            productGroupId: '23',
            productGroupName: 'Rødvin < 9 g sukker per liter'
        },
        ingredients: {
            grapes: [
                {
                    grapeId: '041',
                    grapeDesc: 'Barbera',
                    grapePct: 100
                }
            ],
            ingredients: '',
            sugar: '< 3',
            acid: '6,2'
        },
        description: {
            characteristics: {
                colour: 'Rubinrød.',
                odour: 'Vårblomster og bær.',
                taste: 'Tørr, fyldig og balansert.'
            },
            freshness: '07',
            fullness: '09',
            bitterness: '',
            sweetness: '',
            tannins: '05',
            recommendedFood: [
                {
                    foodId: 'D',
                    foodDesc: 'Lyst kjøtt'
                },
                {
                    foodId: 'L',
                    foodDesc: 'Ost'
                },
                {
                    foodId: 'Q',
                    foodDesc: 'Svinekjøtt'
                }
            ]
        },
        assortment: {
            assortmentId: '15',
            assortment: 'Bestillingsutvalget',
            validFrom: '2015-01-09',
            listedFrom: '2014-01-24',
            assortmentGrade: ''
        },
        prices: [
            {
                priceValidFrom: '2020-01-01',
                salesPrice: 166.4,
                salesPricePrLiter: 221.87,
                bottleReturnValue: 0
            }
        ],
        lastChanged: {
            date: '2020-01-09',
            time: '04:03:16'
        }
    },
    {
        basic: {
            productId: '1267301',
            productShortName: 'Molino Langhe Arneis Sibilla',
            productLongName: 'Molino Langhe Arneis Sibilla',
            volume: 0.75,
            alcoholContent: 14.0,
            vintage: 2016,
            ageLimit: '18',
            packagingMaterialId: '03',
            packagingMaterial: 'Glass',
            volumTypeId: '01',
            volumType: 'Helflaske',
            corkTypeId: '01',
            corkType: 'Naturkork',
            bottlePerSalesUnit: 1,
            introductionDate: '2015-01-09',
            productStatusSaleId: '10',
            productStatusSaleName: 'Midlertidig utsolgt',
            productStatusSaleValidFrom: '2019-11-27'
        },
        logistics: {
            wholesalerId: '30519',
            wholesalerName: 'Lesero Idé Og Import',
            vendorId: '30680',
            vendorName: 'Altus Norway AS',
            vendorValidFrom: '2016-12-23',
            manufacturerId: '600903',
            manufacturerName: 'Molino S.S.A.',
            barcodes: [
                {
                    gtin: '7090035092036',
                    isMainGtin: true
                }
            ],
            orderPack: 'D06',
            minimumOrderQuantity: 6.0,
            packagingWeight: 0
        },
        origins: {
            origin: {
                countryId: 'IT',
                country: 'Italia',
                regionId: '12',
                region: 'Piemonte',
                subRegionId: '01',
                subRegion: 'Alba'
            },
            production: {
                countryId: '',
                country: '',
                regionId: '',
                region: ''
            },
            localQualityClassifId: '7',
            localQualityClassif: 'DOCG'
        },
        properties: {
            ecoLabellingId: '',
            ecoLabelling: '',
            storagePotentialId: 'Y',
            storagePotential: 'Drikkeklar nå, men kan også lagres',
            organic: false,
            biodynamic: false,
            ethicallyCertified: false,
            vintageControlled: true,
            sweetWine: false,
            freeOrLowOnGluten: false,
            kosher: false,
            locallyProduced: false,
            noAddedSulphur: false,
            environmentallySmart: false,
            productionMethodStorage: ''
        },
        classification: {
            mainProductTypeId: '1',
            mainProductTypeName: 'Svakvin',
            subProductTypeId: '103',
            subProductTypeName: 'Hvitvin',
            productTypeId: '10301',
            productTypeName: 'Hvitvin',
            productGroupId: '25',
            productGroupName: 'Hvitvin < 9 g sukker per liter'
        },
        ingredients: {
            grapes: [
                {
                    grapeId: '025',
                    grapeDesc: 'Arneis',
                    grapePct: 100
                }
            ],
            ingredients: '',
            sugar: '< 3',
            acid: '6,5'
        },
        description: {
            characteristics: {
                colour: 'Lys strågul, hint av grønt.',
                odour: 'Hvite blomster, hvit frukt, og urter.',
                taste: 'Tørr, med lang ettersmak.'
            },
            freshness: '07',
            fullness: '05',
            bitterness: '',
            sweetness: '02',
            tannins: '',
            recommendedFood: [
                {
                    foodId: 'A',
                    foodDesc: 'Aperitiff/avec'
                },
                {
                    foodId: 'C',
                    foodDesc: 'Fisk'
                },
                {
                    foodId: 'L',
                    foodDesc: 'Ost'
                }
            ]
        },
        assortment: {
            assortmentId: '15',
            assortment: 'Bestillingsutvalget',
            validFrom: '2015-01-09',
            listedFrom: '2014-01-24',
            assortmentGrade: ''
        },
        prices: [
            {
                priceValidFrom: '2020-01-01',
                salesPrice: 152.3,
                salesPricePrLiter: 203.07,
                bottleReturnValue: 0
            }
        ],
        lastChanged: {
            date: '2020-01-09',
            time: '04:03:16'
        }
    },
    {
        basic: {
            productId: '1268301',
            productShortName: 'Molino Barbaresco Ausario',
            productLongName: 'Molino Barbaresco Ausario',
            volume: 0.75,
            alcoholContent: 14.5,
            vintage: 2013,
            ageLimit: '18',
            packagingMaterialId: '03',
            packagingMaterial: 'Glass',
            volumTypeId: '01',
            volumType: 'Helflaske',
            corkTypeId: '01',
            corkType: 'Naturkork',
            bottlePerSalesUnit: 1,
            introductionDate: '2018-05-04',
            productStatusSaleId: '',
            productStatusSaleName: '',
            productStatusSaleValidFrom: '0000-00-00'
        },
        logistics: {
            wholesalerId: '30519',
            wholesalerName: 'Lesero Idé Og Import',
            vendorId: '30680',
            vendorName: 'Altus Norway AS',
            vendorValidFrom: '2018-02-08',
            manufacturerId: '600903',
            manufacturerName: 'Molino S.S.A.',
            barcodes: [
                {
                    gtin: '7090035092067',
                    isMainGtin: true
                }
            ],
            orderPack: 'D06',
            minimumOrderQuantity: 6.0,
            packagingWeight: 550.0
        },
        origins: {
            origin: {
                countryId: 'IT',
                country: 'Italia',
                regionId: '12',
                region: 'Piemonte',
                subRegionId: '03',
                subRegion: 'Barbaresco'
            },
            production: {
                countryId: '',
                country: '',
                regionId: '',
                region: ''
            },
            localQualityClassifId: '7',
            localQualityClassif: 'DOCG'
        },
        properties: {
            ecoLabellingId: '',
            ecoLabelling: '',
            storagePotentialId: 'Z',
            storagePotential: 'Kan drikkes nå, blir bedre ved lagring',
            organic: false,
            biodynamic: false,
            ethicallyCertified: false,
            vintageControlled: true,
            sweetWine: false,
            freeOrLowOnGluten: false,
            kosher: false,
            locallyProduced: false,
            noAddedSulphur: false,
            environmentallySmart: false,
            productionMethodStorage: ''
        },
        classification: {
            mainProductTypeId: '1',
            mainProductTypeName: 'Svakvin',
            subProductTypeId: '107',
            subProductTypeName: 'Rødvin',
            productTypeId: '10701',
            productTypeName: 'Rødvin',
            productGroupId: '23',
            productGroupName: 'Rødvin < 9 g sukker per liter'
        },
        ingredients: {
            grapes: [
                {
                    grapeId: '238',
                    grapeDesc: 'Nebbiolo',
                    grapePct: 100
                }
            ],
            ingredients: '',
            sugar: '< 3',
            acid: '5,8'
        },
        description: {
            characteristics: {
                colour: 'Rubinrød.',
                odour: 'Modne røde frukter, blåbær og rips.',
                taste: 'Fyldig og tanninrik, lang ettersmak.'
            },
            freshness: '08',
            fullness: '09',
            bitterness: '',
            sweetness: '',
            tannins: '09',
            recommendedFood: [
                {
                    foodId: 'E',
                    foodDesc: 'Storfe'
                },
                {
                    foodId: 'F',
                    foodDesc: 'Lam og sau'
                },
                {
                    foodId: 'H',
                    foodDesc: 'Storvilt'
                }
            ]
        },
        assortment: {
            assortmentId: '15',
            assortment: 'Bestillingsutvalget',
            validFrom: '2018-05-04',
            listedFrom: '2014-06-17',
            assortmentGrade: ''
        },
        prices: [
            {
                priceValidFrom: '2020-01-01',
                salesPrice: 429.3,
                salesPricePrLiter: 572.4,
                bottleReturnValue: 0
            }
        ],
        lastChanged: {
            date: '2020-01-09',
            time: '04:03:16'
        }
    },
    {
        basic: {
            productId: '1270601',
            productShortName: 'Seifried Nelson Riesling',
            productLongName: 'Seifried Nelson Riesling',
            volume: 0.75,
            alcoholContent: 13.0,
            vintage: 2015,
            ageLimit: '18',
            packagingMaterialId: '03',
            packagingMaterial: 'Glass',
            volumTypeId: '01',
            volumType: 'Helflaske',
            corkTypeId: '03',
            corkType: 'Skrukapsel',
            bottlePerSalesUnit: 1,
            introductionDate: '2018-01-12',
            productStatusSaleId: '',
            productStatusSaleName: '',
            productStatusSaleValidFrom: '0000-00-00'
        },
        logistics: {
            wholesalerId: '30056',
            wholesalerName: 'Einar A Engelstad AS',
            vendorId: '30120',
            vendorName: 'Cuveco AS',
            vendorValidFrom: '2017-10-20',
            manufacturerId: '600581',
            manufacturerName: 'Seifried Estate',
            barcodes: [
                {
                    gtin: '9414008111001',
                    isMainGtin: true
                }
            ],
            orderPack: 'D06',
            minimumOrderQuantity: 6.0,
            packagingWeight: 420.0
        },
        origins: {
            origin: {
                countryId: 'NZ',
                country: 'New Zealand',
                regionId: '08',
                region: 'Nelson',
                subRegionId: '00',
                subRegion: ''
            },
            production: {
                countryId: '',
                country: '',
                regionId: '',
                region: ''
            },
            localQualityClassifId: '',
            localQualityClassif: ''
        },
        properties: {
            ecoLabellingId: '',
            ecoLabelling: '',
            storagePotentialId: 'Y',
            storagePotential: 'Drikkeklar nå, men kan også lagres',
            organic: false,
            biodynamic: false,
            ethicallyCertified: false,
            vintageControlled: false,
            sweetWine: false,
            freeOrLowOnGluten: false,
            kosher: false,
            locallyProduced: false,
            noAddedSulphur: false,
            environmentallySmart: false,
            productionMethodStorage: ''
        },
        classification: {
            mainProductTypeId: '1',
            mainProductTypeName: 'Svakvin',
            subProductTypeId: '103',
            subProductTypeName: 'Hvitvin',
            productTypeId: '10301',
            productTypeName: 'Hvitvin',
            productGroupId: '25',
            productGroupName: 'Hvitvin < 9 g sukker per liter'
        },
        ingredients: {
            grapes: [
                {
                    grapeId: '298',
                    grapeDesc: 'Riesling',
                    grapePct: 100
                }
            ],
            ingredients: '',
            sugar: '7,1',
            acid: '6,2'
        },
        description: {
            characteristics: {
                colour: 'Strågul.',
                odour: 'Floral med innslag av lime, mineraler og bivoks.',
                taste:
                    'Halvtørr, konsentrert og fruktig med hint av mineraler. Lang avslutning.'
            },
            freshness: '09',
            fullness: '06',
            bitterness: '',
            sweetness: '03',
            tannins: '',
            recommendedFood: [
                {
                    foodId: 'A',
                    foodDesc: 'Aperitiff/avec'
                },
                {
                    foodId: 'D',
                    foodDesc: 'Lyst kjøtt'
                },
                {
                    foodId: 'Q',
                    foodDesc: 'Svinekjøtt'
                }
            ]
        },
        assortment: {
            assortmentId: '15',
            assortment: 'Bestillingsutvalget',
            validFrom: '2018-01-12',
            listedFrom: '2014-01-27',
            assortmentGrade: ''
        },
        prices: [
            {
                priceValidFrom: '2020-01-01',
                salesPrice: 209.9,
                salesPricePrLiter: 279.87,
                bottleReturnValue: 0
            }
        ],
        lastChanged: {
            date: '2020-01-09',
            time: '04:03:16'
        }
    },
    {
        basic: {
            productId: '1270901',
            productShortName: 'Fram Chardonnay',
            productLongName: 'Fram Chardonnay',
            volume: 0.75,
            alcoholContent: 14.0,
            vintage: 2019,
            ageLimit: '18',
            packagingMaterialId: '03',
            packagingMaterial: 'Glass',
            volumTypeId: '01',
            volumType: 'Helflaske',
            corkTypeId: '03',
            corkType: 'Skrukapsel',
            bottlePerSalesUnit: 1,
            introductionDate: '2018-07-06',
            productStatusSaleId: '',
            productStatusSaleName: '',
            productStatusSaleValidFrom: '0000-00-00'
        },
        logistics: {
            wholesalerId: '30117',
            wholesalerName: 'Vinarius AS',
            vendorId: '30190',
            vendorName: 'Skanlog AS',
            vendorValidFrom: '2018-04-11',
            manufacturerId: '600907',
            manufacturerName: 'Fram Wines',
            barcodes: [
                {
                    gtin: '6009879665031',
                    isMainGtin: true
                }
            ],
            orderPack: 'D06',
            minimumOrderQuantity: 6.0,
            packagingWeight: 450.0
        },
        origins: {
            origin: {
                countryId: 'ZA',
                country: 'Sør-Afrika',
                regionId: '15',
                region: 'Robertson',
                subRegionId: '00',
                subRegion: 'Øvrige'
            },
            production: {
                countryId: '',
                country: '',
                regionId: '',
                region: ''
            },
            localQualityClassifId: '',
            localQualityClassif: ''
        },
        properties: {
            ecoLabellingId: '',
            ecoLabelling: '',
            storagePotentialId: 'Y',
            storagePotential: 'Drikkeklar nå, men kan også lagres',
            organic: false,
            biodynamic: false,
            ethicallyCertified: false,
            vintageControlled: true,
            sweetWine: false,
            freeOrLowOnGluten: false,
            kosher: false,
            locallyProduced: false,
            noAddedSulphur: false,
            environmentallySmart: false,
            productionMethodStorage: ''
        },
        classification: {
            mainProductTypeId: '1',
            mainProductTypeName: 'Svakvin',
            subProductTypeId: '103',
            subProductTypeName: 'Hvitvin',
            productTypeId: '10301',
            productTypeName: 'Hvitvin',
            productGroupId: '25',
            productGroupName: 'Hvitvin < 9 g sukker per liter'
        },
        ingredients: {
            grapes: [
                {
                    grapeId: '088',
                    grapeDesc: 'Chardonnay',
                    grapePct: 100
                }
            ],
            ingredients: '',
            sugar: '< 3',
            acid: '5,6'
        },
        description: {
            characteristics: {
                colour: 'Lys strågul.',
                odour:
                    'Friskt og solmodent fruktpreg. Ren stil, med innslag av pære, epler og eksotiske frukter.',
                taste:
                    'God fylde og fedme som balanseres av syrefriskhet. Mineralsk og fast avslutning.'
            },
            freshness: '08',
            fullness: '07',
            bitterness: '',
            sweetness: '01',
            tannins: '',
            recommendedFood: [
                {
                    foodId: 'B',
                    foodDesc: 'Skalldyr'
                },
                {
                    foodId: 'C',
                    foodDesc: 'Fisk'
                },
                {
                    foodId: 'R',
                    foodDesc: 'Grønnsaker'
                }
            ]
        },
        assortment: {
            assortmentId: '15',
            assortment: 'Bestillingsutvalget',
            validFrom: '2018-07-06',
            listedFrom: '2014-01-27',
            assortmentGrade: ''
        },
        prices: [
            {
                priceValidFrom: '2020-01-01',
                salesPrice: 177.5,
                salesPricePrLiter: 236.67,
                bottleReturnValue: 0
            }
        ],
        lastChanged: {
            date: '2020-02-05',
            time: '05:32:31'
        }
    },
    {
        basic: {
            productId: '1271301',
            productShortName: 'Smak Brut by Eric Legrand',
            productLongName: 'Smak Brut by Eric Legrand',
            volume: 0.75,
            alcoholContent: 12.0,
            vintage: 0,
            ageLimit: '18',
            packagingMaterialId: '03',
            packagingMaterial: 'Glass',
            volumTypeId: '01',
            volumType: 'Helflaske',
            corkTypeId: '',
            corkType: '',
            bottlePerSalesUnit: 1,
            introductionDate: '2014-05-02',
            productStatusSaleId: '',
            productStatusSaleName: '',
            productStatusSaleValidFrom: '0000-00-00'
        },
        logistics: {
            wholesalerId: '30360',
            wholesalerName: 'eWine AS',
            vendorId: '30190',
            vendorName: 'Skanlog AS',
            vendorValidFrom: '2014-05-02',
            manufacturerId: '600909',
            manufacturerName: 'Eric Legrand',
            barcodes: [
                {
                    gtin: '3444970000061',
                    isMainGtin: true
                }
            ],
            orderPack: 'D06',
            minimumOrderQuantity: 6.0,
            packagingWeight: 0
        },
        origins: {
            origin: {
                countryId: 'FR',
                country: 'Frankrike',
                regionId: '06',
                region: 'Champagne',
                subRegionId: '00',
                subRegion: 'Øvrige'
            },
            production: {
                countryId: '',
                country: '',
                regionId: '',
                region: ''
            },
            localQualityClassifId: '4',
            localQualityClassif: 'AOC'
        },
        properties: {
            ecoLabellingId: '',
            ecoLabelling: '',
            storagePotentialId: 'Y',
            storagePotential: 'Drikkeklar nå, men kan også lagres',
            organic: false,
            biodynamic: false,
            ethicallyCertified: false,
            vintageControlled: false,
            sweetWine: false,
            freeOrLowOnGluten: false,
            kosher: false,
            locallyProduced: false,
            noAddedSulphur: false,
            environmentallySmart: false,
            productionMethodStorage: ''
        },
        classification: {
            mainProductTypeId: '1',
            mainProductTypeName: 'Svakvin',
            subProductTypeId: '105',
            subProductTypeName: 'Musserende vin',
            productTypeId: '10504',
            productTypeName: 'Champagne, brut',
            productGroupId: '28',
            productGroupName: 'Musserende vin < 12 g sukker per liter'
        },
        ingredients: {
            grapes: [
                {
                    grapeId: '088',
                    grapeDesc: 'Chardonnay',
                    grapePct: 20
                },
                {
                    grapeId: '279',
                    grapeDesc: 'Pinot Noir',
                    grapePct: 80
                }
            ],
            ingredients: '',
            sugar: '8',
            acid: '5,1'
        },
        description: {
            characteristics: {
                colour: 'Gyllen.',
                odour: 'Intens. Moden frukt.',
                taste: 'Balansert og rund, med frisk syre.'
            },
            freshness: '10',
            fullness: '08',
            bitterness: '',
            sweetness: '02',
            tannins: '',
            recommendedFood: [
                {
                    foodId: 'A',
                    foodDesc: 'Aperitiff/avec'
                },
                {
                    foodId: 'B',
                    foodDesc: 'Skalldyr'
                }
            ]
        },
        assortment: {
            assortmentId: '15',
            assortment: 'Bestillingsutvalget',
            validFrom: '2014-05-02',
            listedFrom: '2014-01-27',
            assortmentGrade: ''
        },
        prices: [
            {
                priceValidFrom: '2020-01-01',
                salesPrice: 299.9,
                salesPricePrLiter: 399.87,
                bottleReturnValue: 0
            }
        ],
        lastChanged: {
            date: '2020-01-09',
            time: '04:03:16'
        }
    },
    {
        basic: {
            productId: '1271401',
            productShortName: "Churchill's Vintage Port",
            productLongName: "Churchill's Vintage Port",
            volume: 0.75,
            alcoholContent: 20.0,
            vintage: 2011,
            ageLimit: '18',
            packagingMaterialId: '03',
            packagingMaterial: 'Glass',
            volumTypeId: '01',
            volumType: 'Helflaske',
            corkTypeId: '',
            corkType: '',
            bottlePerSalesUnit: 1,
            introductionDate: '2016-04-27',
            productStatusSaleId: '10',
            productStatusSaleName: 'Midlertidig utsolgt',
            productStatusSaleValidFrom: '2019-11-25'
        },
        logistics: {
            wholesalerId: '30850',
            wholesalerName: 'Signature Wines AS',
            vendorId: '30190',
            vendorName: 'Skanlog AS',
            vendorValidFrom: '2016-04-27',
            manufacturerId: '66001',
            manufacturerName: 'Graham Churchill',
            barcodes: [
                {
                    gtin: '5603541751957',
                    isMainGtin: true
                }
            ],
            orderPack: 'D06',
            minimumOrderQuantity: 6.0,
            packagingWeight: 0
        },
        origins: {
            origin: {
                countryId: 'PT',
                country: 'Portugal',
                regionId: '08',
                region: 'Douro',
                subRegionId: '00',
                subRegion: 'Øvrige'
            },
            production: {
                countryId: '',
                country: '',
                regionId: '',
                region: ''
            },
            localQualityClassifId: '',
            localQualityClassif: ''
        },
        properties: {
            ecoLabellingId: '',
            ecoLabelling: '',
            storagePotentialId: 'Z',
            storagePotential: 'Kan drikkes nå, blir bedre ved lagring',
            organic: false,
            biodynamic: false,
            ethicallyCertified: false,
            vintageControlled: true,
            sweetWine: false,
            freeOrLowOnGluten: false,
            kosher: false,
            locallyProduced: false,
            noAddedSulphur: false,
            environmentallySmart: false,
            productionMethodStorage: ''
        },
        classification: {
            mainProductTypeId: '2',
            mainProductTypeName: 'Sterkvin',
            subProductTypeId: '203',
            subProductTypeName: 'Portvin',
            productTypeId: '20301',
            productTypeName: 'Portvin',
            productGroupId: '32',
            productGroupName: 'Portvin'
        },
        ingredients: {
            grapes: [
                {
                    grapeId: '352',
                    grapeDesc: 'Tinta Barroca',
                    grapePct: 20
                },
                {
                    grapeId: '357',
                    grapeDesc: 'Tinta Roriz',
                    grapePct: 20
                },
                {
                    grapeId: '358',
                    grapeDesc: 'Tinto Cão',
                    grapePct: 20
                },
                {
                    grapeId: '362',
                    grapeDesc: 'Touriga Franca',
                    grapePct: 20
                },
                {
                    grapeId: '363',
                    grapeDesc: 'Touriga Nacional',
                    grapePct: 20
                }
            ],
            ingredients: '',
            sugar: '104',
            acid: '5,5'
        },
        description: {
            characteristics: {
                colour: 'Tett rødfiolett.',
                odour:
                    'Ung. Konsentrert preg av mørke bær, pepper og urter, innslag av fat.',
                taste:
                    'Ung og uutviklet. Fokusert preg av mørke bær, pepper og svale urter. Lang, fast ettersmak.'
            },
            freshness: '08',
            fullness: '10',
            bitterness: '',
            sweetness: '09',
            tannins: '',
            recommendedFood: [
                {
                    foodId: 'L',
                    foodDesc: 'Ost'
                },
                {
                    foodId: 'N',
                    foodDesc: 'Dessert, kake, frukt'
                }
            ]
        },
        assortment: {
            assortmentId: '15',
            assortment: 'Bestillingsutvalget',
            validFrom: '2016-04-27',
            listedFrom: '2014-01-28',
            assortmentGrade: ''
        },
        prices: [
            {
                priceValidFrom: '2020-01-01',
                salesPrice: 649.9,
                salesPricePrLiter: 866.53,
                bottleReturnValue: 0
            }
        ],
        lastChanged: {
            date: '2020-01-09',
            time: '04:03:16'
        }
    },
    {
        basic: {
            productId: '1272001',
            productShortName: 'Cono Sur Sparkling Brut',
            productLongName: 'Cono Sur Sparkling Brut',
            volume: 0.75,
            alcoholContent: 12.5,
            vintage: 0,
            ageLimit: '18',
            packagingMaterialId: '03',
            packagingMaterial: 'Glass',
            volumTypeId: '01',
            volumType: 'Helflaske',
            corkTypeId: '',
            corkType: '',
            bottlePerSalesUnit: 1,
            introductionDate: '2014-05-02',
            productStatusSaleId: '',
            productStatusSaleName: '',
            productStatusSaleValidFrom: '0000-00-00'
        },
        logistics: {
            wholesalerId: '30056',
            wholesalerName: 'Einar A Engelstad AS',
            vendorId: '30120',
            vendorName: 'Cuveco AS',
            vendorValidFrom: '2014-05-02',
            manufacturerId: '64878',
            manufacturerName: 'Viña Cono Sur',
            barcodes: [
                {
                    gtin: '7804320319018',
                    isMainGtin: true
                }
            ],
            orderPack: 'D06',
            minimumOrderQuantity: 6.0,
            packagingWeight: 900.0
        },
        origins: {
            origin: {
                countryId: 'CL',
                country: 'Chile',
                regionId: '02',
                region: 'Bío-Bío Valley',
                subRegionId: '00',
                subRegion: ''
            },
            production: {
                countryId: '',
                country: '',
                regionId: '',
                region: ''
            },
            localQualityClassifId: '',
            localQualityClassif: ''
        },
        properties: {
            ecoLabellingId: '',
            ecoLabelling: '',
            storagePotentialId: 'X',
            storagePotential: 'Drikkeklar, ikke egnet for lagring',
            organic: false,
            biodynamic: false,
            ethicallyCertified: false,
            vintageControlled: false,
            sweetWine: false,
            freeOrLowOnGluten: false,
            kosher: false,
            locallyProduced: false,
            noAddedSulphur: false,
            environmentallySmart: false,
            productionMethodStorage: 'Produsert etter Charmat-metoden.'
        },
        classification: {
            mainProductTypeId: '1',
            mainProductTypeName: 'Svakvin',
            subProductTypeId: '105',
            subProductTypeName: 'Musserende vin',
            productTypeId: '10501',
            productTypeName: 'Musserende vin',
            productGroupId: '28',
            productGroupName: 'Musserende vin < 12 g sukker per liter'
        },
        ingredients: {
            grapes: [
                {
                    grapeId: '088',
                    grapeDesc: 'Chardonnay',
                    grapePct: 93
                },
                {
                    grapeId: '279',
                    grapeDesc: 'Pinot Noir',
                    grapePct: 7
                }
            ],
            ingredients: '',
            sugar: '10',
            acid: '7'
        },
        description: {
            characteristics: {
                colour: 'Lys gul med hint av grønt.',
                odour:
                    'Sitrus, hvite blomster, tørket frukt og lette anslag av honning.',
                taste: 'Frisk og fruktig.'
            },
            freshness: '08',
            fullness: '06',
            bitterness: '',
            sweetness: '04',
            tannins: '',
            recommendedFood: [
                {
                    foodId: 'A',
                    foodDesc: 'Aperitiff/avec'
                }
            ]
        },
        assortment: {
            assortmentId: '15',
            assortment: 'Bestillingsutvalget',
            validFrom: '2014-05-02',
            listedFrom: '2014-01-29',
            assortmentGrade: ''
        },
        prices: [
            {
                priceValidFrom: '2020-01-01',
                salesPrice: 169.9,
                salesPricePrLiter: 226.53,
                bottleReturnValue: 0
            }
        ],
        lastChanged: {
            date: '2020-01-09',
            time: '04:03:16'
        }
    }
];

export default testProducts;
