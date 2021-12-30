import React from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
import db from '../../api/db.json';

const ListOfCategories = () => {
  return (
    <List>
      {
        db.categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  );
};

export { ListOfCategories };
