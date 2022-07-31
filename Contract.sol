pragma solidity ^0.8.0;

interface MyInterface {
    function getToken() external returns(string memory) ; 
}

contract Token {
    string public tokenName = "CumInside";
    mapping(address => uint) public balances;

    function getTokenName() public view returns(string memory) {
        return tokenName;
    }
}