# Sky Town๐ก
> ๊ณต๊ณต๋ฐ์ดํฐ๋ฅผ ํ์ฉํด ํธ๋ฆฌํ๊ฒ ์ํ๋ ์ง์ ์ฐพ๋ ์น ํ๋ก์ ํธ  


## Introduction
### Main Features
- ๊ฐ์ธํ ๋งค๋ฌผ ์ถ์ฒ
- ๊ทธ๋ฃน๋ณ ์ํํธ ์์ธ ์๊ฐํ

### Others
- ์ฑ๋ด
- ์์ ๋ก๊ทธ์ธ
- ๋ถ๋์ฐ ๋ด์ค ํฌ๋กค๋ง
- ์ค์๊ฐ ๋ฏธ์ธ๋จผ์ง ์ ๋ณด ์๊ฐํ
- ๊ตฌ๋ ๋งค๋ฌผ ๋ฉ์ผ ์๋ฆผ ์๋น์ค
- AWS ์๋น์ค๋ฅผ ์ด์ฉํ DB ์๋ฒ ๊ตฌ์ถ
- ์ค์ผ์ค๋ฌ๋ก ์ธํ ์ต์ ์ ๋ณด ์๋ฐ์ดํธ ๊ด๋ฆฌ

### Technologies used
|Tech|Stack|
|-|-|
|**Language**|Java, JavaScript|
|**Backend**|Spring Boot, MyBatis|
|**Frontend**|Vue.js|
|**Database**|MySQL|
|**Server**|AWS EC2|
|**DevOps**|Git|

### Developed by
|Name|Responsibility|
|:-:|:-|
|[Jiun Kim](https://github.com/rlajiun)|- ๊ทธ๋ฃน๋ณ ์ํํธ ์์ธ ์๊ฐํ <br> - ํค์๋ ๊ธฐ๋ฐ ํํฐ๋ง <br> - ์ํํธ ์์ธ ์ ๋ณด ์กฐํ <br> - Q&A ๊ฒ์ํ <br> - ์ค์ผ์ค๋ฌ ๊ตฌํ <br> - DB ์๋ฒ ๊ตฌ์ถ <br> - ๋ฐ์ดํฐ ํ์ฑ&ํธ๋ค๋ฌ ๊ตฌํ|
|[Yein Song](https://github.com/Semy-sudo)|- ๋ค์ด๋ฒ ์์ ๋ก๊ทธ์ธ&ํ์๊ฐ์ <br> - ์ฑ๋ด <br> - ๋งค๋ฌผ ๊ฐ์ธํ ์ถ์ฒ <br> - ์ถ์ฒ ๋งค๋ฌผ ์ด๋ฉ์ผ ์๋ฆผ <br> - ๋ถ๋์ฐ ๋ด์ค ํฌ๋กค๋ง <br> - ๋ฏธ์ธ๋จผ์ง ์๊ฐํ|

<br>

# Tech Specification
## Requirements
<table><thead><tr><th>๋ฒํธ</th><th>์ฃผ์ ๊ธฐ๋ฅ</th><th>์์ธ ๊ธฐ๋ฅ</th><th>๊ธฐ๋ฅ ์ค๋ช</th><th>๊ฐ๋ฐ ์ํ</th></tr></thead><tbody><tr><td>1</td><td rowspan="8">ํ์</td><td>๋ก๊ทธ์ธ</td><td></td><td>์๋ฃ</td></tr><tr><td>2</td><td>ํ์๊ฐ์</td><td></td><td>์๋ฃ</td></tr><tr><td>3</td><td>๋น๋ฐ๋ฒํธ ์ฐพ๊ธฐ</td><td></td><td></td></tr><tr><td>4</td><td>์์ ๋ก๊ทธ์ธ</td><td>๋ค์ด๋ฒ ์์ ๋ก๊ทธ์ธ</td><td>์๋ฃ</td></tr><tr><td>5</td><td>๋น๋ฐ๋ฒํธ ์ํธํ</td><td>DB์ ์ ์ฅํ  ๋</td><td></td></tr><tr><td>6</td><td>๋ง์ดํ์ด์ง</td><td>์ฌ์ฉ์ ์ ๋ณด ์กฐํ</td><td></td></tr><tr><td>7</td><td>๊ด์ฌ ์ ๋ณด/์ง์ญ</td><td></td><td></td></tr><tr><td>8</td><td>์ต๊ทผ ๋ณธ ๋งค๋ฌผ</td><td></td><td></td></tr><tr><td>9</td><td rowspan="3">์ง๋</td><td>๊ทธ๋ฃน๋ณ ์์ธ ์๊ฐํ</td><td>์ง์ญ๋ณ ์ง๋ ํด๋ฌ์คํฐ๋ง + ์์ธ ํ์</td><td>์๋ฃ</td></tr><tr><td>10</td><td>ํธ์ ์์ค ์์น ์ ๊ณต</td><td>์ด๋ฆฐ์ด์ง, ๊ณต์, ๋์ดํฐ ๋ฑ ์์ด๋ค์ ์ํ ํธ์ ์์ค ์์น ์ ๊ณต</td><td></td></tr><tr><td>11</td><td>์ธ๊ตฌ ํ๋ฆ ์๊ฐํ</td><td></td><td></td></tr><tr><td>12</td><td rowspan="4">์ํํธ</td><td>์ํํธ ์์ธ ์ ๋ณด ์กฐํ</td><td>์ํํธ ์์ธ, ์ต๊ทผ ์ค๊ฑฐ๋๊ฐ, ์ฃผ๋ณ ํธ์์์ค ๋ฑ ์ ๋ณด ์ ๊ณต</td><td>์๋ฃ</td></tr><tr><td>13</td><td>ํ์ด์ง</td><td>๋ฌดํ ์คํฌ๋กค ์ ์ฉ</td><td></td></tr><tr><td>14</td><td>์ํํธ ๊ณต์ ํ๊ธฐ</td><td></td><td></td></tr><tr><td>15</td><td>๋๋ค์ ๋ณด ์กฐํ</td><td>๊ฐ ๋ฒ์ ๋ ์นดํ ์, ํธ์์  ์, ์ํผ ์ ๋ฑ ๋๋ค์ ๋ณด</td><td></td></tr><tr><td>16</td><td rowspan="5">๊ฒ์</td><td>๊ทธ๋ฃน๋ณ ํํฐ๋ง</td><td>์,๊ตฌ,๋ ๋ณ ๊ธฐ๋ฐ ์ํํธ ๋งค๋ฌผ ํํฐ๋ง</td><td>์๋ฃ</td></tr><tr><td>17</td><td>๊ฐ๊ฒฉ ๊ธฐ๋ฐ ํํฐ๋ง</td><td></td><td></td></tr><tr><td>18</td><td>ํค์๋ ๊ธฐ๋ฐ ํํฐ๋ง</td><td></td><td>์๋ฃ</td></tr><tr><td>19</td><td>์๋ ์ ๊ธฐ๋ฐ ํํฐ๋ง</td><td>์๋ ์๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ์ง ๋ฉด์ ์ ๋ฐ๋ฅธ ์ถ์ฒ</td><td></td></tr><tr><td>20</td><td>๋งค๋ฌผ ์ถ์ฒ ์๋น์ค</td><td>์ถ์ฒ ํ ์ด๋ฉ์ผ ์ ์ก - ๊ด์ฌ ์ง์ญ์ ์ข์ ๋งค๋ฌผ์ด ๋์ค๋ฉด ๋ ๋ ค์ฃผ๊ธฐ<br>๊ณ ๊ฐ์ด ๋ณธ ๋งค๋ฌผ ๋ฐ์ดํฐ ๊ธฐ๋ฐ์ผ๋ก, ์ ์ฌํ ๋งค๋ฌผ ์ถ์ฒ</td><td>์๋ฃ</td></tr><tr><td>21</td><td rowspan="2">๋ฆฌ๋ทฐ</td><td>๋ฆฌ๋ทฐ ๋ฑ๋ก</td><td>์ํํธ๋ณ ๊ฑฐ์ฃผ๋ฏผ ๋ฆฌ๋ทฐ ์๋น์ค</td><td></td></tr><tr><td>22</td><td>๋ฆฌ๋ทฐ ์ ๋ ฌ</td><td>์ต์ ์, ํ์ ๋์์ ๋ฑ ์ ๋ ฌ</td><td></td></tr><tr><td>23</td><td rowspan="3">๊ฒ์ํ</td><td>QnA</td><td></td><td>์๋ฃ</td></tr><tr><td>24</td><td>๊ณต์ง์ฌํญ</td><td></td><td></td></tr><tr><td>25</td><td>์ปค๋ฎค๋ํฐ</td><td></td><td></td></tr><tr><td>26</td><td rowspan="6">๊ธฐํ</td><td>์ฑ๋ด</td><td>Chatbot์ ์ง์  ๋ง๋ ๊ฒ์ ์๋๋ผ Api๋ฅผ ํตํด ๋ฐ์์ค๋ ํ์์ผ๋ก ๊ตฌ์ฑ - ๋ค์ด๋ฒ ์ฑ๋ด ํ์ฉ </td><td>์๋ฃ</td></tr><tr><td>27</td><td>๋ฏธ์ธ๋จผ์ง ์ ๋ณด ์๊ฐํ</td><td>์์ธ์ ๋ฏธ์ธ๋จผ์ง์ ๋ณด ๋๋ณ ์๊ฐํ</td><td>์๋ฃ</td></tr><tr><td>28</td><td>๋ด์ค๊ธฐ์ฌ ํฌ๋กค๋ง</td><td>๋ถ๋์ฐ ๋ด์ค๊ธฐ์ฌ top10</td><td>์๋ฃ</td></tr><tr><td>29</td><td>๊ด๊ณ  ์๋น์ค</td><td></td><td></td></tr><tr><td>30</td><td>์ฃผ์์ ์ ํ์</td><td>ํด๋น ๋งค๋ฌผ์ด ์ค์๊ฐ์ผ๋ก ๋ช๋ช์ด ๋ณด๊ณ ์๋์ง ์๋ ค์ฃผ๋ ๊ธฐ๋ฅ</td><td></td></tr><tr><td>31</td><td>์ค์๊ฐ ์๋ด</td><td>์ ๋ฌธ๊ฐ๋ค๊ณผ ์ฐ๊ฒฐํด ์ค์๊ฐ์ผ๋ก ์๋ด ํ  ์ ์๋ ๊ธฐ๋ฅ</td><td></td></tr></tbody></table>

## ERD
![erd](https://user-images.githubusercontent.com/54028476/144899041-5d13a365-2583-4229-9b05-e73874572ad1.png)

## Package Structure
```
Skytown
    โโcom
        โโssafy
            โโhappyhouse
                โ  HappyhouseApplication.java
                โ  ServletInitializer.java
                โ  
                โโapt
                โ  โ  AptController.java
                โ  โ  
                โ  โโmodel
                โ  โ  โ  Apt.java
                โ  โ  โ  AptAvg.java
                โ  โ  โ  AptDeal.java
                โ  โ  โ  AptInfo.java
                โ  โ  โ  AptInfoBasic.java
                โ  โ  โ  
                โ  โ  โโmapper
                โ  โ  โ      AptMapper.java
                โ  โ  โ      
                โ  โ  โโservice
                โ  โ          AptService.java
                โ  โ          AptServiceImpl.java
                โ  โ          
                โ  โโutil
                โ          AptDealSaxHandler.java
                โ          AptDealSaxParser.java
                โ          AptDetailSaxHandler.java
                โ          AptInfoSaxHandler.java
                โ          AptSaxHandler.java
                โ          AptSaxParser.java
                โ          
                โโconfig
                โ      DatabaseConfig.java
                โ      SchedulerConfig.java
                โ      SwaggerConfig.java
                โ      WebSocketConfig.java
                โ      
                โโemail
                โ  โ  EmailController.java
                โ  โ  SMTPAuthenticator.java
                โ  โ  
                โ  โโmodel
                โ      โ  Mail.java
                โ      โ  
                โ      โโmapper
                โ      โ      AptDetailMapper.java
                โ      โ      
                โ      โโservice
                โ              AptDetail.java
                โ              MailHandler.java
                โ              MailService.java
                โ              MailServiceImpl.java
                โ              
                โโmap
                โ  โ  MapController.java
                โ  โ  
                โ  โโmodel
                โ      โ  Zone.java
                โ      โ  ZoneChild.java
                โ      โ  
                โ      โโmapper
                โ      โ      MapMapper.java
                โ      โ      
                โ      โโservice
                โ              MapService.java
                โ              MapServiceImpl.java
                โ              
                โโqna
                โ  โ  AnswerController.java
                โ  โ  QuestionController.java
                โ  โ  
                โ  โโmodel
                โ      โ  Answer.java
                โ      โ  Question.java
                โ      โ  
                โ      โโmapper
                โ      โ      AnswerMapper.java
                โ      โ      QuestionMapper.java
                โ      โ      
                โ      โโservice
                โ              AnswerService.java
                โ              AnswerServiceImpl.java
                โ              QuestionService.java
                โ              QuestionServiceImpl.java
                โ              
                โโrecommend
                โ  โ  ItemSimilarityRecommendController.java
                โ  โ  UserBasedRecommendCsvGrandeController.java
                โ  โ  UserByAptScoreController.java
                โ  โ  
                โ  โโmodel
                โ      โ  RecommendInfo.java
                โ      โ  ReommendAptInfo.java
                โ      โ  
                โ      โโmapper
                โ      โ      AptScoreMapper.java
                โ      โ      RecommendMapper.java
                โ      โ      
                โ      โโservice
                โ              AptScoreService.java
                โ              AptScoreServiceImpl.java
                โ              RecommendService.java
                โ              RecommendServiceImpl.java
                โ              
                โโuser
                โ  โ  NaverLoginController.java
                โ  โ  UserController.java
                โ  โ  
                โ  โโmodel
                โ      โ  UnAuthorizedException.java
                โ      โ  User.java
                โ      โ  
                โ      โโmapper
                โ      โ      UserMapper.java
                โ      โ      
                โ      โโservice
                โ              JwtService.java
                โ              JwtServiceImpl.java
                โ              UserService.java
                โ              UserServiceImpl.java
                โ              
                โโutil
                    โ  ChatController.java
                    โ  DustController.java
                    โ  NewsController.java
                    โ  Util.java
                    โ  
                    โโmodel
                            Category.java
                            Dust.java
                            HouseInfoDto.java
                            News.java
```

<br>

# Web Page

[![์์ฐ_๋์์](https://user-images.githubusercontent.com/54028476/144907343-954063ae-ff25-4483-995c-406d9a648e23.png)](https://youtu.be/amfXnoPyJTA)
