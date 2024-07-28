import styled from 'styled-components';

export const Container = styled.header`
grid-area: header;
width:100%;
border-bottom:  1px solid ${({theme})=>theme.COLORS.BACKGROUND_700};
display: flex;
justify-content: space-between;

padding: 0 80px;


`

export const Profile = styled.div`
display: flex;
align-items: center;



>img{
    width:90px;
    height: 90px;
    border-radius: 50%;
    border: 1px solid ${({theme})=>theme.COLORS.ORANGE};
    padding:2px;
    transition: 2s


}
& img:hover{
   transform: scale(1.3);
   transition: 2s

}
>div{
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span{
        font-size: 14px;
        color:${({theme})=>theme.COLORS.GRAY_100}

    }
    strong{
        font-size: 18px;
        color:${({theme})=>theme.COLORS.WHITE}

    }
}

`
 export const Logout = styled.button`
    border:none;
    background: none;
    
    >svg{
        color:${({theme})=>theme.COLORS.GRAY_100};
        font-size: 36px;
        transition: 2s;

    }
    & svg:hover{
        transform: scale(1.3);
        transition: 1s;
        color:${({theme})=>theme.COLORS.RED};
        opacity:0.3;
        cursor:pointer
    }
 
 ` 


