import React, { Component } from 'react'
import "../../abled/hmtl.css"
export default class Food4 extends Component {
render() {
return (
<div>
    <section id="one" class="white">
        <div class="inner">
            <p><strong>1.</strong>Good nutrition will provide your child with the right balance of energy as he/she grows up. They will be able to participate in activities that will keep them active and healthy.
                </p>
            <p><strong>2.</strong>A healthy nutrition plan will help prevent obesity. Obesity amongst children is fast becoming one of the
                biggest health concerns of our times. Diseases caused by obesity like type two diabetes and high cholesterol
                are now commonly seen in children. Ensuring that a diet rich in fruits, vegetables and fibre will help stave off
                obesity.</p>
            <p><strong>3.</strong> Creating valuable and good eating habits is a natural by-product of good nutrition during childhood. Learning
                when and how much to snack while balancing meals are important lessons that must be learnt early in life
            </p>
        </div>
    </section>
    <div class="white">
        <table class="container">
            <tbody>
                <tr>
                    <th width="110">Proteins</th>
                    <th width="150">140-185gm</th>
                    <th width="150">115-170gm</th>
                    <th width="250">Pulses, chicken breast,soya nuggets, egg whites</th>
                </tr>
                <tr>
                    <th width="150">Fruits </th>
                    <th width="150">1.5-2cups</th>
                    <th width="150">1.5-2cups</th>
                    <th width="250">Apples, bananas,seasonal fruits, papaya, watermelon</th>
                </tr>
                <tr>
                    <th width="150">Vegetables</th>
                    <th width="150">2-3.5cups</th>
                    <th width="150">1.5-3cups</th>
                    <th width="250">Potato, eggplant, ladiesfinger, radish, carrots,beets, yams, sweetpotato, seasonal
                        freshvegetables</th>
                </tr>
                <tr>
                    <th width="150">Grains</th>
                    <th width="150">140-225gm</th>
                    <th width="150">140-225gm</th>
                    <th width="250">Rice, whole wheat,millets like jowar and bajra</th>
                </tr>
                <tr>
                    <th width="150">Dairy</th>
                    <th width="150">3cups</th>
                    <th width="150">3cups</th>
                    <th width="250">Milk, curds, fresh cheese</th>
                </tr>
            </tbody>
        </table>
    </div>
</div>
)
}
}