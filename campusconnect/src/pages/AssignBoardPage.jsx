import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import $ from 'jquery';
import styled from 'styled-components';

class SoftwareView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseSwtoolInfo: '',//swtool 정보 response 변수
            append_SwtoolInfo: '', //swtool 정보 append 변수

            //파일, 이미지 업로드
            file: '',//메인 이미지 미리보기용 path
            file2: '',//라벨 이미지 미리보기용 path
            fileName: '',//상품 이미지명
            fileName2: '',//상품 이미지명
            menualName: '',//메뉴얼명
            selectedFile: null, //업로드 대상 파일
        }
    }
    componentDidMount () {
        // SW Tool 정보 호출
        this.callSwToolInfoApi()
    }

    //업로드할 파일 세팅
    handleFileInput(type, e){
        var id = e.target.id
        if(type =='file'){
            $('#imagefile').val(e.target.files[0].name)
        }else if(type =='file2'){
            $('#imagefile2').val(e.target.files[0].name)
        }else if(type =='manual'){
            $('#manualfile').val(e.target.files[0].name)
        }
        this.setState({
          selectedFile : e.target.files[0],
        })

        if(type =='manual'){
            setTimeout(function() {
                this.handlePostMenual(type, id ,e)
            }.bind(this),1
            );
        }else{
            setTimeout(function() {
                this.handlePostImage(type, id ,e)
            }.bind(this),1
            );
        }
    }

    //메뉴얼 업로드
    handlePostMenual(type, id, e){
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
    
        return axios.post("/api/upload?type=uploads/swmanual/", formData).then(res => {
            try {

                this.state.menualName = res.data.filename
                
                $('#upload_menual').prepend('<input id="is_MenualName" type="hidden" name="is_MenualName" value="'+this.state.menualName+'"}/>')
            } catch (error) {
                alert('작업중 오류가 발생하였습니다.')
            }
        }).catch(error => {
            alert('작업중 오류가 발생하였습니다.')
        })
    }    

    //이미지 업로드
    handlePostImage(type, id, e){
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
    
        return axios.post("/api/upload?type=uploads/image/", formData).then(res => {
            try {
                setTimeout(function() {
                    if(type =='file'){
                        this.state.file = '/image/'+res.data.filename
                        this.state.fileName = res.data.filename
                        $('#upload_img').prepend('<img id="uploadimg" src="'+this.state.file+'"/>')
                        $('#upload_img').prepend('<input id="is_MainImg" type="hidden" name="is_MainImg" value="'+this.state.fileName+'"}/>')
                        
                    }else if(type =='file2'){
                        this.state.file2 = '/image/'+res.data.filename
                        this.state.fileName2 = res.data.filename
                        $('#upload_img2').prepend('<img id="uploadimg2" src="'+this.state.file2+'"/>')
                        $('#upload_img2').prepend('<input id="is_LabelImg" type="hidden" name="is_LabelImg" value="'+this.state.fileName2+'"}/>')
                    }
                }.bind(this),1000
                );

            } catch (error) {
                alert('작업중 오류가 발생하였습니다.')            
            }
        }).catch(error => {
            alert('작업중 오류가 발생하였습니다.')            
        })
    }


    // SW Tool 정보 호출
    callSwToolInfoApi = async () => {
        this.setState({ append_SwtoolInfo: this.SwToolInfoAppend() });
    }

    // SW Tool 정보 append
    SwToolInfoAppend = () => {
      let result = []
      result.push(
        <Styled>
            <table>
                    <tr>
                        <th>
                        <label for="is_Swt_toolname" >상품명<span class="red"></span></label>
                        </th>
                        <td>
                        <textarea name = "is_Comments" id="is_Comments" rows="" cols="" >
                        </textarea>
                        </td>
                    </tr>
                   <tr class="div_tb_tr fileb">
                        <th>
                            상품 이미지 1
                        </th>
                        <td class="fileBox fileBox_w1">
                            <label for="uploadBtn1" class="btn_file">파일선택{" "}</label>
                            <input type="text" id="manualfile" class="fileName fileName1" readonly="readonly" placeholder="선택된 파일 없음"/>
                            <input type="file" id="uploadBtn1" class="uploadBtn uploadBtn1" onChange={e => this.handleFileInput('manual',e)}/>   
                            <div id="upload_menual">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            상품 이미지 2
                        </th>
                        <td className="fileBox fileBox1">
                            <label htmlFor='imageSelect' className="btn_file">파일선택{" "}</label>
                            <input type="text" id="imagefile" className="fileName fileName1" readOnly="readonly" placeholder="선택된 파일 없음"/>
                            <input type="file" id="imageSelect" className="uploadBtn uploadBtn1" onChange={e => this.handleFileInput('file',e)}/>
                            <div id="upload_img">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            상품 이미지 3
                        </th>
                        <td className="fileBox fileBox2">
                            <label htmlFor='imageSelect2' className="btn_file">파일선택{" "}</label>
                            <input type="text" id="imagefile2" className="fileName fileName1" readOnly="readonly" placeholder="선택된 파일 없음"/>
                            <input type="file" id="imageSelect2" className="uploadBtn uploadBtn1" onChange={e => this.handleFileInput('file2',e)}/>
                            <div id="upload_img2">
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <th>
                            <label for="is_Comments">상품 설명{" "}<span class="red"></span></label>
                        </th>
                        <td>
                            <textarea name="is_Comments" id="is_Comments" rows="20" cols=""></textarea>
                        </td>
                    </tr>
                </table>
                </Styled>
            )  
            
        return result
            }
            
  

    // 저장 버튼 클릭시 validate check
    submitClick = async (type, e) => {

        this.Swt_toolname_checker = $('#is_Swt_toolname').val();
        this.Swt_demo_site_checker = $('#is_Swt_demo_site').val();
        this.Giturl_checker = $('#is_Giturl').val();
        this.Comments_checker = $('#is_Comments').val();
        this.Swt_function_checker = $('#is_Swt_function').val();

        this.fnValidate = (e) => {

            // ## Comments check start 
            if(this.Comments_checker === '') {
                $('#is_Comments').addClass('border_validate_err');
                alert('설명을 다시 확인해주세요.')
                return false;
            }
            $('#is_Comments').removeClass('border_validate_err');

            // ## Swt_function check start 
            if(this.Swt_function_checker === '') {
                $('#is_Swt_function').addClass('border_validate_err');
                alert('상세기능을 다시 확인해주세요.')
                return false;
            }
            $('#is_Swt_function').removeClass('border_validate_err');

            var date = new Date()
            var y_str = date.getFullYear().toString();

            var month = date.getMonth()+1
            var m_str = month.toString();

            var day = date.getDate()
            var d_str = day.toString();

            var hour = date.getHours()
            var min = date.getMinutes()
            var sec = date.getSeconds()

            // 프로젝트 코드생성
            this.state.swtcode = 'USW'+y_str+m_str+d_str+hour+min+sec
            
            $('#is_Swtcode').val(this.state.swtcode)

            return true;
        }

        //유효성 체크
        if(this.fnValidate()){
            //software Tools 저장
            //form type To Json
            var jsonstr = $("form[name='frm']").serialize();
            //특수문자 깨짐 해결
            jsonstr = decodeURIComponent(jsonstr);
            var Json_form = JSON.stringify(jsonstr).replace(/\"/gi,'')
            Json_form = "{\"" +Json_form.replace(/\&/g,'\",\"').replace(/=/gi,'\":"')+"\"}";
        
            try {
                const response = await fetch('/api/Swtool?type='+type, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    //한글 디코딩
                    body: Json_form,
                });
                const body = await response.text();
                if(body == "succ"){
                    if(type == 'save'){
                        alert('Software Tools 등록이 완료되었습니다.')
                    }else if(type == "modify"){
                        alert('DSoftware Tools 수정이 완료되었습니다.')
                    }
                    // 저장 후 리스트페이지로 이동
                    window.location.href = 'http://localhost:3000/AdminSoftwareList';
                }else{
                    alert('작업중 오류가 발생하였습니다.')
                }  
            } catch (error) {
                alert('작업중 오류가 발생하였습니다.')
            }
        }//fnValidate end
    };

    render () {
        return (
          <StyledWrapper>
            <section class="sub_wrap">
                <article class="s_cnt mp_pro_li ct1">
                    <div class="li_top">
                    <div className="title">판매 게시글 작성</div>
                    </div>
                    
                    <div class="bo_w re1_wrap re1_wrap_writer">
                        <form name="frm" id="frm" action="" onsubmit="" method="post" >
                            <input id="is_Email" type="hidden" name="is_Email" value={this.state.admin_userid} />
                            <input id="is_Swtcode" type="hidden" name="is_Swtcode" value={this.state.swtcode} />
                            <input id="is_beforeSwtcode" type="hidden" name="is_beforeSwtcode" value={this.state.before_swtcode} />
                            
                            <article class="res_w">
                              
                                <div class="tb_outline">
                                    {this.state.append_SwtoolInfo}

                                    <div class="button" style={{"margin-bottom": "44px"}}>
                                        <Link to={'/AdminSoftwareList'} className="bt_ty bt_ty1 cancel_ty1"> 
                                        <button>작성 취소</button></Link>
                                        <a href="javascript:" className="bt_ty bt_ty2 submit_ty1 saveclass" onClick={(e) => this.submitClick('save', e)}>
                                        <button>작성 완료</button></a>
                                    </div>

                                </div>
                            </article>
                        </form>   
                    </div> 
                </article>
             </section>
            </StyledWrapper>
        );
      }
    }


export default SoftwareView;



const StyledWrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;
padding-left: 50px;

.title {
  font-size: 35px;
  font-weight: bold;
  padding-left: 275px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 30px;
}

label{
    padding-left:55px;
}

button{
    margin : 0 auto;
    display: flex;
    margin-top: 30px;
    margin-bottom: 20px;
    align-items: center;
    margin-left:350px;
    background-color: #5b7eef;
    padding: 10px 35px;
    color: #fff;
    border-radius: 10px;
    font-size: 12px;
    cursor: pointer;
}

textarea {
    width: 100%;
    resize: none;
    margin-top: 10px;
    text-align: center;
    border-radius: 10px;

  }

`

const Styled = styled.div`
label{
    padding-right: 15px;
}

.tably1e_t{
    text-align: center;
}

input-wrapper {
    margin-bottom: 30px;
    align-items: center;
  

    input {
      height: 30px;
      width: 200px;
      border-radius: 10px;
      padding: 0 10px;
      border: 1px solid black;
    }
`