import React, { useState, useEffect, useMemo } from 'react';

// --- ICONS (SVG components for a clean, dependency-free setup) ---
const Dumbbell = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.4 14.4 9.6 9.6" /><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" /><path d="m21.5 21.5-1.4-1.4" /><path d="M3.9 3.9 2.5 2.5" /><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1 2.828-2.829l6.364 6.364a2 2 0 1 1-2.829 2.829l-1.767-1.768z" /></svg>);
const Zap = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>);
const Droplet = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>);
const Pill = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>);
const Moon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>);
const Target = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>);
const CheckCircle = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>);
const Utensils = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z"></path></svg>);
const PlusCircle = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>);
const X = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>);
const TimerIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="12" y1="14" y2="22"></line><circle cx="12" cy="8" r="6"></circle></svg>);
const Clock = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const Repeat = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>;
const Layers = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;

// --- INITIAL DATABASE ---
const initialPlanData = {
    title: "Ali’s Phase‑1 Body‑Recomp Plan",
    block: "Block 1",
    blockDates: "12 Jul → 06 Aug 2025",
    trainingDays: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"],
    recoveryDays: ["Thursday", "Friday"],
    macros: {
        training: { kcal: "2,550", protein: "180g", carbs: "290g", fat: "70g" },
        rest: { kcal: "2,200", protein: "185g", carbs: "180g", fat: "80g" },
    },
    supplements: [
        { name: "Hydration", value: "≥ 3.5 L", Icon: Droplet },
        { name: "Creatine", value: "5 g", Icon: Pill },
        { name: "Omega-3", value: "2 g EPA/DHA", Icon: Pill },
        { name: "Sleep", value: "7h 45m", Icon: Moon },
    ],
    workouts: [
        { day: "Saturday", title: "LOWER POWER + AM Booster", notes: "AM (optional, fasted): Air-bike 8 × 15s sprint / 45s easy", exercises: [
            { name: "Front Squat", sets: 5, reps: "4-6", tempo: "3-1-1", rest: "90-120s" },
            { name: "Trap-Bar Deadlift", sets: 4, reps: "4-6", tempo: "2-1-1", rest: "90-120s" },
            { name: "Heels-Elevated Hack-Squat", sets: 2, reps: "8", tempo: "2-1-1", rest: "90s" },
            { name: "Barbell Hip-Thrust", sets: 3, reps: "8-10", tempo: "2-1-1", rest: "75s" },
            { name: "Standing Calf Raise", sets: 4, reps: "10-12", tempo: "2-1-2", rest: "45s" },
        ]},
        { day: "Sunday", title: "UPPER POWER", exercises: [
            { name: "Floor Press", sets: 4, reps: "4–6", tempo: "2-1-1", rest: "90s" },
            { name: "Weighted Chin-Up", sets: 4, reps: "4–6", tempo: "2-1-2", rest: "90s" },
            { name: "High-Incline Swiss-Bar Press", sets: 3, reps: "6–8", tempo: "2-1-1", rest: "75s" },
            { name: "Meadows Row", sets: 3, reps: "6–8 / side", tempo: "2-0-2", rest: "75s" },
            { name: "Seated DB Power Curl", sets: 3, reps: "8–10", tempo: "controlled", rest: "60s" },
            { name: "Core", sets: 2, reps: "30s/side", nameSecondary: "Pallof Press + Copenhagen Plank", rest: "60s" },
        ]},
        { day: "Monday", title: "METCON & Core", type: 'metcon', exercises: [
            { name: "Kettlebell Snatch", sets: 10, reps: "6/arm", notes: "Odd min, 16-20kg" },
            { name: "Box Jump", sets: 10, reps: "15", notes: "Even min, 50-60cm box" },
            { name: "Ab-Wheel → Russian Twist", sets: 3, reps: "12 → 20", notes: "Superset, 30s rest" },
            { name: "Heavy Suitcase Carry", sets: 3, reps: "40m/side", notes: "30-40kg" },
        ]},
        { day: "Tuesday", title: "LOWER HYPERTROPHY", exercises: [
            { name: "Bulgarian Split-Squat", sets: 4, reps: "10-12/leg", tempo: "3-0-1", rest: "75s" },
            { name: "Romanian Deadlift", sets: 4, reps: "10-12", tempo: "3-1-1", rest: "90s" },
            { name: "Leg-Press (dropset)", sets: 3, reps: "15-20*", tempo: "2-0-2", rest: "75s", notes: "Last set drop 25% load → failure." },
            { name: "Cable Glute-Med Abduction", sets: 3, reps: "15", tempo: "2-0-2", rest: "45s" },
            { name: "Seated Calf Raise", sets: 4, reps: "12–15", tempo: "2-1-2", rest: "45s" },
            { name: "Core: Ab-Wheel Roll-out", sets: 3, reps: "10-15", tempo: "controlled", rest: "60s" },
        ]},
        { day: "Wednesday", title: "UPPER VOLUME Giant-Set", type: 'giantset', notes: "Perform A→B→C→D, rest 90s, repeat for 4 total rounds.", exercises: [
            { name: "A. Incline DB Flye", reps: "12-15" },
            { name: "B. Meadows Row", reps: "10-12/side" },
            { name: "C. High-Cable Y-Raise", reps: "15" },
            { name: "D. Weighted Dips", reps: "10-12" },
            { name: "Arm Finisher", reps: "3 rounds", notes: "Reverse EZ Curl × 15 → Decline Skull-crusher × 15" },
        ]}
    ].map(workout => ({
        ...workout,
        exercises: workout.exercises.map((ex, index) => ({ id: `${workout.day}-${index}`, ...ex, logs: [], completed: false }))
    })),
    mealPlan: { title: "Daily Meal Framework", notes: "Swap foods 1-for-1 to hit macros.", meals: [ { time: "10:00", items: "Oats 70g + Whey 30g + Berries 120g + PB 10g" }, { time: "12:30", items: "Chicken Thigh 150g + Jasmine Rice 220g cooked" }, { time: "17:00", items: "EAAs + Dextrose 10g (intra)" }, { time: "18:30", items: "Greek Yogurt 0% 250g + Honey 10g" }, { time: "20:30", items: "Shrimp Stir-Fry + Quinoa 150g cooked + Spinach" }, { time: "22:00", items: "Cottage Cheese low-fat 120g + Kiwi" } ] },
    weeklyObjectives: [ { week: 1, date: "12–16 Jul", scale: "≤ 112.4 kg", muscle: "≥ 42.4 kg", bf: "≤ 30.9 %", habit: "8k steps baseline • Sleep 7h45", progression: "Dial in form & RPE cues" }, { week: 2, date: "19–23 Jul", scale: "≤ 111.8 kg", muscle: "≥ 42.5 kg", bf: "≤ 30.5 %", habit: "Steps 9k • +10 min LISS Sun", progression: "+2.5 kg or +1 rep on compounds" }, { week: 3, date: "26–30 Jul", scale: "≤ 111.2 kg", muscle: "≥ 42.6 kg", bf: "≤ 30.1 %", habit: "Steps 10k • Mobility 10 min/day", progression: "Add 1 assistance set for delts & mid-back" }, { week: 4, date: "02–06 Aug", scale: "≤ 110.6 kg", muscle: "≥ 42.7 kg", bf: "≤ 29.8 %", habit: "Maintain 10k steps • Evening stretch 15 min", progression: "Peak loads; prep for Week-6 deload" }, ],
    checkIn: { title: "Saturday Check-In (Fasted)", items: [ "Smart-scale weight + BF%", "Front/side/back pics (same lighting)", "Log best & worst lift, energy 1-10, sleep avg", "DM → macros / volume adjusted for Week-2." ] }
};

// --- HELPER FUNCTIONS ---
const getTodayAndWeek = () => {
    const today = new Date();
    const startDate = new Date('2025-07-12T00:00:00-04:00');
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayName = dayNames[today.getDay()];
    const diffTime = today - startDate;
    const diffDays = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
    const currentWeek = Math.floor(diffDays / 7) + 1;
    return { currentDayName, currentWeek };
};

// --- UI COMPONENTS ---
const AnimatedBackground = () => (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M-10%2010.5%20C%2025%20-10%2050%20-10%20110%2010.5%20V%20110%20H%20-10%20Z%22%20fill%3D%22%23083344%22/%3E%3C/svg%3E')] bg-repeat-x opacity-20 animate-bg-pan-slow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl rounded-full animate-aurora-1"></div>
        <div className="absolute top-1/3 right-1/4 w-1/3 h-1/2 bg-gradient-radial from-purple-500/20 to-transparent blur-3xl rounded-full animate-aurora-2"></div>
    </div>
);

const Card = ({ children, className = '' }) => (
  <div className={`bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ Icon, title }) => ( <div className="flex items-center gap-3 mb-4"> <Icon className="w-6 h-6 text-cyan-400" /> <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2> </div> );

const LiveClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    const formattedDate = time.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="text-center bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-4 max-w-sm mx-auto">
            <p className="text-lg text-gray-300">{formattedDate}</p>
            <p className="text-4xl font-bold text-white tracking-widest">{formattedTime}</p>
        </div>
    );
};

const Header = () => (
    <header className="text-center py-8 px-4 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">{initialPlanData.title}</span>
        </h1>
        <LiveClock />
    </header>
);

const LogSetModal = ({ exercise, onClose, onLogSet }) => {
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (reps && weight) {
            onLogSet({ reps: parseInt(reps), weight: parseFloat(weight) });
            setReps(''); setWeight(''); onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-fast">
            <div className="bg-gray-900 border border-cyan-500/30 rounded-2xl shadow-2xl w-full max-w-sm p-6 relative animate-slide-up-fast">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition"><X className="w-6 h-6" /></button>
                <h3 className="text-xl font-bold text-white mb-2">Log Set for</h3>
                <p className="text-cyan-400 text-lg mb-6">{exercise.name}</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm font-bold text-gray-400 block mb-2">Reps</label>
                        <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} placeholder={exercise.reps || '10'} className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <div>
                        <label className="text-sm font-bold text-gray-400 block mb-2">Weight (kg)</label>
                        <input type="number" step="0.5" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="20" className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    </div>
                    <button type="submit" className="w-full bg-cyan-500 text-gray-900 font-bold py-3 rounded-lg hover:bg-cyan-400 transition-transform duration-300 transform hover:scale-105 shadow-lg">Log Set</button>
                </form>
            </div>
        </div>
    );
};

const RestTimer = ({ seconds, onFinished }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    useEffect(() => {
        if (timeLeft <= 0) { onFinished(); return; }
        const intervalId = setInterval(() => { setTimeLeft(timeLeft - 1); }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft, onFinished]);
    
    const minutes = Math.floor(timeLeft / 60);
    const remainingSeconds = timeLeft % 60;

    return (
        <div className="fixed bottom-5 right-5 bg-black/50 backdrop-blur-lg border border-cyan-500/50 rounded-2xl p-4 shadow-2xl flex items-center gap-3 z-50 animate-fade-in-fast">
            <TimerIcon className="w-6 h-6 text-cyan-400 animate-pulse"/>
            <div>
                <p className="text-xs text-gray-400">Rest Timer</p>
                <p className="text-2xl font-bold text-white tracking-widest">{minutes}:{remainingSeconds.toString().padStart(2, '0')}</p>
            </div>
        </div>
    );
};

const StatPod = ({ icon: Icon, label, value }) => (
    <div className="flex-1 min-w-[70px] bg-white/5 p-2 rounded-lg text-center transition-colors hover:bg-white/10">
        <Icon className="w-4 h-4 mx-auto text-cyan-400 mb-1" />
        <p className="text-xs font-bold text-gray-300 uppercase">{label}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
    </div>
);

const WorkoutCard = ({ workout, onToggleComplete, onSetClick, dynamicDate }) => {
    if (!workout) {
        return <Card className="p-6 flex flex-col items-center justify-center text-center h-full min-h-[400px]"><img src="https://placehold.co/100x100/1e293b/94a3b8?text=😴" alt="Rest Day" className="rounded-full w-24 h-24 mb-4" /><h3 className="text-2xl font-bold text-white">Recovery Day</h3><p className="text-gray-400 mt-2">Rest, hydrate, and grow.</p></Card>;
    }
    
    const completedExercises = workout.exercises.filter(ex => ex.completed).length;
    const totalExercises = workout.exercises.length;
    const progress = totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0;

    return (
        <Card className="p-0 overflow-hidden h-full">
            <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{workout.title}</h3>
                <p className="text-sm text-cyan-400 font-semibold mb-4">{dynamicDate}</p>
                {workout.notes && <p className="text-center text-sm bg-black/20 p-2 rounded-md text-gray-300 mb-6">{workout.notes}</p>}
                
                <div className="space-y-1 mb-4">
                    <div className="flex justify-between items-center text-xs text-gray-400 font-bold"><span>PROGRESS</span><span>{completedExercises}/{totalExercises}</span></div>
                    <div className="w-full bg-white/10 rounded-full h-2.5"><div className="bg-gradient-to-r from-sky-400 to-cyan-400 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div></div>
                </div>
            </div>

            <div className="px-6 pb-6">
                {workout.exercises.map((ex, index) => (
                    <div key={ex.id} className={`p-4 rounded-lg transition-all duration-300 border-b-2 border-white/5 last:border-b-0 animate-slide-up`} style={{animationDelay: `${index * 100}ms`}}>
                        <div className="flex items-center gap-4">
                            <input type="checkbox" checked={ex.completed} onChange={() => onToggleComplete(workout.day, ex.id)} className="form-checkbox h-5 w-5 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-600 cursor-pointer" />
                            <div className="flex-1">
                                <h4 className={`font-bold text-lg transition-colors ${ex.completed ? 'text-gray-500 line-through' : 'text-white'}`}>{ex.name}</h4>
                                {ex.nameSecondary && <p className="text-sm text-cyan-400">{ex.nameSecondary}</p>}
                                <div className="mt-2 space-y-1 text-xs">
                                    {ex.logs.map((log, i) => (<p key={i} className="text-gray-300 bg-white/10 px-2 py-1 rounded w-fit">Set {i+1}: {log.reps} reps @ {log.weight} kg</p>))}
                                </div>
                            </div>
                            <button onClick={() => onSetClick(ex)} className="bg-white/10 hover:bg-cyan-500 hover:text-gray-900 text-cyan-400 font-bold p-2 rounded-full transition-all duration-300 self-center disabled:opacity-50 disabled:cursor-not-allowed" disabled={ex.completed}>
                                <PlusCircle className="w-6 h-6"/>
                            </button>
                        </div>
                        <div className="flex gap-2 mt-4">
                            {ex.sets && <StatPod icon={Layers} label="Sets" value={ex.sets} />}
                            {ex.reps && <StatPod icon={Repeat} label="Reps" value={ex.reps} />}
                            {ex.tempo && <StatPod icon={Clock} label="Tempo" value={ex.tempo} />}
                            {ex.rest && <StatPod icon={TimerIcon} label="Rest" value={ex.rest} />}
                        </div>
                        {ex.notes && !workout.notes && <p className="text-xs text-cyan-300 mt-3 bg-cyan-900/20 p-2 rounded-md">{ex.notes}</p>}
                    </div>
                ))}
            </div>
        </Card>
    );
};

const MacroCard = () => { const [dayType, setDayType] = useState('training'); const macros = initialPlanData.macros[dayType]; const supplementList = initialPlanData.supplements; return( <div className="p-1"> <SectionTitle Icon={Zap} title="Daily Targets" /> <div className="flex bg-black/20 p-1 rounded-lg mb-4 border border-white/10"> <button onClick={() => setDayType('training')} className={`w-1/2 py-2 rounded-md font-bold text-sm transition ${dayType === 'training' ? 'bg-cyan-500 text-gray-900' : 'text-gray-300 hover:bg-white/10'}`}>Training</button> <button onClick={() => setDayType('rest')} className={`w-1/2 py-2 rounded-md font-bold text-sm transition ${dayType === 'rest' ? 'bg-cyan-500 text-gray-900' : 'text-gray-300 hover:bg-white/10'}`}>Rest</button> </div> <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6"> <div className="bg-black/20 p-3 rounded-lg"><p className="text-xs text-gray-400">kcal</p><p className="text-xl font-bold text-white">{macros.kcal}</p></div> <div className="bg-black/20 p-3 rounded-lg"><p className="text-xs text-cyan-400">Protein</p><p className="text-xl font-bold text-white">{macros.protein}</p></div> <div className="bg-black/20 p-3 rounded-lg"><p className="text-xs text-orange-400">Carbs</p><p className="text-xl font-bold text-white">{macros.carbs}</p></div> <div className="bg-black/20 p-3 rounded-lg"><p className="text-xs text-yellow-400">Fat</p><p className="text-xl font-bold text-white">{macros.fat}</p></div> </div> <div className="grid grid-cols-2 gap-4"> {supplementList.map(item => ( <div key={item.name} className="flex items-center gap-3"> <item.Icon className="w-5 h-5 text-cyan-400 flex-shrink-0" /> <div> <p className="font-bold text-white text-sm">{item.name}</p> <p className="text-xs text-gray-400">{item.value}</p> </div> </div> ))} </div> </div> );}
const MealPlanCard = () => ( <div className="p-1"> <SectionTitle Icon={Utensils} title={initialPlanData.mealPlan.title} /> <p className="text-sm text-gray-400 -mt-3 mb-4">{initialPlanData.mealPlan.notes}</p> <div className="space-y-3"> {initialPlanData.mealPlan.meals.map((meal, index) => ( <div key={meal.time} className="flex gap-4 animate-slide-up" style={{ animationDelay: `${index * 100}ms`}}> <div className="font-bold text-cyan-400 text-sm w-12 text-right">{meal.time}</div> <div className="border-l-2 border-white/10 pl-4 flex-1"> <p className="text-gray-300 text-sm">{meal.items}</p> </div> </div> ))} </div> </div> );
const CheckInCard = () => ( <div className="p-1"> <SectionTitle Icon={CheckCircle} title={initialPlanData.checkIn.title}/> <ul className="space-y-2"> {initialPlanData.checkIn.items.map((item, i) => ( <li key={i} className="flex items-start gap-3 animate-slide-up" style={{ animationDelay: `${i * 100}ms`}}> <span className="text-cyan-400 mt-1">✓</span> <span className="text-gray-300">{item}</span> </li> ))} </ul> </div> );
const WeeklyObjectivesCard = ({ todayInfo }) => (
    <Card className="p-6">
        <SectionTitle Icon={Target} title="Block 1 Objectives" />
        <div className="overflow-x-auto -mx-2">
            <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                    <tr className="border-b border-white/10 text-gray-400 uppercase text-xs">
                        <th className="p-2">Wk</th>
                        <th className="p-2">Scale</th>
                        <th className="p-2">Muscle</th>
                        <th className="p-2">BF%</th>
                        <th className="p-2">Habit</th>
                        <th className="p-2">Progression</th>
                    </tr>
                </thead>
                <tbody>
                    {initialPlanData.weeklyObjectives.map(obj => (
                        <tr key={obj.week} className={`border-b border-black/20 last:border-b-0 ${todayInfo.currentWeek === obj.week ? 'bg-cyan-500/10' : ''}`}>
                            <td className="p-2 font-bold text-white">{obj.week}</td>
                            <td className="p-2 text-gray-300">{obj.scale}</td>
                            <td className="p-2 text-gray-300">{obj.muscle}</td>
                            <td className="p-2 text-gray-300">{obj.bf}</td>
                            <td className="p-2 text-gray-300">{obj.habit}</td>
                            <td className="p-2 text-gray-300">{obj.progression}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Card>
);

const SidebarTabs = () => {
    const [activeTab, setActiveTab] = useState('macros');
    return (
        <Card>
            <div className="flex border-b border-white/10 p-2">
                <button onClick={() => setActiveTab('macros')} className={`w-1/3 py-2 rounded-md font-bold text-sm transition ${activeTab === 'macros' ? 'bg-cyan-500 text-gray-900' : 'text-gray-300 hover:bg-white/10'}`}>Macros</button>
                <button onClick={() => setActiveTab('meals')} className={`w-1/3 py-2 rounded-md font-bold text-sm transition ${activeTab === 'meals' ? 'bg-cyan-500 text-gray-900' : 'text-gray-300 hover:bg-white/10'}`}>Meals</button>
                <button onClick={() => setActiveTab('checkin')} className={`w-1/3 py-2 rounded-md font-bold text-sm transition ${activeTab === 'checkin' ? 'bg-cyan-500 text-gray-900' : 'text-gray-300 hover:bg-white/10'}`}>Check-In</button>
            </div>
            <div className="p-5">
                {activeTab === 'macros' && <MacroCard />}
                {activeTab === 'meals' && <MealPlanCard />}
                {activeTab === 'checkin' && <CheckInCard />}
            </div>
        </Card>
    )
}


// --- MAIN APP COMPONENT ---
export default function App() {
    const todayInfo = useMemo(() => getTodayAndWeek(), []);
    const [planData, setPlanData] = useState(initialPlanData);
    const [selectedDay, setSelectedDay] = useState(todayInfo.currentDayName);
    const [modalExercise, setModalExercise] = useState(null);
    const [restTimerInfo, setRestTimerInfo] = useState({ active: false, seconds: 0 });

    const weekOrder = useMemo(() => ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], []);
    const today = useMemo(() => new Date(), []);

    const dynamicDateForSelectedDay = useMemo(() => {
        if (!selectedDay) return '';
        
        const todayOrderIndex = weekOrder.indexOf(todayInfo.currentDayName);
        const selectedOrderIndex = weekOrder.indexOf(selectedDay);

        if (todayOrderIndex === -1 || selectedOrderIndex === -1) return '';

        const dayDifference = selectedOrderIndex - todayOrderIndex;
        const selectedDate = new Date(today);
        selectedDate.setDate(today.getDate() + dayDifference);

        return selectedDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    }, [selectedDay, today, todayInfo.currentDayName, weekOrder]);

    const handleLogSet = (log) => {
        setPlanData(prevPlan => ({...prevPlan, workouts: prevPlan.workouts.map(w => ({ ...w, exercises: w.exercises.map(ex => ex.id === modalExercise.id ? { ...ex, logs: [...ex.logs, log] } : ex) }))}));
        const restString = modalExercise.rest || "60s";
        const secondsMatch = restString.match(/\d+/);
        const seconds = secondsMatch ? parseInt(secondsMatch[0]) : 60;
        setRestTimerInfo({ active: true, seconds: seconds });
    };

    const handleToggleComplete = (day, exerciseId) => {
        setPlanData(prevPlan => ({ ...prevPlan, workouts: prevPlan.workouts.map(w => w.day === day ? { ...w, exercises: w.exercises.map(ex => ex.id === exerciseId ? { ...ex, completed: !ex.completed } : ex)} : w) }));
    };

    const workoutForSelectedDay = planData.workouts.find(w => w.day === selectedDay);

    return (
        <>
        <style>{`
            @keyframes bg-pan { from { background-position: 0% center; } to { background-position: -200% center; } }
            .animate-bg-pan-slow { animation: bg-pan 30s linear infinite; }
            @keyframes aurora-1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(40px, 60px) scale(1.2); } }
            .animate-aurora-1 { animation: aurora-1 20s ease-in-out infinite; }
            @keyframes aurora-2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-50px, -30px) scale(1.1); } }
            .animate-aurora-2 { animation: aurora-2 22s ease-in-out infinite; animation-delay: 5s; }
            @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
            @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
            .animate-slide-up { animation: slide-up 0.5s ease-out forwards; opacity: 0; animation-fill-mode: forwards; }
            .animate-fade-in-fast { animation: fade-in 0.3s ease-out forwards; }
            .animate-slide-up-fast { animation: slide-up 0.3s ease-out forwards; }
        `}</style>
        <div className="min-h-screen text-white font-sans antialiased">
            <AnimatedBackground />
            <div className="relative isolate min-h-screen flex flex-col">
                <Header />
                 <main className="flex-grow container mx-auto px-4 pb-12">
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 animate-slide-up" style={{animationDelay: '200ms'}}>
                             <WorkoutCard workout={workoutForSelectedDay} onToggleComplete={handleToggleComplete} onSetClick={setModalExercise} dynamicDate={dynamicDateForSelectedDay} />
                        </div>

                        <div className="space-y-8 animate-slide-up" style={{animationDelay: '400ms'}}>
                            <Card className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Today's Focus: <span className="text-cyan-400">{todayInfo.currentDayName}</span></h3>
                                <p className="text-gray-400">Week {todayInfo.currentWeek} • Let's crush it.</p>
                            </Card>
                            <Card className="p-2">
                               <div className="flex flex-wrap justify-center gap-1">
                                    {[...initialPlanData.trainingDays, ...initialPlanData.recoveryDays].map(day => {
                                        const isSelected = selectedDay === day;
                                        const isToday = todayInfo.currentDayName === day;
                                        return (
                                            <button key={day} onClick={() => setSelectedDay(day)} className={`relative flex-grow px-3 py-2 text-xs md:text-sm font-bold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 ${isSelected ? 'bg-cyan-500 text-gray-900 shadow-lg' : 'bg-black/20 text-gray-300 hover:bg-white/10'} ${isToday && !isSelected ? 'ring-2 ring-cyan-500/50' : ''}`}>
                                                {day} {isToday && <span className="absolute -top-1 -right-1 flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span></span>}
                                            </button>
                                        );
                                    })}
                                </div>
                            </Card>
                            <SidebarTabs />
                        </div>
                    </div>
                    <div className="mt-8 animate-slide-up" style={{animationDelay: '600ms'}}>
                        <WeeklyObjectivesCard todayInfo={todayInfo} />
                    </div>
                 </main>
                 <footer className="text-center py-4 text-xs text-gray-500">
                    <p>Let’s make the camera jealous! 🚀</p>
                </footer>
                {modalExercise && <LogSetModal exercise={modalExercise} onClose={() => setModalExercise(null)} onLogSet={handleLogSet} />}
                {restTimerInfo.active && <RestTimer seconds={restTimerInfo.seconds} onFinished={() => setRestTimerInfo({ active: false, seconds: 0 })} />}
            </div>
        </div>
        </>
    );
}


