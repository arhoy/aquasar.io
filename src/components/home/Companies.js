import React from 'react';
import styled from '@emotion/styled';


import { SectionGrey } from '../reusableStyles/sections/Sections';
import { Tag, TagContainer } from '../reusableStyles/tags/Tag';
import { H2 } from '../reusableStyles/typography/Typography';


const Container = styled.div`
  display: flex;
  height: 100%;

  align-items: center;
`;

const CustomSection = styled(SectionGrey)`
  padding: 4rem 4rem;
  margin-bottom: 2rem;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  & h2, h3 {
    padding: 1rem 0;
    padding-bottom: 2rem;
  }
  & p {
    line-height: 2.7rem;
    color: #191919;
    margin-bottom: 4rem;
  }

  & ul, ol {

  }

  & li{
    padding-left: 1rem;
    line-height: 2.7rem;
    list-style:none;
    border-left: 2px solid red;
   
    margin: 2rem
  }
  .spacing {
    margin: 4rem 0;
  }
`;

const CustomSection2 = styled(CustomSection)`
  background: ${props => props.theme.colors.white};
  border: 1rem solid ${props => props.theme.colors.primaryDark};
`;

const CustomSection3 = styled(CustomSection)`
  background: white;
`

const CustomTag = styled(Tag)``;

export const Companies = () => {
  return (
    <>
      <CustomSection>
        <h2>My Elevator Pitch</h2>
        <p>
         Hello, I am Alex. I'm an online ordering and website consultant in Edmonton, Alberta. I have been developing websites and doing online marketing on a full time basis for the last 5 years. I have seen first hand what works, what doesn't work and have tested and iterated countless of ads and ad copy. I have worked with companies large and small and specialize in helping restaurants.
         
         <br/><br/>
          We all know that 2020 has been a hard time for restaurants no doubt. I have seen first hand restaurants shutting their doors down in my city. I want to help them. Genuinely. I have had countless of conversations with restaurant owners in the last few months alone. Some are adapting, some are struggling to survive and some are even doing better than before.  Working with many restaurants' I have come up with a plan of action for restaurants to help them save the commission fees from third party apps while getting the same amount or more of total orders. 
         <br/><br/>
         I have seen first hand how well these strategies work. I believe in working with restaurant owners collaborately to come up with a solution that can save them thousands per month in commission fees from third party apps and websites. I provide restaurants their own website, their own online ordering and their own restaurant branded app so that they can start to dominiate their own online presence and show up in top spot and top of mind on Google and social media channels.   
      
          <br /> <br />I work with all restaurants, large companies, digital
          agencies and individual clients. My goal is to provide affordable,
          effective and reliable solutions for everyone I work with.
        </p>
    
      </CustomSection>
     

      <CustomSection3>
      <h2>Restaurants</h2>

      <p>
      As a restaurant owner or manager, are you sick of paying the high commission fees from third party apps like Skip The Dishes, Uber Eats and DoorDash? Do you wish there was another way? Sure they do delivery and get you lots of orders but when you start to look into the numbers a bit, one or more of the following scenarios probably rings a bell
      </p>


      <ul>
        <li>
        I have the same or more revenue but my profit margins have fallen considerably over the years
        </li>

        <li>
        My online presence has diminished or stayed the same.
          </li>
          <li>
          People are ordering more for online delivery orders. Customers are even ordering pickup on third party apps now.
          </li>
      </ul>
   

      <p>
      If you are in this scenario, then third party apps are eating your lunch. They have likely completely hijacked your restaurant brand online. If you Google your brand name you probably see Skip The Dishes ads, UberEats ads and DoorDash ads all over the place. Especially during the lunch and dinner rush hours when you are too busy to even notice! Those slimy bastards!  So where is your restaurant website? Do you even have one? If so, when was the last time you updated it? No I’m not talking about a ghosted Facebook page. Note to small business owners:  a Facebook page is not a replacement for a professional website. 
      </p>

      <p>
      So where does your restaurant website rank after all those ads?
      </p>

      <p>
      News flash! The #1 highest converting and best traffic online is Google organic traffic. If you are not in the #1 spot for your own restaurant in your own city then improvements should be made. And they should be made swiftly to save your restaurant. 
      </p>
      
      <p>
      Lucky for you, we can get you up and running with a professional sales optimized website with online ordering and hosting support in under 2 business days. 
      </p>

      <p>
      Maybe those scenarios are not relevant to you. That is actually good, because this means the third party apps have not swooped in yet to dominate you. Maybe you are a new restaurant or are “old school” and you “do not do technology”. In this case, likely scenarios are:  
      </p>

     
        <ul>
          <li>
          The phone rings non-stop. You are completely overwhelmed especially during peak hours. Customers probably are waiting for as much as 5 or 10 minutes on the phone or cannot get through and might give up or go some other place to order. Either way, it is not too good for business. 
          </li>
          <li>
          Business is okay, I am getting lots of orders. During lunch and dinner there is quite a few orders
          </li>
          <li>
          It is very quiet. This virus has impacted my business and I constantly think about shutting down permanently. There is nothing I can do.
          </li>
        </ul>
     

      <p>
      If my phone was ringing non-stop to the point I could not take more orders and I knew each order probably took 1 to 2 minutes of my time, I would definitely look for a more efficient way to do things.
      
      <p/>

      <p>
      Let's do the math! 
       </p> 

       <p className = "math">
       Say we have just 20 phone call orders per day. 
      </p>

       <p className = "math">
      Then that is about 600 phone call orders per month. 
      </p> 

      <p className = "math">
      If each phone call order is 2 minutes then that is about 20 hours per month. 
      </p>
  
      <p className = "math">
      20 hours per month of save time just by switching to online ordering!
      </p>
  

      <p>
      If you are in this situation, then that is wonderful news as online ordering would be a great fit for you to streamline your process and free up your time and your staff's time. I think my numbers are right… any math majors in the room? It has been a while since I did Math. 
      </p>

      <p>
      There are just some of the many scenarios restaurant owners face. If any of the above applies to you then we can help your business. Why is that?. We understand that your business is unique and each restaurant has different requirements, budgets and expectations. We will work with you to look at what you are currently doing and then devise a plan of action to help you achieve that goal. 
      </p>

      <div className = "spacing"></div>
      <h2>
      Excuses and More Excuses
      </h2>

      <p>
      While there are many restaurants onboard doing lots of online ordering, the most common excuse for not doing online ordering is: 
      </p>

      <h3>
      FAT EXCUSE #1 <br/>
      Skip The Dishes as a well known name. How will people know to order through me?
      </h3>

        <p>
        Yes, it is very true, Skip The Dishes are a well known billion dollar organization. They are the elephant in the room bulldozing down the helpless restaurants. Many restaurants are not only just completely ok with that fact, but most are helping them out in the process (unknowingly or willingly). They then go and mention how much they hate them. So wow are you helping them out? Here is a few reasons
        </p>

      <ol>
        <li>
        By mentioning they do Skip The Dishes on your restaurant website ( in a BIG RED Banner at the very top of the page
        </li>
      
        <li>
        By having a Skip The Dishes website that is ranked #1 on Google. Yes, that is more common than you think. Do you have a Skip The Dishes website? Yes, well then no wonder you are getting so many orders through them. What a surprise… NOT.
        </li>
        <li>
        By not increasing your menu prices on Skip The Dishes. Skip The Dishes is already ra*ing you of the 25% commission. Of course you love your customers, but for God Sake pass the some of the “convenience charges” onto them
        </li>
      </ol>
        <h3>
        FAT EXCUSE #2 I do not do delivery
        </h3>

        <p>
        Ok so you don’t do delivery yourselves. I can actually understand not wanting to do delivery or not being able to do delivery. Some good reasons for not being able or wanting to do delivery might be :
        </p>

        <ol>
          <li>
          You are a very small restaurant, with limited staff.Maybe you are the only one in the restaurant right now doing EVERYTHING because you cannot afford to hire any staff. 
          </li>
          <li>
          You just do not want to deal with the headache. 
          </li>
          <li>
          You don’t deliver to the whole city and it takes too much time
          </li>
        </ol>
        <div className = "spacing" ></div>
        <p>
        So point a) IMHO is very valid. However, that is still not an excuse to not have your own online ordering system. There are restaurants that are getting 3 and 4 figures in revenue per month in online pickup orders only. Yes, over 10K/month online pickup orders on their own website.
        </p>

        <p>
        Addressing point b). I hate headaches too. In fact the only thing I despise more than headaches is losing money for no good reason. Luckly, with our online ordering system, it makes it very easy to avoid both of these issues. 
        </p>

        <p>
        Next,  onto point c). You simply don’t need to deliver to the whole city. Rather you can deliver in a small range around your business.. Let’s be straight here. I am not telling you to cancel third party apps. I think they can be a good way to leverage your restaurant business if done correctly. With your own online ordering system you can ensure to only deliver within a certain 2 or 3km range to start. Let the third party apps do the heavy driving for you if you really need to be on them.
        </p>

        <p>
        However, if you are paying third party apps more than $5000/month in delivery fees or have multiple locations then you can easily hire a delivery driver and have some left over budget for marketing. That extra staff does not just have to be the driver when getting started. They can help with other tasks in the restaurant like wash dishes or cut tomatoes or something as customers start to take notice. However, if you are going to make the commitment of doing all the deliveries yourself, simply turn them off for a while and decide what is best for you.

        </p>

        <h3>
        FAT EXCUSE #3 I cant really afford anything right now.
        </h3>
        <p>
        This is my favourite as time and time again it is shown that when done correctly, online ordering: 
        </p>
        <ol>
          <li>
          Saves restaurants huge amounts of money each month
          </li>
          <li>
          Saves restaurants huge amounts of time each month
            </li>
        </ol>

        <p>
        I think both time and money are pretty important for business. I was going to think of a c) but I think a) and b) is good enough. 
        </p>
      
      <h2>Why Am I Doing This</h2>

    <p>Sometimes I get asked why I am doing this. People say it is too good to be true than. Listen, once upon a time Skip The Dishes use to charge only 15%. Then they started to get greedy and now they are charging new restaurants 30% in commission fees. I see many restaurants and many good local restaurants in pain because of them. I want to help them out with their own whitelabel online ordering system and website presence.</p>

    <h2>
    How much is the cost
    </h2>

    <p>
    Right now we have two plans. The online ordering system with unlimited promotions, QR codes, local support and tons of online payment gateway options starting at $69/month. 
    </p>

    <p>
    There is also the marketing and SEO plan than comes with online advertising management, SEO and online ordering app + website. This is $29/month +3% per order.
    </p>
</p>
  </CustomSection3>

      <CustomSection2>
        <h2>Who Do I Work With?</h2>
        <p>
          Here are some of the companies I have worked for or with, directly or indirectly in various different roles and tasks
        </p>
        <Container>
          <TagContainer>
            <CustomTag>Finning Canada</CustomTag>
            <CustomTag>Mindable</CustomTag>
            <CustomTag>Go Auto</CustomTag>
            <CustomTag>Devebyte</CustomTag>
            <CustomTag>The Order Guys</CustomTag>
            <CustomTag>Crystal Glass</CustomTag>
            <CustomTag>Golden Rice Bowl</CustomTag>
            <CustomTag>Jesus VR</CustomTag>
            <CustomTag>Dept 9 Studios</CustomTag>
            <CustomTag>Porche Pirate Chest</CustomTag>
            <CustomTag>New Image Cosmetic</CustomTag>
            <CustomTag>Market Buzz</CustomTag>
            <CustomTag>Northlink Supply</CustomTag>
            <CustomTag>Khrome Beauty Lounge</CustomTag>
            <CustomTag>Nurse Next Door</CustomTag>
            <CustomTag>Von's Steak House</CustomTag>
            <CustomTag>Burger Baron</CustomTag>
            <CustomTag>Winnipeg City Pizza</CustomTag>
            <CustomTag>Rice Bowl Deluxe</CustomTag>
            <CustomTag>New Everest Mulit Bar and Kitchen</CustomTag>
            <CustomTag>Food Invite Cameroon</CustomTag>
            <CustomTag>Dress Code Africa</CustomTag>
            <CustomTag>Providence FMC</CustomTag>
            <CustomTag>Sumo Sumo Sushi</CustomTag>
            <CustomTag>Neverland Tea</CustomTag>
            <CustomTag>Contact Instruments</CustomTag>
            <CustomTag>Northlink Supply</CustomTag>
            <CustomTag>Soul 2 Sole</CustomTag>
            <CustomTag>Basha Donair</CustomTag>
            <CustomTag>Lowens</CustomTag>
            <CustomTag>Nitza's Pizza</CustomTag>
            <CustomTag>Chemesis</CustomTag>
            <CustomTag>Makara Mining</CustomTag>
            <CustomTag>The Little Masterminds</CustomTag>
            <CustomTag>Amazing Wok</CustomTag>
            <CustomTag>Bell Island Pizza</CustomTag>
            <CustomTag>Gabby's</CustomTag>
            <CustomTag>Liberty Eats</CustomTag>
            <CustomTag>Morinville Pizza </CustomTag>
            <CustomTag>Pizza Paradise and Donair </CustomTag>
            <CustomTag>Shawarma Ave</CustomTag>
            <CustomTag>Smilies Village</CustomTag>
            <CustomTag>Tito's Restaurant</CustomTag>
            <CustomTag>Thai One On</CustomTag>
            <CustomTag>Thai One Express</CustomTag>
            <CustomTag>Zuhur's Restaurant</CustomTag>
          </TagContainer>
        </Container>
      </CustomSection2>
    
    </>
  );
};
