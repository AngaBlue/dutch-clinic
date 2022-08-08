// Technic as Techniek
export const Technic = ['Implantaat', 'Brug', 'Sinuslift', 'All-on', 'Wortelkanaal behandeling'];
// Implant as Im plantaat
export const ImplantOptions = ['A-Kwaliteit €895', 'B-Kwaliteit €695'];
export const ImplantMaterials = ['Porselein €195', 'Zirconium €295', 'E-Maz €315'];
// Brug
export const BrugOptions = [
    'Driedelige brug   3x material-crown',
    'Vierdelige brug   4x material-crown',
    'Vijfdelige brug   5x material-crown'
];
export const BrugMaterials = ['Porselein €195', 'Zirconium €295', 'E-Maz €315'];
// AllOn
export const AllOn = ['All on 4', 'All on 6'];
// Wortel
export const Wortel = ['1   €125', '2   €165', '3     €195'];
// SinusLift
export const SinusLift = ['Open €1155', 'Gesloten €750'];

// defaultState for DentalState
export const defaultState = {
    firstname: '',
    lastname: '',
    email: '',
    // date: '',
    technic: Technic[0],
    treatments: ''
};

export type DentalState = typeof defaultState;
