const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
                    />
                </div>
            </div>
            <div className="chat-bubble">Hello, how are you?</div>
            <time className="text-xs opacity-50">12:45</time>
        </div>
    );
};

export default Message;
