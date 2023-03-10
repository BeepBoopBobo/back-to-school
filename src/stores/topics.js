import { defineStore } from 'pinia'

export const useTopicsStore = defineStore('topics',{
  state:()=>({
    topics:[
      {id: 0, name: 'Musicaly fit', parentalTopic:'Music', questions:[
        {id: 0,name: 'funk',isActive: true, points: 500, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
        {id: 1,name: 'pop', isActive: true, points: 300, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
        {id: 2,name: 'jazz',isActive: true, points: 100, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
      ]},
      {id: 1, name: 'Mooovies ',parentalTopic:'Cinema', questions:[
        {id: 3,name: 'horror',isActive: true, points: 500, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
        {id: 4,name: 'bromance',isActive: true, points: 300, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
        {id: 5,name: 'comedy',isActive: true, points: 100, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
      ]},
      {id: 2, name: 'Oscars',parentalTopic:'Cinema', questions:[
        {id: 6,name: 'actor',isActive: true, points: 500, rightA: {id: 'r0', answer:'yes',active: true},wrongA:[{id:'w0',answer: 'noo',active: true},{id:'w1',answer: 'nooooo',active: true},{id:'w2',answer: 'nn',active: true}]},
        {id: 7,name: 'actress',isActive: true, points: 300, rightA: {id: 'r0', answer:'yes',active: true},wrongA:[{id:'w0',answer: 'noo',active: true},{id:'w1',answer: 'nooooo',active: true},{id:'w2',answer: 'nn',active: true}]},
        {id: 8,name: 'unknown',isActive: true, points: 100, rightA: {id: 'r0', answer:'yes',active: true},wrongA:[{id:'w0',answer: 'noo',active: true},{id:'w1',answer: 'nooooo',active: true},{id:'w2',answer: 'nn',active: true}]},
      ]},
      {id: 3, name: 'Animated Masterpieces',parentalTopic:'Cinema', questions:[
        {id: 9,name: 'Shrek',isActive: true, points: 500, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
        {id: 10,name: 'Cars',isActive: true, points: 300, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
        {id: 11,name: 'Tangled',isActive: true, points: 100, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
      ]},
      {id: 4, name: 'EU states',parentalTopic:'Geography', questions:[
        {id: 12,name: 'Germany',isActive: true, points: 500, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
        {id: 13,name: 'Poland',isActive: true, points: 300, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
        {id: 14,name: 'Slovakia',isActive: true, points: 100, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
      ]},
      {id: 5,name: 'NA states',parentalTopic:'Geography', questions:[
        {id: 15,name: 'Alaska',isActive: true, points: 500, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
        {id: 16,name: 'Colorado',isActive: true, points: 300, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
        {id: 17,name: 'California',isActive: true, points: 100, rightA: {id: 'r0', answer:'yes',active: true}, wrongA:[{id:'w0',answer: 'no'},{id:'w1',answer: 'no'},{id:'w2',answer: 'no'}]},
      ]},
    ],
    activeQuestion:{},
    activeTopics:[     
      {id: 4, name: 'EU states',parentalTopic:'Geography', questions:[
      {id: 12,name: 'Germany',isActive: true, points: 500, rightA: {id: 'r0', answer:'yes'}, wrongA:[{id:'w0',answer: 'noo',active: true},{id:'w1',answer: 'nooooo',active: true},{id:'w2',answer: 'nn',active: true}]},
      {id: 13,name: 'Poland',isActive: true, points: 300, rightA: {id: 'r0', answer:'yes'}, wrongA:[{id:'w0',answer: 'noo',active: true},{id:'w1',answer: 'nooooo',active: true},{id:'w2',answer: 'nn',active: true}]},
      {id: 14,name: 'Slovakia',isActive: true, points: 100, rightA: {id: 'r0', answer:'yes'}, wrongA:[{id:'w0',answer: 'noo',active: true},{id:'w1',answer: 'nooooo',active: true},{id:'w2',answer: 'nn',active: true}]},
    ]},
    {id: 5,name: 'NA states',parentalTopic:'Geography', questions:[
      {id: 15,name: 'Alaska',isActive: true, points: 500, rightA: {id: 'r0', answer:'yes'}, wrongA:[{id:'w0',answer: 'noo',active: true},{id:'w1',answer: 'nooooo',active: true},{id:'w2',answer: 'nn',active: true}]},
      {id: 16,name: 'Colorado',isActive: true, points: 300, rightA: {id: 'r0', answer:'yes'}, wrongA:[{id:'w0',answer: 'noo',active: true},{id:'w1',answer: 'nooooo',active: true},{id:'w2',answer: 'nn',active: true}]},
      {id: 17,name: 'California',isActive: true, points: 100, rightA: {id: 'r0', answer:'yes'}, wrongA:[{id:'w0',answer: 'noo',active: true},{id:'w1',answer: 'nooooo',active: true},{id:'w2',answer: 'nn',active: true}]},
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
    },
    getActiveQuestionAnswersRan(){
      let tempArr= [...this.activeQuestion?.wrongA];
      tempArr.splice(Math.floor(Math.random()*4),0, this.activeQuestion?.rightA);
      return tempArr;
    },
    getRightAnswer(){
      return this.getActiveQuestionAnswersRan.find(item=> item.id=='r0');
    },
    getWrongAnswer(){
      let rightIndex= this.getActiveQuestionAnswersRan.indexOf(this.getRightAnswer);
      let wrongIndex= Math.floor(Math.random()*4);
      while(wrongIndex == rightIndex){
        wrongIndex= Math.floor(Math.random()*4);
      };
      return this.getActiveQuestionAnswersRan.at(wrongIndex)
    },

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
    },
    toggleFiftyFifty(){
      let temp=this.activeQuestion.wrongA ;

      while( this.activeQuestion.wrongA.filter(item=> item.active == true).length > 1){
      let x =Math.floor(Math.random()*3)
      if(temp.at(x) != this.getWrongAnswer){
        console.log('x', x)
        this.activeQuestion.wrongA.at(x).active= false;
      }

      }
    },

  }
  
})