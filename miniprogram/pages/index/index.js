"use strict";
var app = getApp();
Page({
    data: {
        name: '',
        age: '',
        sex: ['男', '女'],
        selectSex: '女',
        sexShow: false,
        year: ['1年','3年','5年','10年','20年'],
        selectYear: '3年',
        yearShowo: false,
        ageError: '',
        able: true
    },
    onLoad: function () {

    },
    handleSexChange({ detail = {} }){
        this.setData({
            selectSex: detail.value
        });
    },
    handleYearChange({ detail = {} }){
        this.setData({
            selectYear: detail.value
        });
    },
    showSexPopup() {
        this.setData({ sexShow: true })
    },
    onSexClose() {
        this.setData({ sexShow: false })
    },
    showYearPopup() {
        this.setData({ yearShow: true })
    },
    onYearClose() {
        this.setData({ yearShow: false })
    },
    submit(){
        console.log("条")
    },
    inputAge(input){
        if(input.detail){
            if(input.detail*1 >= 120 || input.detail <= 0){
                this.setData({age:input.detail,ageError: '年龄需在1~120岁',able:false})
            }else{
                this.setData({age:input.detail,ageError: '',able:false})
            }
        }else{
            this.setData({age:input.detail,ageError: '年龄不能为空',able:false})
        }
    }
});