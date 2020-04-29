import Mock from "mockjs"
Mock.setup({timeout:2000})
Mock.mock("/list_item.json","get",function(){
        return Mock.mock({
        "code": 0,
        "message": "",
         "data|10":[{
          "page":1,
          "page_size":10,
          "total_count":6,
          "name": "@cname",
          "desc|1-2":1, 
          "once|1-2":1,
          "status|1-2":1,
          "time":"@datetime",
          "operate|1-2":1
        }],
    })
})