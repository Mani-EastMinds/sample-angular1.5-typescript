import angular from 'angular';
import { World } from './world';

const world =  new World();
console.log(`Rendering from import class: ${world.name}`);

angular.module("appmodule", []);