import React, {Component, createRef} from 'react';
import Try from "./Try";

//this 를 안쓸때는 밖에 뺌, 다름 곳에서도 사용하기 위해서
function getNumbers() { //숫자 네개를 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(), // ex [1, 3, 5, 7]
        tries: [] //push 쓰면 안됌!
    }
    //화살표 함수 안쓰면 this 못씀
    onSubmitForm = (e) => {
        const {result, value, tries, answer} = this.state;
        e.preventDefault();
        if (value === answer.join('')) {
            this.setState({
                result: '홈런!',
                tries: [...tries, {try: value, result: '홈런!'}],
            });
            alert('게임을 다시 시작합니다!');
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
            this.inputRef.current.focus();
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) { //10번 이상 틀렸을 때
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')} 였습니다!`,
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                })
                this.inputRef.current.focus();
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼 입니다.`}],
                    value: '',
                });
                this.inputRef.current.focus();
            }
        }

    };

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value,
        });
    };

    fruits = [
        {fruit: '사과', taste: '맛있다'},
        {fruit: '바나나', taste: '맛없다'},
        {fruit: '포도', taste: '시다'},
        {fruit: '귤', taste: '떫다'},
        {fruit: '감', taste: '쓰다'},
        {fruit: '배', taste: '달다'},
        {fruit: '밤', taste: '몰라'},
        {fruit: '밤', taste: '몰라2'},
    ]

    inputRef = createRef();

    render() {
        const {result, value, tries} = this.state;
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput}/>
                </form>
                <div> 시도 : {tries.length}</div>
                <ul>
                    {tries.map((v, i) => {
                        return (
                            <Try key={`${i + 1}차 시도 : `} tryInfo={v}/>
                        );
                    })}
                </ul>
            </>
        );
    }
}

export const hello = 'hello'; //import {hello}
export const bye = 'hello'; // import {hello, bye}

export default NumberBaseball; //import NumberBaseball

// module.exports = NumberBaseball;
//export.hello = 'hello';