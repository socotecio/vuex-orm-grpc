# Vuex ORM GRPC
This plugin allow you to perform grpc call from your vuex orm models

## QuickStart
### Installation
	npm install @vuex-orm/core vuex-orm-grpc --save 
	enter code here
### Setting up
	import Vue from "vue";  
	import Vuex from "vuex";  
	import VuexORM from "@vuex-orm/core"; 
	import VuexOrmGrpc from "vuex-orm-grpc";
	
	Vue.use(Vuex);  
	VuexORM.use(VuexOrmGrpc);

### Model
	import { Model } from "@vuex-orm/core";  
		  
	export default class Pamphlet extends Model {  
	  static entity = "Pamphlet";  
	  
	  static controller = "PamphletController";  
	  
	  static grpcWebPb = require("@/grpc/generated/pamhplet_grpc_web_pb");  
	 
	  static grpcOptions = {  
    	  url: "http://localhost:8082",  
    	  credentials: null,  
    	  options: null  
	  };  
	  
	  static primaryKey = "uuid";  
	  
	  static fields() {  
    	  return {  
    	  uuid: this.uid(),  
    	  code: this.string(),  
    	  createdAt: this.string(),  
    	  updatedAt: this.string(),  
    	  modifiedBy: this.string(),  
    	  isArchived: this.boolean()  
    	  };  
	  }  
	}

### Usage
	methods: {
		fetchPamphletsVuexORM() {
      Pamphlet.grpc()
        .list(Pamphlet.grpc().PamphletListRequest, {})
        .then(r => {
          console.log(r.toObject())
          Pamphlet.insert({
            data: r.toObject().resultsList
          });
        })
        .catch(error => {
          throw new Error(error);
        });
    }
	}