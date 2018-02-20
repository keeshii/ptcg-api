# Pokémon TCG SDK

[![Build Status](https://travis-ci.org/keeshii/ptcg-api.svg?branch=master)](https://travis-ci.org/keeshii/ptcg-api)

This is the Pokémon TCG SDK TypeScript implementation. It is a wrapper around the Pokémon TCG API of [pokemontcg.io](http://pokemontcg.io/).

## Installation
    
    npm install ptcg-api
    
## Usage

#### Find a Card by id

    import {v1 as ptcg} from 'ptcg-api';

    ptcg.cards.find('base1-4').then(res => {
        console.log(res.card.name); // "Charizard"
    });

#### Filter Cards via query parameters

    ptcg.cards.where({
        set: 'generations',
        supertype: 'pokemon'
    }).then(res => {
        res.cards.forEach(card => console.log(card.name));
    });

#### Find all Cards

    ptcg.cards.all();
    
#### Paginate Card queries

    ptcg.cards.all({
        page: 5,
        pageSize: 100
    }).then(res => {
        console.log(res.pageSize);  // size of page
        console.log(res.count);     // number of returned elements
        console.log(res.totalCount); // number of all elements
    });

#### Find a Set by set code

    ptcg.sets.find('base1');
    
#### Filter Sets via query parameters

    ptcg.sets.where({standardLegal: 'true'});

#### Get all Sets

    ptcg.sets.all();
    
#### Get all Types

    ptcg.types.all();
    
#### Get all Subtypes

    ptcg.subtypes.all();
    
#### Get all Supertypes

    ptcg.supertypes.all();
