import { defineStore } from 'pinia'

export const useTeamsStore = defineStore('teams',{
  state:()=>({
    teams:[
      {id: 0, name: 'x', points: 0, isActive: true, isIncluded: true},
      {id: 1, name: 'y', points: 0, isActive: false, isIncluded: true},
      {id: 2, name: 'z', points: 0, isActive: false, isIncluded: true},
      {id: 3, name: 'xd', points: 0, isActive: false, isIncluded: false},
    ],
  }),
  getters:{
    getTeamsStats(){
      return this.teams;
    },
    getTeamOnTurn(){
      return this.teams.find(team=> team.isActive)
    },
  },
  actions:{
    awardPointsToActive(value){
      this.getTeamOnTurn.points += value;
    },
    awardPoints(teamIndex,pointsToAward){
      this.teams.at(teamIndex).points += pointsToAward;
    },
    changeTeamsName(teamIndex, newName){
      this.teams.at(teamIndex).name= newName;
    },
    toggleActiveState(teamIndex){
      this.teams.at(teamIndex).isActive = !this.teams.at(teamIndex).isActive;
    },
    toggleIncludedState(teamIndex){
      this.teams.at(teamIndex).isIncluded = !this.teams.at(teamIndex).isIncluded;
    },
    handleNextTurn(){
      let activeTeamIndex= this.teams.find(team=> team.isActive)?.id;
      this.teams[activeTeamIndex+1]?.isIncluded? this.teams[activeTeamIndex+1].isActive= true : this.teams[0].isActive= true;
      this.teams[activeTeamIndex].isActive= false;
    },
    handleCreateTeam(teamName){
      let newTeam= this.teams.find(team=> !team.isIncluded);
      newTeam.name= teamName;
      newTeam.isIncluded= true;
    },
  }
})
