import { defineStore } from 'pinia'

export const useTopicsStore = defineStore('topics',{
  state:()=>({
    topics:[
      {id: 0, name: 'Musicaly fit', questions:[
        {name: 'pop',points: 500, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'funk',points: 300, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'jazz',points: 100, rightA: 'yes', wrongA:['no','no','no']},
      ]},
      {id: 1, name: 'Mooovies ', questions:[
        {name: 'horror',points: 500, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'bromance',points: 300, rightA: 'yes', wrongA:['no','no','no']},
        {name: 'comedy',points: 100, rightA: 'yes', wrongA:['no','no','no']},
      ]},
    ],
    activeQuestion:{},
    activeTopics:[],
  }),
  getters:{
    getActiveQuestion(){
      return this.activeQuestion;
    },
    getActiveTopics(){
      return this.activeTopics;
    },

  },
  actions:{
    setActiveQuestion(qName){
      let x= this.topics.find(topic=> topic.questions.find(question=> question.name == qName));
      this.activeQuestion= x.questions.find(question=> question.name== qName);
    },
    toggleActiveTopic(topicId){
      console.log('x')
      let wantedTopic= this.topics.find(topic=> topic.id== topicId);
      console.log('wanted',wantedTopic)
      console.log('includes?',this.activeTopics,this.activeTopics.includes(wantedTopic))
      this.activeTopics.includes(wantedTopic)?  this.activeTopics.splice(this.topics.indexOf(wantedTopic),1):this.activeTopics.push(wantedTopic)
    }
  }
})
