//компонет управления кнопкой-свич для переключения отображения товаров

export default function IconSwitch(props) {
    const { icon, onSwitch } = props;
    
    return (
        <div className="material-icons" onClick={() => onSwitch(icon)}>
             {icon}
        </div>
    ) 
}