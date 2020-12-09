import React from 'react'
import buildings from '../buildings.json'

export default function Buildings() {
  return <div>{buildings.map(b => b.building.id)}</div>;
}