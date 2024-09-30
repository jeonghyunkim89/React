import { Component } from "react";
import Comment from "./Comment";

const comments = [
    { id: 1, value: '안녕하세요 ?' },
    { id: 2, value: '반갑습니다. 곧 점심시간이네요^^' },
    { id: 3, value: '맛있게 드세요.'}
];

let timer;

export default class CommentList extends Component {
    constructor(props) { //**constructor**는 컴포넌트가 처음 생성될 때 호출
        super(props);   //super(props)는 부모 클래스인 Component의 생성자를 호출

        this.state = { //**this.state**는 컴포넌트의 상태를 정의
            list: [] //빈 배열로 초기화
        }
    }

    // 현재 컴포넌트가 마운트되었을 때
    //   list 에 2초마다 comments 변수에 있는 데이터를 추가
    //   list의 길이가 comments 길이보다 작을 경우

    componentDidMount() {   //컴포넌트가 처음으로 렌더링되고 나서 실행되는 생명주기 메서드
                            //즉, 컴포넌트가 화면에 등장한 후 실행
        const { list } = this.state;    // 비구조할당

        timer = setInterval(() => {
            if(list.length < comments.length) {
                const idx = list.length;

                list.push(comments[idx]);   //현재 list 배열의 길이를 기준으로
                                            //comments 배열의 해당 인덱스 값을 가져와
                                            // list에 추가

                this.setState({...list}); //새로운 상태로 업데이트
                                          //상태를 변경해야 화면에 변화가 반영되기 때문에
                                          // 상태 업데이트가 필요
            } else {
                this.setState({
                    list: []
                });

                clearInterval(timer); // 인터벌 제거
                //list 배열의 길이가 comments 배열의 길이와 같아지면,
                //즉 더 이상 추가할 댓글이 없을 때, 인터벌을 제거합니다.
                //그리고 list를 다시 빈 배열로 초기화
            }
        }, 2 * 1000);
    }

    render() {  //render 메서드는 화면에 UI를 렌더링하는 역할
        return (
            <>
            {
                this.state.list.map((item, index)=>{
                    return(
                        <Comment key={item.id}
                                value={item.value} />
                    )
                })
            }
            {/* this.state.list.map()을 사용하여 list 배열에 있는 모든 댓글을 순회하면서,
                각각의 댓글을 Comment 컴포넌트로 렌더링
                key={item.id}: React에서 각 반복되는 요소에는 고유한 key 값이 필요.
                이 경우, item.id를 key로 사용하여 React가 각 댓글을 고유하게 식별할 수 있도록 함 */}
            </>
        )
    }
}