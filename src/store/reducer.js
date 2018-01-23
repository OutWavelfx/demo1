import defaultState from "./state";

const reducer = (state=defaultState, action)=>{
  let {type,payload}=action;
  switch(type){
    case 'SHOW_NAV':
      return Object.assign({},state,{
        bNav:true
      });
      break;
    case 'HIDE_NAV':
      return Object.assign({},state,{
        bNav:false
      });
      break;
    case 'SHOW_FOOT':
      return Object.assign({},state,{
        bFoot:true
      });
      break;
    case 'HIDE_FOOT':
      return Object.assign({},state,{
        bFoot:false
      });
      break;
    case 'SHOW_LOADING':
      return Object.assign({},state,{
        bLoading:true
      });
      break;
    case 'HIDE_LOADING':
      return Object.assign({},state,{
        bLoading:false
      });
      break;
      case 'SHOW_USERINFO':
      return Object.assign({},state,{
        bHeader:'我的中心'
      });
      break;
    case 'SHOW_LOGIN':
      return Object.assign({},state,{
        bHeader:'登录/注册'
      });
      break;
    case 'SHOW_REGISTER':
      return Object.assign({},state,{
        bHeader:'注册'
      });
      break;
    case 'SHOW_DETAIL':
      return Object.assign({},state,{
        bHeader:'产品详情'
      });
      break;
    case 'SHOW_SHOPCAR':
      return Object.assign({},state,{
        bHeader:'我的购物车'
      });
      break;

      case "ADD_NUM":
            
      var newList =[...state.bShopList];
      newList.forEach((item,index)=>{
          if(item.id==payload.id){
              item.count++
          }
      })
      var come=0;
      newList.forEach((item,index)=>{
          if(item.boolean){
              come += item.count*(item.price-10)
          }
      })
      
      return Object.assign({},state,{bShopList:newList,total:come});
      break;
  case "MINUS_NUM":
      var newList =[...state.bShopList];
      newList.forEach((item,index)=>{
          if(item.id==payload.id){
              item.count<=1?item.count:item.count--
          }
      })
      var come=0;
      newList.forEach((item,index)=>{
          if(item.boolean){
              come += item.count*(item.price-10)
          }
      })
      
       return Object.assign({},state,{bShopList:newList,total:come}); 
      break;
   case "SEND_SHOPLIST":
              var newList =[...state.bShopList];
              //  如果是第一次就放在数组中，多次就count++
              var find = true;
              if(newList.length==0){
                  newList.push(payload)   
              }else{
                  newList.forEach((item,index)=>{
                      if(item.id==payload.id){
                          item.count++;
                          find = false;
                      }
                  })
                  if(find){
                      newList.push(payload)  
                  }
              }

              var come=0;
              newList.forEach((item,index)=>{
                  if(item.boolean){
                      come += item.count*(item.price-10)
                  }
              })
              
       return Object.assign({},state,{bShopList:newList,total:come});
       break;
      // return Object.assign({},state,{bLoading:false}); 
  case "DEL":
          var newList =[...state.bShopList];
          newList.forEach((item,index)=>{
              console.log(index)
              if(item.id==payload.id){
                  newList.splice(index,1)
              } 
         })
          var come=0;
          newList.forEach((item,index)=>{
               come += item.count*item.price
          })
          return Object.assign({},state,{bShopList:newList,total:come});
          break;
  case "CHECK":
              var newList =[...state.bShopList];
              var come=0;
              var temp = true;
              newList.forEach((item,index)=>{
                  if(item.id==payload){
                      item.boolean = !item.boolean
                  }
                  if(item.boolean){
                      come += item.count*item.price
                  }else{
                      temp=false;
                  }
                  
              }) 
              return Object.assign({},state,{bShopList:newList,total:come,open:temp}); 
              break;
  case "CHECK_ALL":
              var newList =[...state.bShopList];
              var come=0;
              if(!payload){

                  newList.forEach((item,index)=>{
                      item.boolean = true
                      come += item.count*item.price
                 })  

              }else{
                  newList.forEach((item,index)=>{
                      item.boolean = false
                 })                
              }

              return Object.assign({},state,{bShopList:newList,open:!payload,total:come}); 
  break;
break;
    default:
      return state;
  }
};
export default reducer;