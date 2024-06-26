import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tiposEspeciales Ejemplo:['A','J','Q','K']
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @returns {Array<String>} 
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta===0 ) 
    throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    
    if ( !tiposEspeciales || tiposEspeciales===0 ) 
    throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
    
    let deck= [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}