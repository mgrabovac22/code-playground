import './main.css';
import Collapsible from './list';
import UnderCollapsible from './under-list';

function Main(){
    return(
        <div id="main">
            <Collapsible title="Craig Ferguson">
                <p>Hey Marin, how you've been, I always wondered, are you ever coming to Scotland, I wanna show you Glasgow, my home town and many memories I had there.</p>
                <UnderCollapsible title="\/">
                    <p>ferg.craig@gmail.com</p>
                    <p>Recieved: 12.09.2023. at 12:32</p>
                </UnderCollapsible>
            </Collapsible>
            <Collapsible title="Samantha Weeler">
                <p>Hello Marin, I just wanted to let you know that we aranged the birthday tomorow, and we hope that you can make it, so let us know.</p>
                <UnderCollapsible title="\/">
                    <p>weeler.sam99@gmail.com</p>
                    <p>Recieved: 09.09.2023. at 11:59</p>
                </UnderCollapsible>
            </Collapsible>
            <Collapsible title="Alex Williams">
                <p>Hi Marin, I'm glad we had a chance to chat at the convention. I am writing to you about our last meeting/your presentation yesterday/our next event. Thanks for your feedback on/your invitation/your suggestion. Would you be available on 13th? If so, I'll send you an invite shortly.</p>
                <UnderCollapsible title="\/">
                    <p>wiliamsalexLWWB@gmail.com</p>
                    <p>Recieved: 30.08.2023. at 09:13</p>
                </UnderCollapsible>
            </Collapsible>
            <Collapsible title="Harvey Spectre">
                <p>Sup Marin, I just wanted to let you know that we aranged the birthday tomorow, and we hope that you can make it, so let us know. We will appriciate it very much so think about it.</p>
                <UnderCollapsible title="\/">
                    <p>harveyPSL@gmail.com</p>
                    <p>Recieved: 10.07.2023. at 03:12</p>
                </UnderCollapsible>
            </Collapsible>
            <Collapsible title="Mike Ross">
                <p>Hi Marin, Thank you so much for helping me the other day. It was such a pleasure to work with you, and I'm very excited about the next opportunity to work together again. Please don't hesitate to contact me if I can provide any additional information.</p>
                <UnderCollapsible title="\/">
                    <p>rosscolumbia@gmail.com</p>
                    <p>Recieved: 12.06.2023. at 15:25</p>
                </UnderCollapsible>
            </Collapsible>
            <Collapsible title="Donna Paulsen">
                <p>Dear Marin, I hope you are enjoying your recent purchase of our company. If you found it useful, we would like you to help us and others who would like to buy it too.</p>
                <UnderCollapsible title="\/">
                    <p>iamdonna@gmail.com</p>
                    <p>Recieved: 17.03.2023. at 19:46</p>
                </UnderCollapsible>
            </Collapsible>
            <Collapsible title="Rachel Zane">
                <p>Dear Marin, I just wanted to know how is the life in New York, we haven't seen you in a while, so call us if there is any changes or any new things in your life, we would like to know them, Mike and I in Seattle are very good, he is happy with the job and verry happy with everything that is happening. He had another case the other day where he was defending a children that were poisoned by big power company, he made a case that they insured that power plant a lot more than other power plants.</p>
                <UnderCollapsible title="\/">
                    <p>zanenotfromKRZ@gmail.com</p>
                    <p>Recieved: 01.01.2023. at 04:18</p>
                </UnderCollapsible>
            </Collapsible>
        </div>
    );
}


export default Main;
