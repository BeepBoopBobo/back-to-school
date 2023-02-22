import { defineStore } from 'pinia'

export const useTopicsStore = defineStore('topics',{
  state:()=>({
    topics:[
      {id: 0, name: 'Musicaly fit', parentalTopic:'Music', questions:[
        {name: 'pop', isActive: true, points: 500, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'funk',isActive: true, points: 300, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'jazz',isActive: true, points: 100, rightA: 'yes', wrongA:['no','no','no']},
      ]},
      {id: 1, name: 'Mooovies ',parentalTopic:'Cinema', questions:[
        {name: 'horror',isActive: true, points: 500, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'bromance',isActive: true, points: 300, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'comedy',isActive: true, points: 100, rightA: 'yes', wrongA:['no','no','no']},
      ]},
      {id: 2, name: 'Oscars',parentalTopic:'Cinema', questions:[
        {name: 'actor',isActive: true, points: 500, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'actress',isActive: true, points: 300, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'unknown',isActive: true, points: 100, rightA: 'yes', wrongA:['no','no','no']},
      ]},
      {id: 3, name: 'Animated Masterpieces',parentalTopic:'Cinema', questions:[
        {name: 'Shrek',isActive: true, points: 500, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'Cars',isActive: true, points: 300, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'Tangled',isActive: true, points: 100, rightA: 'yes', wrongA:['no','no','no']},
      ]},
      {id: 4, name: 'EU states',parentalTopic:'Geography', questions:[
        {name: 'Germany',isActive: true, points: 500, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'Poland',isActive: true, points: 300, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'Slovakia',isActive: true, points: 100, rightA: 'yes', wrongA:['no','no','no']},
      ]},
      {id: 5, name: 'NA states',parentalTopic:'Geography', questions:[
        {name: 'Alaska',isActive: true, points: 500, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'Colorado',isActive: true, points: 300, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'California',isActive: true, points: 100, rightA: 'yes', wrongA:['no','no','no']},
      ]},
    ],
    activeQuestion:{},
    activeTopics:[      {id: 4, name: 'EU states',parentalTopic:'Geography', questions:[
      {name: 'Germany',isActive: true, points: 500, rightA: 'yes', wrongA:['no','no','no']},
      {name: 'Poland',isActive: true, points: 300, rightA: 'yes', wrongA:['no','no','no']},
      {name: 'Slovakia',isActive: true, points: 100, rightA: 'yes', wrongA:['no','no','no']},
    ]},
    {id: 5, name: 'NA states',parentalTopic:'Geography', questions:[
      {name: 'Alaska',isActive: true, points: 500, rightA: 'yes', wrongA:['no','no','no']},
      {name: 'Colorado',isActive: true, points: 300, rightA: 'yes', wrongA:['no','no','no']},
      {name: 'California',isActive: true, points: 100, rightA: 'yes', wrongA:['no','no','no']},
    ]},],
    parentalTopics:[],
    maxTopics: 5,
  }),
  getters:{
    getActiveQuestion(){
      return this.activeQuestion;
    },
    getActiveTopics(){
      return this.activeTopics;
    },
    getParents(){
      this.topics.forEach(topic=> this.parentalTopics.includes(topic.parentalTopic)? null: this.parentalTopics.push(topic.parentalTopic) );
      return this.parentalTopics;
    },
    getTopicsByParent(){
      let parents= this.getParents;
      let temp= [];
      parents.forEach(parent=> temp.push({parentTopic: parent, childTopics: this.topics.filter(topic=> topic.parentalTopic== parent)}))
      return temp;
    }

  },
  actions:{
    printParents(){
      let temp=[];
      temp=  this.topics?.forEach(topic=> temp.push(topic.parentalTopic) );
      console.log('parental topics', temp)
    },
    setActiveQuestion(qName){
      let x= this.topics.find(topic=> topic.questions.find(question=> question.name == qName));
      this.activeQuestion= x.questions.find(question=> question.name== qName);
    },
    toggleActiveTopic(topicId){
      let wantedTopic= this.topics.find(topic=> topic.id== topicId);
      this.activeTopics.includes(wantedTopic)?  this.activeTopics.splice(this.activeTopics.indexOf(wantedTopic),1):this.activeTopics.push(wantedTopic)
    },
    disableTopic(topicId){
      let wantedTopic= this.topics.find(topic=> topic.id== topicId);
      this.activeTopics.splice(this.activeTopics.indexOf(wantedTopic),1)
    }
  }
  
})