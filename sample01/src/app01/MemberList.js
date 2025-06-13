import Member from './Member'

const MemberList = ({ members }) => {
    const result = members.length === 0
    ? "登録者がいません"
    :
    <table border="1">
        <tr>
            <th>ID</th><th>名前</th>
        </tr>
        {
            members.map(member =>
                <Member member={member} />
            )
        }
    </table>

    return (
        <div>
            {result}
        </div>
    )
}

export default MemberList
