export interface Readings_raw {
    '8way_prob': {
        melanoma: number,
        neo: number,
        carcinoma: number,
        actinic_keratosis: number,
        solar_lentigo: number,
        dermatofibroma: number,
        lesione_vasculare: number,
        squamous_carcinoma: number
    };
    '2way_prob': {
        noMelanoma: number,
        melanoma: number,
    };
    risk: number;
    '8way_results': number;
    '2way_results': number;
}
