// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Upload {
  
//   struct Access{
//      address user; 
//      bool access; //true or false
//   }
//   mapping(address=>string[]) value;
//   mapping(address=>mapping(address=>bool)) ownership;
//   mapping(address=>Access[]) accessList;
//   mapping(address=>mapping(address=>bool)) previousData;

//   function add(address _user,string memory url) external {
//       value[_user].push(url);
//   }
//   function allow(address user) external {//def
//       ownership[msg.sender][user]=true; 
//       if(previousData[msg.sender][user]){
//          for(uint i=0;i<accessList[msg.sender].length;i++){
//              if(accessList[msg.sender][i].user==user){
//                   accessList[msg.sender][i].access=true; 
//              }
//          }
//       }else{
//           accessList[msg.sender].push(Access(user,true));  
//           previousData[msg.sender][user]=true;  
//       }
    
//   }
// //   function disallow(address user) public{
// //       ownership[msg.sender][user]=false;
// //       for(uint i=0;i<accessList[msg.sender].length;i++){
// //           if(accessList[msg.sender][i].user==user){ 
// //               accessList[msg.sender][i].access=false;  
// //           }
// //       }
// //   }

//   function display(address _user) external view returns(string[] memory){
//       require(_user==msg.sender || ownership[_user][msg.sender],"You don't have access");
//       return value[_user];
//   }

//   function shareAccess() public view returns(Access[] memory){
//       return accessList[msg.sender];
//   }

    struct Images{
        address user;
        string url;
        string description;
        string noImageText;
    }

    Images[] images;//to add images to blockchain

    function add(string memory url, string memory desc, string memory text) 
    external
    {
        Images memory img;
        img.user = msg.sender;
        img.url = url;
        img.description = desc;
        img.noImageText = text;
        images.push(img);
    }

    function display()
    external view
    returns(Images[] memory){
        return images;
    }
}